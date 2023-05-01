import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Sort from '../Sort/Sort';
import Item from './Item';

const Home = () => {
    const { mainData } = useSelector(state => state.home)
    const items = mainData.map((el, index) => {
        return <Item
            item={el}
            key={index}
        />
    })

    return (
        <>
            <div id='home'>
                <div className="container">
                    <h1 style={{ paddingTop: '100px', paddingBottom: '20px' }}> </h1>
                    <Sort />
                    <div className="row">
                        {items}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;