import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components';
import {PortfolioContext} from '../../Context';

import LogoComponent from '../LogoComponent';

const menuData = [
    {
      id: 1,
      name: 'home',
      href: '#home',
      borderDM: '#00DFFC',
    },
    {
      id: 2,
      name: 'about me',
      href: '#about-me',
      borderDM: '#00B4CC',
    },
    {
      id: 3,
      name: 'projects',
      href: '#projects',
      borderDM: '#008C9E',
    },
    {
      id: 4,
      name: 'contact',
      href: '#contact',
      borderDM: '#007b88',
    },
  ]

export default function BigScreenNav() {
    const {fixedScrolling} = useContext(PortfolioContext)

    const [fixed, setFixed] = useState(false);
    const [isOpacity, setIsOpacity] = useState(false)
    const [backgroundOpacity, setBackgroundOpacity] = useState(false);

    function handleFixed() {
        if (window.scrollY > window.innerHeight) {
            setIsOpacity(true);
            setFixed(true);
            setBackgroundOpacity(true);
        }
        else if(window.scrollY === 0) {
            setIsOpacity(true);
            
        }
        else {
            setFixed(false);
            setIsOpacity(false);
            setBackgroundOpacity(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleFixed());
        return window.removeEventListener('scroll', () => handleFixed())
    })

    useEffect(() => {
        setFixed(false);
        setIsOpacity(true);
        setBackgroundOpacity(true);
    },[])



    const navStyle = {
        position: `${fixed ? 'fixed' : "absolute"}`,
        opacity: `${isOpacity ? '1' : '0'}`,
        background: `${backgroundOpacity ? 'rgba(13, 25, 43, 1)' : 'rgba(13, 25, 43, 0.3)'}`,

    }

    return (
        <Nav style={navStyle}>
            <NavLogo>
                <LogoComponent className="logo-component"/>
            </NavLogo>
            <MenuList>
                {menuData.map((item, i) => {
                    return <MenuItem key={i}><a className="menu-link-bs" 
                    href={item.href}
                    onClick={(e) => fixedScrolling(e)}
                    >{item.name}</a></MenuItem>
                })}
            </MenuList>
        </Nav>
    )
}



const Nav = styled.nav`
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid var(--third-color);
    z-index: 200;
    transition: .5s all;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuList = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    padding-right: 5%;
`

const MenuItem = styled.li`
    margin: 0 1rem;
`

const NavLogo = styled.div`
    font-size: 1.7rem;
    padding-left: 5%;
    font-family: var(--logo-font);
    line-height: 0.8;
    text-align: center;
    transform: rotate(-5deg);
    color: var(--fourth-color);
    cursor: pointer;
`