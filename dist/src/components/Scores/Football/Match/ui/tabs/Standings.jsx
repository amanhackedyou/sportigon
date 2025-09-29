import React, { useEffect } from 'react';
const StandingsTab = ({ isActive }) => {
    useEffect(() => {
        console.log('StandingsTab mounted');
    }, []);
    if (!isActive)
        return <></>;
    return (<div>StandingsTab</div>);
};
export default StandingsTab;
//# sourceMappingURL=Standings.jsx.map