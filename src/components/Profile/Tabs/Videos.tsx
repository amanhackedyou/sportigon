import React from 'react'
import EmptyTab from './Empty'

const VideosTab = ({ username, isMyProfile }: { username: string; isMyProfile: boolean }) => {
    return (
        <div className='w-full h-full'>
            <EmptyTab
                text={isMyProfile ? "No videos posted yet." : "No videos uploaded."}
                subText={isMyProfile ? "Upload videos to share your passion with the world." : `@${username} hasn't shared any videos yet.`}
            />
        </div>
    )
}

export default VideosTab