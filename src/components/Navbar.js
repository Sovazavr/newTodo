import React from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = (props) => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
            <div className='navbar-brand'>
                Мои заметки
            </div>

            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/' exact>Главная страница</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>Вторая страница</NavLink>
                </li>
            </ul>

        </nav>
    );
}