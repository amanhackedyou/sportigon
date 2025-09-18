import React, { useEffect } from 'react'

const ChatTab = ({ isActive }: { isActive: boolean }) => {
    useEffect(() => {
        console.log('Chat mounted');
    }, [])
    if (!isActive) return <></>;


    return (
        <div>ChatTab</div>
    )
}

export default ChatTab