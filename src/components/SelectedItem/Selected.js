import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router';
import { Card } from 'react-bootstrap';
import '../SelectedItem/Selected.css'
const items = [
    {
        "Name": "I Phone",
        "Supply": "Jk Rowling",
        "id": 1,
        "price": 1500,
        "quantity": 10,
        "imageLink": "https://i.ibb.co/tcNc1nT/img1.jpg",
        "description": "here stoked geneiune IPhone items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Samsung",
        "Supply": "Robert Hesson",
        "id": 2,
        "price": 800,
        "quantity": 11,
        "imageLink": "https://i.ibb.co/jgymRr6/img2.jpg",
        "description": "here stoked geneiune SamSung items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Real Me",
        "Supply": "Roberson Kendy",
        "id": 3,
        "price": 500,
        "quantity": 15,
        "imageLink": "https://i.ibb.co/NN7msVj/img3.jpg",
        "description": "here stoked geneiune Real ME items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Vivo",
        "Supply": "Henderson",
        "id": 4,
        "price": 700,
        "quantity": 11,
        "imageLink": "https://i.ibb.co/qsLvXMB/img4.jpg",
        "description": "here stoked geneiune vivo items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Infinix",
        "Supply": "Leripage",
        "id": 5,
        "price": 900,
        "quantity": 8,
        "imageLink": "https://i.ibb.co/r4Ftrbd/img5.jpg",
        "description": "here stoked geneiune Infinix items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "One Plus",
        "Supply": "Maek Louius",
        "id": 6,
        "price": 950,
        "quantity": 15,
        "imageLink": "https://i.ibb.co/YdSP2WF/img6.jpg",
        "description": "here stoked geneiune One Plus items for customers,here they get best relaible items for their customers."
    }
];

const Selected = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const singleItem = items.find(item => item.id == id);
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