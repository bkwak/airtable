import React, {useState} from 'react';
import Item from './Item'
import '../index.css';

const Timeline = ({timelineItems}) => {
    //find upper/lower bounds for timeline dates
    const [min, max] = searchTimes(timelineItems);
    const totalRows = (max - min)/86400;

    const times = timelineItems.map(el => {
        return {...el, start: toSec(el.start), end: toSec(el.end)};
    }).sort((a,b) => a.start-b.start);

    const cache = {
        1: -Infinity
    }

    let i = 1;
    times.forEach((el, idx) => {
        let row;
        while(cache[i]) {
            if(el.start > cache[i]) {
                cache[i] = el.end;
                row = i;
                break;
            }
            i += 1;
        }
        if(!cache[i]) {
            row = i;
            cache[i] = el.end;
        }
        i = 1;

        //add col inormation
        const colStart = (el.start - min)/86400 + 1;
        const colEnd = (el.end - min)/86400 + 1;
        el.position = `${row} / ${colStart} / ${row++} / ${colEnd}`;
    });

    const itemList = times.map((item,idx) => 
        (<Item 
            key={`item${item.id}`}
            start={item.start} 
            end={item.end} 
            name={item.name}
            id={item.id} 
            position={item.position}
            index={idx}
        />));

    return (
        <div id="container">
            <hr/>    
            <div className='wrapper'>
                {itemList}
            </div>
        </div>
    );
};

const toSec = (dateString) => {
    return Date.parse(new Date(dateString))/1000;
};

const searchTimes = (array) => {
    let min = toSec(array[0].start);
    let max = toSec(array[0].end)
    array.forEach(item => {
        min = Math.min(min, toSec(item.start));
        max = Math.max(max, toSec(item.end));
    });

    return [min, max];
}


export default Timeline;