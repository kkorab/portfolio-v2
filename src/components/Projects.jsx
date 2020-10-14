import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {Container} from './Hero';
import {SectionTitle} from './AboutMe.jsx';
import Project from './Project';

import waveSvg from '../images/svg/wave-2.svg';
import waveSvg3 from '../images/svg/wave-3.svg';
// BLOBS
import blobSvg1 from '../images/svg/blob-1.svg';
import blobSvg2 from '../images/svg/blob-2.svg';
import blobSvg3 from '../images/svg/blob-3.svg';


import wearzillaScreen from '../images/images/screenshots/wearzilla.png';
import mobilezillaScreen from '../images/images/screenshots/mobilezilla.png';
import chirurgiaScreen from '../images/images/screenshots/chirurgia.png';
import taskmaniaScreen from '../images/images/screenshots/taskmania.png';
import portfolioScreen from '../images/images/screenshots/portfolio.png';

const projectsData = [
    {
        title: "WearZilla",
        desc: "WearZilla is a project of e-commerce clothes store. It's fully made and designed by myself. It's made using React.js",
        technologies: ['React Hooks', 'React Router', 'Context API', 'Framer Motion', 'Local Storage'],
        note: "Checkout button is disabled on purpose",
        img: `${wearzillaScreen}`,
        changeOrder: false,
        url: 'https://wearzilla.netlify.app/',
        gitUrl: 'https://github.com/kkorab/wearzilla'
    },
    {
        title: "Portfolio",
        desc: "It's my second version of portfolio. This one is made using React.js. Old version you can check @ my github account.",
        technologies: ['React Hooks', 'Context API', 'Styled Components', 'Framer Motion', 'Formik', 'Animate On Scroll'],
        note: "",
        img: `${portfolioScreen}`,
        changeOrder: true,
        url: 'https://portfolio-kkorab.netlify.app/',
        gitUrl: 'https://github.com/kkorab/portfolio'
    },
    {
        title: "MobileZilla",
        desc: "MobileZilla is a project of e-commverce store with smartphones. This project is 100% designed by me. It's made with Vanilla.JS, CSS, HTML",
        technologies: ["RWD", "AJAX", "Contentful", "Local Storage", "ScrollReveal.js", "SmoothScroll.js"],
        note: `Button "Continue Shopping" is disabled on purpose.`,
        img: `${mobilezillaScreen}`,
        changeOrder: false,
        url: "https://mobilezilla.netlify.app/",
        gitUrl: 'https://github.com/kkorab/mobilezilla'
    },
    {
        title: "Taskmania",
        desc: "Taskmania is a simple to do app. This project is fully designed by me. It's made with Vanilla.JS, CSS, HTML.",
        technologies: ["Local Storage", "ScrollReveal.js"],
        note: "It's originally designed for mobile devices",
        img: `${taskmaniaScreen}`,
        changeOrder: true,
        url: "https://taskmania.netlify.app/",
        gitUrl: 'https://github.com/kkorab/taskmania'
    },
    {
        title: "Chirurgia Jednego Dnia",
        desc: "Chirurgia Jednego Dnia is a project for Medical Doctors in Gorzów Wlkp., Poland. It's a simple website to view prices for surgery etc. Website is full responsive. Used technologies:",
        technologies: ["RWD", "Flexbox", "ScrollReveal.js"],
        note: "",
        img: `${chirurgiaScreen}`,
        changeOrder: false,
        url: "https://chirurgia.netlify.app/",
        gitUrl: 'https://github.com/kkorab/chirurgia'
    },
]

const codeVariants = {
    to: {
        y: 10,
        transition: {
            duration: 1,
            yoyo: Infinity,
        }
    }
}

export default function Projects() {
    return (
        <ProjectsSection>
            <img src={waveSvg} alt="wave" style={{transform: 'translateY(-2px)', }}></img>
            <Container>
                <SectionTitle id="projects">Projects</SectionTitle>
                {projectsData.map((item, i) => {
                    return <Project key={i} item={item}/>
                })}
                
            </Container>
            <img className="blob blob-1" src={blobSvg1} alt="blob"/>
            <img className="blob blob-2" src={blobSvg2} alt="blob"/>
            <img className="blob blob-3" src={blobSvg3} alt="blob"/>

            <motion.div variants={codeVariants} initial={{rotate:30}} animate="to" className='code-icon code-icon-1'>
                <i className="fas fa-code"></i>
            </motion.div>
            <motion.div variants={codeVariants} initial={{rotate:-30}} animate="to" className='code-icon code-icon-2'>
                <i className="fas fa-code"></i>
            </motion.div>
            <motion.div variants={codeVariants} initial={{rotate:30}} animate="to" className='code-icon code-icon-3'>
                <i className="fas fa-code"></i>
            </motion.div>
            <motion.div variants={codeVariants} initial={{rotate:-30}} animate="to" className='code-icon code-icon-4'>
                <i className="fas fa-code"></i>
            </motion.div>
            <img src={waveSvg3} style={{background: "var(--third-color)", transform: "translateY(12px)"}} alt="wave"/>
        </ProjectsSection>
    )
}


const ProjectsSection = styled.section`
    background: var(--bg-color);
    color: var(--fifth-color);
    position: relative;
    overflow: hidden;
    z-index: 2;
`
