/**
 * ************************************
 *
 * @module  prepareGrid
 * @description takes an array containing randomly ordered timeline item objects
 *              and returns them sorted in chronological order and appends the correct
 *              css-grid values 
 *
 * ************************************
 */

export default function prepareTimeline(timelineItemsArray) {
    const times = timelineItemsArray
        .filter(el => (typeof el.start === 'string' && typeof el.end === 'string'))
        .map(convertTimesToSec)
        .sort((item1, item2) => item1.startSec - item2.startSec)

    const min = times[0].startSec;

    times.forEach(addPositioning(min));
    return times;
}

//adds the correct values for row and col positioning for css-grid styling based on start/end dates
const addPositioning = (min) => {
    const SEC_IN_DAY = 86400;

    //we'll keep track of what events are where using an object
    const cache = {
        2: -Infinity
    }

    return function (item) {
        //find the first row that isn't already occupied by another event
        let row;
        let i = 2;

        while(cache[i]) {
            if(item.startSec > cache[i]) {
                cache[i] = item.endSec;
                row = i;
                break;
            }
            i += 1;
        }
        row = i;
        cache[i] = item.endSec;

        //find the columns the event will span
        const colStart = (item.startSec - min)/SEC_IN_DAY + 1;
        const colEnd = (item.endSec - min)/SEC_IN_DAY + 1;
        
        //add css grid-area values as a string
        item.position = `${row} / ${colStart} / ${row} / ${colEnd + 1}`;
    }
} 

//appends the start and end times in seconds as properties to each item object
const convertTimesToSec = item => ({...item, startSec: toSec(item.start), endSec: toSec(item.end)});

//takes the formatted string and returns the date in epoch time in sec
const toSec = (dateString) => {
    return Date.parse(new Date(dateString))/1000;
};

