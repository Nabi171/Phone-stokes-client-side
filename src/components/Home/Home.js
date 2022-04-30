import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Inventory from '../Inventory/Inventory';
import Footer from '../Footer/Footer';
import AdminPanel from '../AdminPanel/AdminPanel';
import Instructions from '../Instructions/Instructions';
import '../Home/Home.css'
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <br />
            <h1 className='text-center fw-bold  heading-home'>Collection</h1>
            <hr className='mx-auto w-25 text-white' />
            <Inventory></Inventory>
            <br />
            <h1 className='text-center fw-bold heading-home'>Instructions</h1>
            <hr className='mx-auto w-25 text-white' />
            <Instructions></Instructions>
            <br />
            <h1 className='text-center fw-bold heading-home'>Admin Panel</h1>
            <hr className='mx-auto w-25 text-white' />
            <AdminPanel></AdminPanel>
            <br />
            <Footer></Footer>
        </div>
    );
};


export default Home;