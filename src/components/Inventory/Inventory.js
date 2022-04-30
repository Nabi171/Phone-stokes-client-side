import React, { useState, useEffect } from 'react';
import useItems from '../hooks/useItems';
import ShowItem from '../ShowItem/ShowItem';
const Inventory = () => {
    const [items, setItems] = useItems();
    //     const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4000/phones')
    //         .then(res => res.json())
    //         .then(data => setItems(data));
    // }, []);
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

