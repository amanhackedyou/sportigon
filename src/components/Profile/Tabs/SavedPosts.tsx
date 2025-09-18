import React from 'react'
import EmptyTab from './Empty'

const SavedPostsTab = ({ username, isMyProfile }: { username: string; isMyProfile: boolean }) => {
    return (
        <div className='w-full h-full'>
            <EmptyTab
                text={isMyProfile ? "You haven't saved any posts yet." : "No posts to show."}
                subText={isMyProfile ? "Tap the bookmark icon on any post to save it here." : `@${username} hasn't shared any posts yet.
`}
            />
        </div>
    )
}

export default SavedPostsTab