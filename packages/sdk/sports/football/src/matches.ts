import { footballClient } from "..";


export interface MatchReqDataType {
    leagueName?: string | null;
    leagueId?: number | null;
    date?: string | null;          // ISO string (e.g., "2023-08-06")
    timezone?: string | null;
    season?: number | null;
    homeTeamId?: number | null;
    awayTeamId?: number | null;
    homeTeamName?: string | null;
    awayTeamName?: string | null;
    countryCode?: string | null;   // e.g. "SE"
    countryName?: string | null;   // e.g. "Sweden"
    limit?: number | null; // default is 100
    offset?: number | null; // default is 0
}

export const getMatches = async (params: MatchReqDataType) => {
    try {
        const response = await footballClient.get("/matches", { params });
        return response.data;
    } catch (error) {
        return {
            statusCode: 500,
            message: "Failed to fetch matches."
        }
    }
}



export const getMatchById = async (id: number) => {
    try {
        const response = await footballClient.get(`/matches/${id}`);
        return response.data;
    } catch (error) {
        return {
            statusCode: 500,
            message: "Failed to fetch match."
        }
    }
}
