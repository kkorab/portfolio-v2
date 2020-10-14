import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {Button} from './Hero';
import {device} from './Hero';
import {PortfolioContext} from '../Context';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Project(props) {
    const {title, desc, technologies, note, img, changeOrder, url, gitUrl} = props.item;
    const {isMobile}  = useContext(PortfolioContext);

    useEffect(() => {
        Aos.init({
            duration: 2000,
            delay: 1000,
            once: true,
        });
    }, []);

    const styleImg = {
        background: `linear-gradient(rgba(0, 140, 158, 0.7), rgba(0, 180, 204, 0.5)) 0% 0% / cover, url(${img}) center center no-repeat`,
        backgroundSize: `cover`,
    }

    const imgVariants = {
        initial: {
            opacity: 1,
        },
        hover: {
            opacity: 1,
        }
    }

    const buttonImgVariants = {
        hidden: {
            opacity: 0,
            y: 0
        },
        hover: {
            opacity: 1,
            y: 50
        }
    }

    const styleLink = {
        order: `${isMobile ? "" : (changeOrder ? 1 :-1)}`
    }

    
    return (
        <ProjectElement>
            <a href={url} style={styleLink} target="_blank" className="img-link" data-aos={changeOrder ? 'fade-left' : 'fade-right'}>
                <ProjectImg style={styleImg} variants={imgVariants} whileHover="hover" className="project-img">
                    <ButtonImg onClick={() => {window.open(url)}} variants={buttonImgVariants} initial="hidden">
                            Live Preview
                    </ButtonImg>
                </ProjectImg>
            </a>
            <ProjectDesc data-aos={changeOrder ? 'fade-right' : 'fade-left'}>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectShortDesc>
                    {desc}
                </ProjectShortDesc>
                <ProjectTechnologies>Used Technologies:
                    {technologies.map((item, i) => {
                        return (
                            <ProjectTechnology key={i}>{item}</ProjectTechnology>
                        )
                    })}
                </ProjectTechnologies>
                {note ? <ProjectNote><strong>Note: </strong>{note}</ProjectNote> : null }
                <ProjectBtnsCnt>
                    <a className="btn-link" href={url} target="_blank">
                        <Button>Live Demo</Button>
                    </a>
                    <a className="btn-link" href={gitUrl} target="_blank">
                        <Button>Check Code</Button>
                    </a>
                </ProjectBtnsCnt>
            </ProjectDesc>
        </ProjectElement>
    )
}


const ProjectElement = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    border-bottom: 1px solid var(--secondary-color);
    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    };
    &:last-child {
        border-bottom: none;
    }
    
`

const ProjectImg = styled(motion.div)`
    border-radius: 5px;
    width: 90vw;
    height: 50vw;
    position: relative;
    z-index: 2;
    border: 3px solid var(--fourth-color);
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
        width: 44vw;
        height: 25vw;
        max-width: 590px;
        max-height: 332px;
    };
`

const ProjectDesc = styled.div`
    @media ${device.laptop} {
        width: 49%;
    };

`

const ProjectTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: left;
    padding: 0.4rem 0;
    text-transform: uppercase;
`
const ProjectShortDesc = styled.p`
    font-size: 0.875rem;
    text-align: justify;
    font-weight: 300;
    padding-bottom: 0.4rem;
    color: var(--fourth-color);
    line-height: 1.5;
`

const ProjectTechnologies = styled.ul`
    font-size: 0.875rem;
    list-style: inside;
    padding-bottom: 0.4rem; 
    color: var(--fourth-color);
`

const ProjectTechnology = styled.li`
    font-size: 0.875rem;
`

const ProjectNote = styled.p`
    font-size: 0.875rem;
    text-align: justify;
    font-weight: 300;
    color: var(--fourth-color);
`

const ProjectBtnsCnt = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    max-width: 500px;
`
const ButtonImg = styled(motion.button)`
    padding: 0.4rem 1.3rem;
    font-family: var(--main-font);
    color: var(--fourth-color);
    border-radius: 5px;
    border: 2px solid var(--fifth-color);
    text-transform: uppercase;
    background: rgba(0,0,0,0.7);
    cursor: pointer;
    transform: translate(-50%, -50%);
`