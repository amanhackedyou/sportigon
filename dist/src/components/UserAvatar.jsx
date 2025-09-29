// components/UserAvatar.tsx
import React from 'react';
import { getAvatarColor } from '@/utils/getRandomColor';
const UserAvatar = ({ username, profilePicture, size = 40, sizeInherit = false }) => {
    const avatarStyle = {
        width: sizeInherit ? "100%" : `${size}px`,
        height: sizeInherit ? "100%" : `${size}px`,
        borderRadius: "50%",
        backgroundColor: getAvatarColor(username),
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        userSelect: "none",
        fontSize: "50%", // ✅ scales with container
        aspectRatio: "1 / 1", // keeps it perfectly round
    };
    if (profilePicture && profilePicture.trim() !== "") {
        return (<img src={profilePicture} alt={username} style={{
                width: sizeInherit ? "100%" : `${size}px`,
                height: sizeInherit ? "100%" : `${size}px`,
                borderRadius: "50%",
                objectFit: "cover",
                aspectRatio: "1 / 1"
            }}/>);
    }
    return (<div style={avatarStyle}>
            <span style={{
            fontSize: "2em", // ✅ relative to container size
            lineHeight: 1,
        }}>
                {username.charAt(0)}
            </span>
        </div>);
};
export default UserAvatar;
//# sourceMappingURL=UserAvatar.jsx.map