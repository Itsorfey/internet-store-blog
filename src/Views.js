import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite/Favorite';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';


const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='/fav' element={<Favorite />} />
            </Route>
        </Routes>
    );
};

export default Views;