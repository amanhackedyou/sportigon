import React from 'react';
import EmptyTab from './Empty';
const CommentsTab = ({ username, isMyProfile }) => {
    return (<div className='w-full h-full'>
            <EmptyTab text={isMyProfile ? "No comments yet." : "No comments to display."} subText={isMyProfile ? "Be the first to share your thoughts." : `@${username} hasn't joined any conversations yet.`}/>
        </div>);
};
export default CommentsTab;
//# sourceMappingURL=Comments.jsx.map