import React from 'react';
import '../TopBanner/TopBanner.css'
import img from '../TopBanner/mymbl.png';
import { useNavigate } from 'react-router';
const TopBanner = () => {
    const navigate = useNavigate();
    return (
        <div className=' banner-container'>
            <div className='row align-items-center justify-content-rounded '>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <img src={img} className='w-50 ' alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6 p-4'>
                    <h1 className='fw-bold'>Aesthetic E-Phones WireHouse</h1>
                    <p>Here you collected phones for your response,so you can choose the phone which you needed</p>
                    <button onClick={() => navigate('/allphones')} className='btn btn-outline-danger'>All Phones</button>
                </div>
            </div>
        </div>
    );
};
export default TopBanner;