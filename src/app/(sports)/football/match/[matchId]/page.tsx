import MatchPage from '@/components/Scores/Football/Match/MatchPage'
import { notFound } from 'next/navigation';
import React from 'react'
import { getMatchById } from './actions';

const page = async ({ params }: { params: { matchId: string } }) => {
    const { matchId } = await params;
    const id = parseInt(matchId);
    if (isNaN(id)) {
        notFound()
    }

    const match = await getMatchById(id);

    if (!match) {
        notFound()
    }

    return (
        <MatchPage matchStr={JSON.stringify(match)} />
    )
}

export default page