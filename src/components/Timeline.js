/**
 * ************************************
 *
 * @module  Timeline
 * @description contains the main css-grid for our timeline and 
 *              transforms each timeline item object to be passed down to children
 *
 * ************************************
 */


import React, {useState, useMemo} from 'react';
import Item from './Item';
import prepareGrid from '../utils/prepareGrid.js';
import prepareLegend from '../utils/prepareLegend.js';
import '../index.css';


const Timeline = ({timelineItems, assign}) => {
    
    const times = prepareGrid(timelineItems);

    const max = findMax(times);
    const min = times[0].startSec;
    const totalCols = (max - min)/86400; 

    
    const [list, setList] = useState(times);
    
    //state setter function to be passed to each timeline item
    const updateItem = (id, newItem) => setList(list.map(
        item => item.id === id ? newItem : item));
    
    //prepare grid content
    const datesList = prepareLegend(min, totalCols);
    
    const itemList = list.map( item => 
        (<Item 
            key={`item${item.id}`}
            item={item}
            assign={assign}
            edit={updateItem}
        />));
    
    //css-grid styling for the parent component
    const style = { "gridTemplateColumns": `repeat(${totalCols + 1}, 1fr)`};
                
    return (
        <div id="container">
            <div className='wrapper' style={style}>
                {datesList}
                {itemList}
            </div>
        </div>
    );
};


//finds the latest end date of all timeline items
const findMax = (array) => {
    let max = 0;
    array.forEach(el => {
        if(el.endSec > max) max = el.endSec;
    });
    return max;
}

export default Timeline;