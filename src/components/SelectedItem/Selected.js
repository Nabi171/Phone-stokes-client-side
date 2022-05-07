import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router';
import { Card } from 'react-bootstrap';
import '../SelectedItem/Selected.css'
const Selected = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleItem, setItems] = useState([]);
    useEffect(() => {
        const url=`https://infinite-woodland-15593.herokuapp.com/phones/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className='container text-dark '>
            <Card className='w-50 mx-auto my-5 selected-container '>
                <br />
                <Card.Img variant="top" src={singleItem.imageLink} className='img-fluid ' />
                <Card.Body>
                    <Card.Title className='fw-bold text-dark'>{singleItem.Name}</Card.Title>
                    <Card.Text className='fw-bold text-dark' style={{ color: '#fefbe9 ' }}>
                        Supplier Name: {singleItem.Supply}
                    </Card.Text>
                    <Card.Text className='fw-bold text-dark'>
                        Quantity: ${singleItem.quantity}
                    </Card.Text>

                    <Card.Text >
                        Price: ${singleItem.price}
                    </Card.Text>
                    <hr />
                    <p>{singleItem.description}</p>
                    <button onClick={() => navigate('/additems')} className='form-btn '>Add and Update phones</button>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Selected;