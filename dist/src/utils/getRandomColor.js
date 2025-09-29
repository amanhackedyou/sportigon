export const getAvatarColor = (name) => {
    const colors = [
        '#F44336', '#E91E63', '#9C27B0', '#673AB7',
        '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
        '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
        '#FFC107', '#FF9800', '#FF5722', '#795548',
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return colors[sum % colors.length];
};
//# sourceMappingURL=getRandomColor.js.map