import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {

    const {user, changeAvatar, changeAvatarName} = useContext(TwitterContext)
    return (
       <img
           onClick={() => {
               const url = prompt("Enter Avatar URL:");
               changeAvatar(url)
           }}

           onContextMenu={() => {
               const name = prompt("Enter Avatar Name:");
               changeAvatarName(name);
           }}

           className={`user-avatar ${size || ''}`}
           src={user.avatar}
           alt={user.name} />
    );
};

export default Avatar;