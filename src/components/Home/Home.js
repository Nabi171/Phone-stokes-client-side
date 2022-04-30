import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Inventory from '../Inventory/Inventory';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <br />
            <Inventory></Inventory>
            <br />
        
        </div>
    );
};

export default Home;