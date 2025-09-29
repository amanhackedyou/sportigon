import React, { useEffect } from 'react';
const ChatTab = ({ isActive }) => {
    useEffect(() => {
        console.log('Chat mounted');
    }, []);
    if (!isActive)
        return <></>;
    return (<div>ChatTab</div>);
};
export default ChatTab;
//# sourceMappingURL=Chat.jsx.map