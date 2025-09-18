import React, { useEffect } from 'react'

const LineUpTab = ({ isActive }: { isActive: boolean }) => {
    useEffect(() => {
        console.log('LineUp mounted');
    }, [])

    if (!isActive) return <></>;


    return (
        <div>LineUpTab</div>
    )
}

export default LineUpTab