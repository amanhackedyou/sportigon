import { getRedisClient } from "@/libs/redis";
import { getMatches } from "sportigon_sports/football";

// export const updateMatchesCache = async (date: string) => {
//     const LIMIT = 100;
//     let offset = 0;
//     let total = Infinity; // unknown initially
//     let matches: any[] = [];

//     while (offset < total) {
//         const response = await getMatches({
//             date,
//             limit: LIMIT,
//             offset: offset
//         });

//         // add current matches
//         matches = matches.concat(response.data);

//         // update total count from API
//         total = response.pagination.totalCount;

//         // increment offset
//         offset += LIMIT;
//     }

//     // let organizedMatches: { [key: string]: any[] } = {};
//     let organizedMatches: { [key: string]: any } = {};

//     matches.forEach((match) => {
//         const countryCode = `${match.country.code}`;
//         if (!organizedMatches[countryCode]) {
//             organizedMatches[countryCode] = {};
//             organizedMatches[countryCode]["countryName"] = match.country.name;
//             organizedMatches[countryCode]["countryCode"] = match.country.code;
//             organizedMatches[countryCode]["countryLogo"] = match.country.logo;
//             organizedMatches[countryCode]["matches"] = [];
//         }
//         organizedMatches[countryCode]["matches"].push(match);
//     });

//     const redis = getRedisClient();

//     // Store with expiry (10 minutes)
//     const key = `matches:${date}`;
//     await redis.set(key, JSON.stringify(organizedMatches), 'EX', 600);
// };


// Example priority league IDs (customize as needed)
const PRIORITY_LEAGUES = [
    119924, // Lala Liga
    67162, // Bundesliga
    115669, // Serie A
];

export const updateMatchesCache = async (date: string) => {
    const LIMIT = 100;
    let offset = 0;
    let total = Infinity;
    let matches: any[] = [];

    while (offset < total) {
        const response = await getMatches({
            date,
            limit: LIMIT,
            offset: offset
        });

        matches = matches.concat(response.data);
        total = response.pagination.totalCount;
        offset += LIMIT;
    }

    // Organize → Country → Leagues → Matches
    const organizedMatches: { [countryCode: string]: any } = {};

    matches.forEach((match) => {
        const countryCode = match.country.code;
        const leagueId = match.league.id;

        // Create country block if not exists
        if (!organizedMatches[countryCode]) {
            organizedMatches[countryCode] = {
                countryName: match.country.name,
                countryCode: match.country.code,
                countryLogo: match.country.logo,
                leagues: {}
            };
        }

        // Create league block if not exists
        if (!organizedMatches[countryCode].leagues[leagueId]) {
            organizedMatches[countryCode].leagues[leagueId] = {
                leagueId: leagueId,
                leagueName: match.league.name,
                leagueLogo: match.league.logo,
                season: match.league.season,
                matches: []
            };
        }

        // Push match inside league
        organizedMatches[countryCode].leagues[leagueId].matches.push({
            id: match.id,
            round: match.round,
            date: match.date,
            state: match.state.description,
            score: match.state.score,
            homeTeam: match.homeTeam,
            awayTeam: match.awayTeam
        });
    });

    // Convert leagues object → array + prioritize
    Object.keys(organizedMatches).forEach((countryCode) => {
        const country = organizedMatches[countryCode];

        const leaguesArray = Object.values(country.leagues);

        // Sort leagues → priority first, then alphabetically
        leaguesArray.sort((a: any, b: any) => {
            const aPriority = PRIORITY_LEAGUES.includes(a.leagueId);
            const bPriority = PRIORITY_LEAGUES.includes(b.leagueId);

            if (aPriority && !bPriority) return -1;
            if (!aPriority && bPriority) return 1;
            return a.leagueName.localeCompare(b.leagueName);
        });

        country.leagues = leaguesArray;
    });

    // Save in Redis with TTL (10 min)
    const redis = getRedisClient();
    const key = `matches:${date}`;
    await redis.set(key, JSON.stringify(organizedMatches), "EX", 600);
};
