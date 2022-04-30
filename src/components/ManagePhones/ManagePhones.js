import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../ManagePhones/ManagePhones.css'
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
        <div className='w-50 mx-auto '>
            <br />
            {
                items.map(item => <div className="mt-3" key={item._id}>
                    <Card className='shadow' mt-4>
                        <img src={item.imageLink} className='w-25 p-4 mx-auto' alt="" />
                        <h5 className='fw-bold'>{item.Name || item.name}</h5>
                        <hr />
                        <div className="d-flex align-items-center justify-content-around">
                            <div>
                                <h6 className='fw-bold'>Supplier Name:</h6>
                                <h6 className='fw-bold'>Quantity:</h6>
                            </div>
                            <div>
                                <h6 className='fw-bold'>{item.Supply}</h6>
                                <h6 className='fw-bold'>{item.quantity}</h6>
                            </div>
                        </div>



                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></Card>

                </div>)
            }
        </div>
    );
};

export default ManagePhones;