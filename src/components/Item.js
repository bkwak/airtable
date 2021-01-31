import React from 'react';
import '../index.css'

export default function Item({id, name, start, end}) {
    
    return (
        <div className='item'>{name}, {id}, {start}, {end}, </div>
    )
}