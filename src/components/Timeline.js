import React, {useState} from 'react';
import Item from './Item'
import '../index.css';

const Timeline = ({timelineItems}) => {
    const [min, max] = searchTimes(timelineItems);
    const itemList = timelineItems.map(item => 
        (<Item 
            key={`item${item.id}`}
            start={item.start} 
            end={item.end} 
            name={item.name}
            id={item.id} 
        />));
    console.log(new Date(min), new Date(max), min, max);

    return (
    <div>
        {itemList}
        <br/>
        <hr/>
    </div>
    );
};

const toSeconds = (dateString) => {
    return Date.parse(new Date(dateString))/1000;
};

const searchTimes = (array) => {
    let min = toSeconds(array[0].start);
    let max = toSeconds(array[0].end)
    array.forEach(item => {
        min = Math.min(min, toSeconds(item.start));
        max = Math.max(max, toSeconds(item.end));
    });

    return [min, max];
}


export default Timeline;