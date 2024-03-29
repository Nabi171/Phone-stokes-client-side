import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import '../ShowItem/ShowItem.css'
import { useNavigate } from 'react-router';
const ShowItem = (props) => {
    const { name, imageLink, _id, price, quantity, description, Supply } = props.item;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-12 col-sm-12 col-md-6 g-4 '>
            <Col>
                <Card className='cards-container card-container selected-container'>
                    <Card.Img variant="top" className='img-container   mx-auto  ' src={imageLink} />
                    <Card.Body>
                        <Card.Title >{name}</Card.Title>
                        <hr />

                        <Card.Text>
                            <span className='fw-bold'>Price:</span>${price}
                        </Card.Text>

                        <Card.Text>
                            <span className='fw-bold'>Featuere:</span>{description}
                        </Card.Text>
                        <hr />
                        <Card.Text>
                            <span className='fw-bold'>Stokes:</span>{quantity}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Supplier Name:</span>{Supply}
                        </Card.Text>
                    </Card.Body>
                    <button className=' btn btn-outline-danger fw-bold'
                        onClick={() => navigate('/selected/' + _id)}
                    >Update</button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowItem;