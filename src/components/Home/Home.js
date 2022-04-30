import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Inventory from '../Inventory/Inventory';
import Footer from '../Footer/Footer';
import AdminPanel from '../AdminPanel/AdminPanel';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <br />
            <h1 className='text-center'>Collection</h1>
            <hr className='mx-auto w-25' />
            <Inventory></Inventory>
            <br />
            <h1 className='text-center'>Collection</h1>
            <hr className='mx-auto w-25' />
            <AdminPanel></AdminPanel>
            <br />
            <Footer></Footer>
        </div>
    );
};


export default Home;