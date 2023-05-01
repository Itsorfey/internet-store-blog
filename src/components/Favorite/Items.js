import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { addToCart } from '../../redux/slicers/cartSlice';
import { favoriteCart } from '../../redux/slicers/homeSlice';

const Items = ({ item }) => {
    const dispatch = useDispatch()
    const addToCartUI = (el) => {
        dispatch(addToCart(el))
    }

    const favoriteCartUI = (el) => {
        dispatch(favoriteCart(el))
    }

    const { favorite } = useSelector(state => state.home)
    const index = favorite.reduce((acc,rec) => {
        if(rec.id === item.id){
            return rec
        }
        return acc
    },null)

    return (
        <div className="col-3">
            <div className="box">
                <img src={item.img} className='item__image' style={{ borderRadius: '20%' }} alt="" />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>{item.name}</h3>
                    <h3>{item.price} сом</h3>
                </div>
                <span
                    onClick={() => favoriteCartUI(item)}
                    style={{ cursor: 'pointer' }}
                >
                    {index.select ? <StarIcon /> : <StarBorderIcon />}
                </span>
                <div className='addToCart'>
                    <button onClick={() => addToCartUI(item)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Items;