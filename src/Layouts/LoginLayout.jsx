import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import './Layouts.css'
const LoginLayout = () => {
    return (
        <div className='layout-fixed'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default LoginLayout;