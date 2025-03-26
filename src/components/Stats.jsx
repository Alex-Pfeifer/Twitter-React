import React from 'react';
import Avatar from "./Avatar.jsx";

const Stats = () => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                User name
            </div>
            <div className={'stats'}>
                <div>Followers: 10</div>
                <div>Followers: 100</div>
            </div>
        </div>
    );
};

export default Stats;