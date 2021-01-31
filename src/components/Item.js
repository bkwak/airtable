import React from 'react';
import '../index.css'

export default function Item({index, id, name, start, end, position}) {

    const style = {
        "grid-area": position,
        "background-color": `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    }

    return (
        <div className={`item item${index}`} style={style}>{id}</div>
    )
}