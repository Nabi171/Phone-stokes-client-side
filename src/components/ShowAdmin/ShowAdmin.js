import React from 'react';
import { Card } from 'react-bootstrap';
import './ShowAdmin.css'
const ShowAdmin = (props) => {
    const { Name, status, imageLink } = props.member;
    return (
        <div className="col-lg-4 col-12 col-sm-12 col-md-6 g-4">
            <Card className='shadow'>
                <img src={imageLink} className='img-fluid img-cont mx-auto m-4' alt="" />
            </Card>
        </div>
    );
};

export default ShowAdmin;