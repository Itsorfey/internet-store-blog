import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Cart.css'
import CartItem from './CartItem/CartItem';
import { useSelector } from 'react-redux';

const Cart = ({ toggle, handleToggle }) => {
    const { cartData } = useSelector(state => state.cart)

    const cartItems = cartData.map((el, index) => {
        return <CartItem
            item={el}
            key={index}
        />
    })

    return (
        <div
            className={toggle ? 'cart__modal show' : 'cart__modal'}

        >
            <p
                className='exit'
                onClick={handleToggle}

            ><CloseIcon /></p>
            <div className="cart__content">
                {cartData.length > 0 ? cartItems : <h3>Корзина пуста</h3>}
            </div>
        </div>
    );
};

export default Cart;