import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BadgeCart from '../BadgeCart/BadgeCart';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import Cart from '../Cart/Cart';
import Categories from '../Categories/Categories'
import './Header.css'
import { handleInputValue, inputData } from '../../redux/slicers/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@mui/material/Input';

const Header = () => {

    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const { inputValue } = useSelector(state => state.home)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isHeaderVisible = currentScrollPos < 200;
        setIsHeaderVisible(isHeaderVisible);
    };
    window.addEventListener('scroll', handleScroll);

    const navigate = useNavigate()
    const toHome = () => {
        navigate('/')
    }
    const toFav = () => {
        navigate('/fav')
    }

    const handleInputValueUI = (e) => {
        dispatch(handleInputValue(e.target.value))
        dispatch(inputData(inputData()))
    }

    return (
        <>
            <header className={`Header ${isHeaderVisible ? 'Header--visible' : 'Header--hidden'}`}>
                <div className="container">
                    <div className="header__nav">
                        <div className='logo'>
                            <div className='imgLogo'></div>
                            <h2 onClick={toHome}>CoffeeShop</h2>
                        </div>
                        <div className="header__cart">
                            <div>
                                <Categories />
                            </div>
                            <div>
                                <Input color="warning" value={inputValue} onChange={handleInputValueUI} placeholder='search' className='inputSearch' type="text" />
                            </div>
                            <div onClick={toFav}>
                                <FolderSpecialIcon />
                            </div>
                            <BadgeCart
                                handleToggle={handleToggle}
                            />
                        </div>
                    </div>
                </div>
            </header>
            <Cart
                handleToggle={handleToggle}
                toggle={toggle}
            />
        </>
    );
};

export default Header;
