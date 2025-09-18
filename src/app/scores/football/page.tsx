import { getMatches } from '@/app/api/sports/football/matches/[date]/route';
import FootballScoresPage from '@/components/Scores/Football/FootballScoresPage'
import { getDateInTimezone } from '@/utils/utils';
import { cookies } from 'next/headers';
import React from 'react'


const matchsData = async (date: string, page = 1, limit = 20): Promise<{ [key: string]: any; }> => {
    const matches = (await getMatches(date, page, limit))?.matches || {};

    console.log(matches);

    return matches;
}


const page = async () => {
    // const cookieStore = await cookies();
    // const userTimezone = cookieStore.get("userTimezone");

    // if (!userTimezone) {
    //     return (
    //         <FootballScoresPage isTimezoneError={true} />
    //     )
    // }

    // // const currentDateInUserTimezone = getDateInTimezone(userTimezone.value);
    // // const currentDateInUserTimezone = "2025-98-01" || getDateInTimezone(userTimezone.value);
    // const currentDateInUserTimezone = "2025-09-01";

    // console.log(currentDateInUserTimezone);


    // const preMatches: { [key: string]: any } = await matchsData(currentDateInUserTimezone);


    return (
        <FootballScoresPage />
    )
}

export default page