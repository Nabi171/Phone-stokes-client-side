import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
const ManagePhones = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/phones')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:4000/phones/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                items.map(item => <div key={item._id}>
                    <Card className='shadow'>
                        <img src={item.ImgLink} alt="" />
                        <p>{item.Name || item.name}</p>



                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></Card>

                </div>)
            }
        </div>
    );
};

export default ManagePhones;