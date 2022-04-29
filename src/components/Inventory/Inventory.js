import React, { useState, useEffect } from 'react';
import useItems from '../hooks/useItems';
import ShowItem from '../ShowItem/ShowItem';
const Inventory = () => {
    const [items, setItems] = useItems();
    return (
        <div className='container'>
            <div className='row'>
                {
                    items.map(item => <ShowItem key={item.id} item={item}></ShowItem>)
                }
            </div>
        </div>
    );
};
export default Inventory;

