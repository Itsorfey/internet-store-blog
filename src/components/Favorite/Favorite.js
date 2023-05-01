import React from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';

const Favorite = () => {

    const { favorite } = useSelector(state => state.home)
    const favData = favorite.filter(el => el.select === true)
    const items = favData.map((el, index) => {
        return <Items
            item={el}
            key={index}
        />
    })

    return (
        <div id='favorite'>
            <div className="container">
                <h1 style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '20px' }}>Favorites</h1>
                <div className="row">
                    {favData.length > 0 ? items : <h2>Избранных нет</h2>}
                </div>
            </div>
        </div>
    );
};

export default Favorite;