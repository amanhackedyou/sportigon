import React, { useEffect } from 'react'

const StandingsTab = ({ isActive }: { isActive: boolean }) => {
    useEffect(() => {
        console.log('StandingsTab mounted');
    }, [])

    if (!isActive) return <></>;

    return (
        <div>StandingsTab</div>
    )
}

export default StandingsTab