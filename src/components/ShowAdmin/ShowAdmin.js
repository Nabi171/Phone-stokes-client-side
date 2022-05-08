import React from 'react';
import { Card } from 'react-bootstrap';
import './ShowAdmin.css'
const ShowAdmin = (props) => {
    const { Name, Status, imageLink } = props.member;
    return (
        <div className="col-lg-4 col-12 col-sm-12 col-md-6 g-4">
            <Card className='shadow selected-container'>
                <img src={imageLink} className=' img-cont mx-auto mt-3 mx-2 mb-1' alt="" />
                <h6 className='text-center'>{Status}</h6>
                <hr className='w-50 mx-auto p-1' />
                <h6 className='text-center fw-bold'>{Name}</h6>

            </Card>
        </div>
    );
};

export default ShowAdmin;