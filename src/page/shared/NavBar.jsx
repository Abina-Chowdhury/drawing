import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-Art-&-craft-Items'>All Art & craft Items</NavLink></li>
        <li><NavLink to='/update'>Add Craft Item</NavLink></li>
        <li><NavLink to='/update'>My Art&Craft List</NavLink></li>

    </>
    return (
        <div className='bg-slate-50'>
            <div className="navbar  w-[1400px] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='size-20' src="/logo.png" alt="logo" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <LoginModal />
                    <RegisterModal />
                </div>
            </div>


        </div>

    );
};

export default NavBar;