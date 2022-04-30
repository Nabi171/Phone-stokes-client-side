import React from 'react';
import img from '../Instructions/instructions.png'
const Instructions = () => {
    return (
        <div className='container'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <img src={img} className='w-100 p-4' alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 text-white shadow'>
                    <h6>Condition for Stokes</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum magni repellendus consectetur sequi perferendis placeat possimus enim in animi fuga ullam, nemo voluptas ex adipisci incidunt corporis minima officiis?</p>
                </div>
            </div>
        </div>
    );
};

export default Instructions;