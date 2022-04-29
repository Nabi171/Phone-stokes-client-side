import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import '../ShowItem/ShowItem.css'
import { useNavigate } from 'react-router';
const ShowItem = (props) => {
    const { Name, imageLink, description, id, price } = props.item;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-12 col-sm-12 col-md-6 g-4'>
            <Col>
                <Card className='cards-container card-container'>
                    <Card.Img variant="top" className='img-container   mx-auto m-2 ' src={imageLink} />
                    <Card.Body>
                        <Card.Title >{Name}</Card.Title>
                        <hr />
                        <Card.Text>
                            <span className='fw-bold'>Service:</span>{description}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Price:</span>${price}
                        </Card.Text>
                    </Card.Body>
                    <button className=' btn btn-outline-danger fw-bold'
                        onClick={() => navigate('/selected/' + id)}
                    >Update</button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowItem;