import React from 'react';
import '../TopBanner/TopBanner.css'
import img from '../TopBanner/mymbl.png';
const TopBanner = () => {
    return (
        <div className=' banner-container'>
            <div className='row align-items-center  '>
                <div className='col-lg-6 '>
                    <img src={img} className='w-50 clip-me' alt="" />
                </div>
                <div className='col-lg-6 p-5'>
                    <h1>Wellcome to Nur E-Phones WireHouse</h1>
                    <p>Here you collected phones for your response,so you can choose the phone which you needed</p>
                    <button className='btn btn-danger'>More</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;