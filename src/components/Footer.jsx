import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterDiv>
            <FooterHeadline>&copy; 2020 Konrad Korabiowski - Portfolio.</FooterHeadline>
            <FooterSubheadline>
                All rights reserved
            </FooterSubheadline>

        </FooterDiv>
    )
}


const FooterDiv = styled.footer`
    padding: 1rem 0;
    background: var(--third-color);
    border-top: 1px solid rgba(255,255,255,0.4);
`

const FooterHeadline = styled.h6`
    text-align: center;
    text-transform: uppercase;
    `
    
    const FooterSubheadline = styled.h6`
    text-align: center;
    text-transform: uppercase;
`