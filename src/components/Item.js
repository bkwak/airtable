/**
 * ************************************
 *
 * @module  Item
 * @description Individual timeline item events
 *
 * ************************************
 */

import React, {useState, useRef} from 'react';
import '../index.css'

export default function Item({item, assign, edit}) {

    const [label, updateLabel] = useState(item.name);

    const colorRef = useRef(`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`);
    
    const style = {
        "gridArea": item.position,
        "backgroundColor": colorRef.current,
    }

    const update = (e) => {
        const newItem = {...item, name: e.target.value}
        edit(item.id, newItem);
        assign(newItem);
    }

    return (
        <div className={`item item${item.id}`} 
            style={style}  
            onClick={() => assign(item)} >
            <input style={{"backgroundColor": style.backgroundColor}} 
                className='label' 
                type='text' 
                value={label}
                onChange={e => updateLabel(e.target.value)}
                onBlur={update}>
            </input>
        </div>
    )
}