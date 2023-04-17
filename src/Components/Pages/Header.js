import React, { useState } from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
const Header = () => {
    const [Mobile, setMobile] = useState(false);

    return (
        <div className='parent-container'>
            <div className='Header-Container'>
                <div className='heading heading1'>
                    <span className='the the1'>The</span>
                    <span className='siren siren1'>Siren</span>
                </div>
                <div className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross className='Size'/> : <FaBars className='Size'/>}
                </div>
            </div>
            <div className={Mobile ? 'links-mobile' : 'links'}>
                <div className='child'>
                    <Link to='/' className='link'>Home</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Bollywood' className='link'>Bollowood</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Technology' className='link'>Technology</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Hollywood' className='link'>Hollywood</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Fitness' className='link'>Fitness</Link>
                </div>
                <hr className='hrline hrline-link' />
                <div className='child'>
                    <Link to='/Food' className='link'>Food</Link>
                </div>
            </div>

            <hr className='hrline hrline-afterlink' />

        </div>

    )
}

export default Header
