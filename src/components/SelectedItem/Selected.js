import React from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';

const items = [

    {
        "Name": "I Phone",
        "Supply": "Jk Rowling",
        "id": 1,
        "price": 1500,
        "quantity": 10,
        "imageLink": "images/img1.png",
        "description": "here stoked geneiune IPhone items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Samsung",
        "Supply": "Robert Hesson",
        "id": 2,
        "price": 800,
        "quantity": 11,
        "imageLink": "images/img2.png",
        "description": "here stoked geneiune SamSung items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Real Me",
        "Supply": "Roberson Kendy",
        "id": 3,
        "price": 500,
        "quantity": 15,
        "imageLink": "images/img3.png",
        "description": "here stoked geneiune Real ME items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Vivo",
        "Supply": "Henderson",
        "id": 4,
        "price": 700,
        "quantity": 11,
        "imageLink": "images/img4.png",
        "description": "here stoked geneiune vivo items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "Infinix",
        "Supply": "Leripage",
        "id": 5,
        "price": 900,
        "quantity": 8,
        "imageLink": "images/img5.png",
        "description": "here stoked geneiune Infinix items for customers,here they get best relaible items for their customers."
    },
    {
        "Name": "One Plus",
        "Supply": "Maek Louius",
        "id": 6,
        "price": 950,
        "quantity": 15,
        "imageLink": "images/img6.png",
        "description": "here stoked geneiune One Plus items for customers,here they get best relaible items for their customers."
    }
];


const Selected = () => {



    const { id } = useParams();

    const singleItem = items.find(item => item.id == id);




    return (
        <div className='container'>

            <Card className='w-50 mx-auto my-5 '>
                <br />
                <Card.Img variant="top" src={singleItem.imageLink} className='img-fluid' />
                <Card.Body>
                    <Card.Title className='fw-bold'>{singleItem.Name}</Card.Title>
                    <Card.Text style={{ color: '#fefbe9 ' }}>
                        Price: ${singleItem.price}
                    </Card.Text>

                    <hr />
                    <p>{singleItem.description}</p>
                </Card.Body>

            </Card>

        </div>
    );
};

export default Selected;