// import { useFootballMatch } from '@/context/Sports/Football/MatchContext';
import { HttpManager } from '@/libs/http_manager';
import { IFootballLineup } from '@/types/football/linesup';
import React, { useEffect, useState } from 'react'
import LinesUpUI from './LinesUpUI';

const LineUpTab = ({ isActive, matchId }: { isActive: boolean, matchId: number | string }) => {
    // const matchContext = useFootballMatch();
    const [isLoading, setisLoading] = useState<boolean>(true);
    const [linesup, setlinesup] = useState<IFootballLineup>();
    const [error, setError] = useState<string | null>(null);

    const getLinesup = async () => {
        await new Promise(r => setTimeout(r, 3000));
        setisLoading(true);
        const res = await HttpManager.get(`/api/sports/football/${matchId}/linesup`);
        if (!res.statusCode) {
            setlinesup(res);
        } else {
            setError(res.message || "Error fetching linesup");
        }
        setisLoading(false);
    }

    useEffect(() => {
        getLinesup();
    }, []);

    if (!isActive) return <></>;


    return (
        <LinesUpUI linesup={linesup} error={error} isLoading={isLoading} />
    )
}

export default LineUpTab