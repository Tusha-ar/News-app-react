import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom'


const Nav = ()=>{
    return(
        <nav>
            <div className='logo'>

            </div>
            <ul>
                <NavLink to='/' exact className='Link' activeClassName='active'>
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink to='readNews' className='Link' activeClassName='active'>
                    <li>
                        Read News
                    </li>
                </NavLink>
                <li>
                    Contact
                </li>
            </ul>
            <Footer/>
        </nav>
    )
}


export default Nav;