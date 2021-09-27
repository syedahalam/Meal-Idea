import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
     const [isMobile, setIsMobile] = useState(false);
     const [categoryResults, setCategoryResults] = useState('');
    return (
			<nav className='navbar'>
				<Link to='/'>
					<h3 className='logo'
                    onClick={()=>{
                        setCategoryResults('')
                    }}
                    >Meal Idea</h3>
				</Link>
				<ul
					className={isMobile ? 'nav-links-mobile' : 'nav-links'}
					onClick={() => setIsMobile(false)}>
					<Link to='/' className='home'>
						<li>Home</li>
					</Link>
					<Link to='/Categories' className='categories'>
						<li>Categories</li>
					</Link>
					<Link to='/About' className='about'>
						<li>About</li>
					</Link>
				</ul>
				<button
					className='mobile-menu-icon'
					onClick={() => setIsMobile(!isMobile)}>
					{isMobile ? (
						<i className='fas fa-times'></i>
					) : (
						<i className='fas fa-bars'></i>
					)}
				</button>
			</nav>
		);
};

export default Navbar;