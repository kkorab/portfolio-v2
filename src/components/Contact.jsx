import React from 'react'
import styled from 'styled-components';
import {Container} from './Hero';
import {SectionTitle} from '../components/AboutMe';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <ContactSection id="contact">
            <Container>
                <ContactFlex>
                    <ContactDesc>

                        <SectionTitle>Contact</SectionTitle>
                        <ChooseContactText>Choose any type of contact & feel free to contact me!</ChooseContactText>
                        <SocialsIcons>
                            <SocialIcon>
                                <SocialIconLink href="https://www.facebook.com/konrad.korabiowski" target="_blank"> 
                                    <i className="fab fa-facebook-square"></i>
                                </SocialIconLink>
                            </SocialIcon>
                            <SocialIcon>
                                <SocialIconLink href="https://www.linkedin.com/in/konrad-korabiowski/" target="_blank"> 
                                    <i className="fab fa-linkedin"></i>
                                </SocialIconLink>
                            </SocialIcon>
                            <SocialIcon>
                                <SocialIconLink href="https://github.com/kkorab" target="_blank"> 
                                    <i className="fab fa-github-square"></i>
                                </SocialIconLink>
                            </SocialIcon>
                            {/* <SocialIcon><i class="fas fa-envelope"></i></SocialIcon> */}
                        </SocialsIcons>
                        <Mail>
                            <strong>My address e-mail:</strong><br/>
                            kkorabiowski@gmail.com
                        </Mail>
                    </ContactDesc>
                    <ContactForm>

                    </ContactForm>
                    </ContactFlex>
            </Container>
        </ContactSection>
    )
}


const ContactSection = styled.section`
    background: var(--third-color);
    margin: 0;
    padding: 2rem 0;
`

const ChooseContactText = styled.h4`
    margin: 1rem 0;
    text-align: center;
    font-weight: 400;
`

const SocialsIcons = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
`

const SocialIcon = styled.div`
    font-size: 3rem;
`

const SocialIconLink = styled.a`
    color: white;
    &:hover {
        opacity: 0.9;
    }
`
const Mail = styled.div`
    font-weight: 400;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-decoration: none;
`
const ContactFlex = styled.div`
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`
const ContactDesc = styled.div`
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 800px) {
        width: 100%
    }

`