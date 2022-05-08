import React, { useState, useEffect } from 'react';
import useItems from '../hooks/useItems';
import ShowItem from '../ShowItem/ShowItem';
import Loading from '../Loading/Loading';
const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://infinite-woodland-15593.herokuapp.com/phones')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                {
                    items ? items.slice(0, 6).map(item => <ShowItem key={item.id} item={item}></ShowItem>) : <Loading></Loading>

                }
            </div>
        </div>
    );
};
export default Inventory;

