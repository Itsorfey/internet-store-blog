import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CartItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeAllCart, removeCart } from '../../../redux/slicers/cartSlice';
import { favoriteCart } from '../../../redux/slicers/homeSlice';

const CartItem = ({ item }) => {

    const dispatch = useDispatch()
    const { favorite } = useSelector(state => state.home)
    const index = favorite.reduce((acc,rec) => {
        if(rec.id === item.id){
            return rec
        }
        return acc
    },null)

    const addToCartUI = (el) => {
        dispatch(addToCart(el))
    }
    const removeCartUI = (el) => {
        dispatch(removeCart(el))
    }
    const removeAllCartUI = (el) => {
        dispatch(removeAllCart(el))
    }
    const favoriteCartUI = (el) => {
        dispatch(favoriteCart(el))
    }

    return (
        <div className="cart__box">
            <div className="cart__col">
                <img src={item.img} alt="" />
            </div>
            <div className="cart__col">
                <p>Price:{item.price}</p>
                <p>Name:{item.name}</p>
                <p>Total:{item.price * item.quantity}</p>
            </div>
            <div className='cart__count'>
                <button
                    onClick={() => removeCartUI(item)}
                >-
                </button>
                <span className='cart__quantity'>{item.quantity}</span>
                <button
                    onClick={() => addToCartUI(item)}
                >+
                </button>
                <div className="cart__col">
                    <div className="cart__delete">
                        <div onClick={() => removeAllCartUI(item)}>
                            <DeleteIcon />
                        </div>

                    </div>

                </div>
                <div className='cart__delete'>
                    <div onClick={() => favoriteCartUI(item)}>
                        {index.select ? <StarIcon /> : <StarBorderIcon />}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartItem;