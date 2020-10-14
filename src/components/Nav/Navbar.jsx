import React, {useContext} from 'react'
import styled from 'styled-components'
import { MobileMenu } from '../Mobile/MobileMenu'
import {PortfolioContext} from '../../Context';
import BigScreenNav from './BigScreenNav';


export default function Navbar() {
    const {isMobile} = useContext(PortfolioContext);
    return (
        <Nav>
            {isMobile ? <MobileMenu/> : <BigScreenNav/>}
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 250px;
`