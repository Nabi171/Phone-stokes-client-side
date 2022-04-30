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
                    <h6 className='fw-bold'> Condition for Stokes</h6>
                    <hr className='text-white' />
                    <p>Only the admin panel can purcase this site but other users can use this site for stokes change mobile phones where they can soked mobiles by getting permission from the admin panel.There you can add phones and delete phones authorized by admin,So getting connected to our work follow the more ethics and make contact the admin pannel.</p>
                </div>
            </div>
        </div>
    );
};

export default Instructions;