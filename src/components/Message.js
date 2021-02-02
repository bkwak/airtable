/**
 * ************************************
 *
 * @module  Message
 * @description Displays the currently selected event's information
 *
 * ************************************
 */

import React from 'react';

const Message = ({item}) => {

   return (
        <div id="message"> 
            <h2>{item.name}</h2>
            <p>ID: <em>{item.id}</em><br/><br/>START: <em>{item.start.slice(5)}</em><br/> END: <em>{item.end.slice(5)}</em></p> 
        </div>
   );
};

export default Message;