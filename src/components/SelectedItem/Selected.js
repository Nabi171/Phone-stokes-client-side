import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router';
import { Card } from 'react-bootstrap';
import '../SelectedItem/Selected.css'
const Selected = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleItem, setItems] = useState([]);
    useEffect(() => {
        const url = `https://infinite-woodland-15593.herokuapp.com/phones/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    //state for delevered btn
    let deliver = singleItem.quantity;
    let newCount = parseInt(deliver);
    const [count, setCount] = useState(10);

    const increamentCount = () => {
        const remainingItem = setCount(newCount - 1);
        return remainingItem;
    }

    const updateValue = () => {
        const remainingItemNumber = document.getElementById('countNo').innerText;
        console.log(remainingItemNumber)
        const inputNumberText = document.getElementById('updating').value;
        console.log(inputNumberText);
        const inputNumber = parseFloat(inputNumberText);
        const newUpdate = inputNumber + parseInt(remainingItemNumber);
        console.log(newUpdate);
        setCount(newUpdate);
    }


    return (
        <div className='container text-dark '>
            <Card className='w-50 mx-auto my-5 selected-container '>
                <br />
                <Card.Img variant="top" src={singleItem.imageLink} className='img-fluid ' />
                <Card.Body>
                    <Card.Title className='fw-bold text-dark'>{singleItem.name}</Card.Title>
                    <Card.Text className='fw-bold text-dark' style={{ color: '#fefbe9 ' }}>
                        Supplier Name: {singleItem.Supply}
                    </Card.Text>
                    <Card.Text className='fw-bold text-dark'>
                        Quantity: <span id="countNo" >{count}</span>
                    </Card.Text>

                    <Card.Text >
                        Price: ${singleItem.price}
                    </Card.Text>
                    <hr />
                    <p>{singleItem.description}</p>
                    <button onClick={() => navigate('/additems')} className='form-btn '>Add and Update phones</button>
                </Card.Body>
            </Card>
            <Card className='justify-content-center align-items-center text-center selected-container'>
                <div className='w-50 mx auto text-center'>
                    <h6 className='mt-2 fw-bold'>Delever The Selected Phone</h6>
                    <br />
                    <button className='btn btn-outline-danger mb-2' onClick={increamentCount}>Delevered</button>

                </div>

            </Card>
            <br />
            <Card className='justify-content-center align-items-center text-center selected-container'>
                <div className='w-50 mx auto text-center'>
                    <input id="updating" className="form-input mx-auto" type="number" placeholder="update the phones number" />
                    <br />
                    <button onClick={updateValue} className='btn btn-outline-danger mb-2'>Update Quantity</button>

                </div>

            </Card>
            <br />

        </div>
    );
};
export default Selected;