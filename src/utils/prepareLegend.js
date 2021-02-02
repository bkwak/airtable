/**
 * ************************************
 *
 * @module  prepareLegend
 * @description generates an array to be used for the date labels of the 
 *              timeline 
 *
 * ************************************
 */

import React from 'react';

export default function prepareLegend(min, totalCols) {
    const SEC_IN_DAY = 86400;
    const arr = [];

    for(let i = 1; i < totalCols + 2; i += 1){
        const style = {
            "gridColumn": `${i}/${i+1}`,
            "borderLeft": '1px solid black',
            "borderBottom": '1px solid black',
            
        }
        const date = new Date((min + SEC_IN_DAY * i) * 1000);

        const displayDate = `${date.getMonth() + 1}/${date.getDate()}`;
        arr.push(
            <div 
                className={`${displayDate} date`} 
                style={style} 
                key={displayDate}>
            {displayDate}
            </div>
        )
    };
    return arr;
}