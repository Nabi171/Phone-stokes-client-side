import React, { useState, useEffect } from 'react';
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
                    <h5>{item.Name || item.name}


                        <button onClick={() => handleDelete(item._id)}>X</button></h5>

                </div>)
            }
        </div>
    );
};

export default ManagePhones;