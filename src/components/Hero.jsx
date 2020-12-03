import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import IconsList from '../components/IconsList';
import { PortfolioContext } from '../Context';

const headlineVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const subHeadlineVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const buttonsVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 2.8,
    },
  },
};

export default function Hero() {
  const { fixedScrolling } = useContext(PortfolioContext);

  return (
    <HeroSection id='home'>
      <IconsList />
      <Container>
        <HeroContent>
          <HeroHeadline
            variants={headlineVariants}
            initial='hidden'
            animate='show'
          >
            Konrad Korabiowski
          </HeroHeadline>
          <HeroSubheadline
            variants={subHeadlineVariants}
            initial='hidden'
            animate='show'
          >
            {' '}
            Junior Front-End Developer
          </HeroSubheadline>
          <HeroBtnsCnt
            variants={buttonsVariants}
            initial='hidden'
            animate='show'
          >
            <a
              onClick={e => fixedScrolling(e)}
              className='btn-link'
              href='#about-me'
            >
              <Button whileTap={{ scale: 0.95 }}>View Profile</Button>
            </a>
            <a
              onClick={e => fixedScrolling(e)}
              className='btn-link'
              href='#projects'
            >
              <Button>Explore Work</Button>
            </a>
          </HeroBtnsCnt>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export const device = {
  mobileS: `(max-width: 350px)`,
  tablet: `(min-width: 600px)`,
  laptop: `(min-width: 800px)`,
};

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--bg-color);
  position: relative;
  z-index: 1;
  overflow: hidden;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 150px;
  width: 90%;
  @media ${device.laptop} {
  } ;
`;

const HeroHeadline = styled(motion.h1)`
  font-size: 2rem;
  line-height: 1;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--fifth-color);
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
    margin: 0.5rem 0;
  } ;
`;

const HeroSubheadline = styled(motion.h2)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  color: var(--fourth-color);
  border-bottom: 1px solid var(--secondary-color);
  @media ${device.tablet} {
    font-size: 1.5rem;
    max-width: 600px;
    letter-spacing: 2px;
    margin-top: 0.5rem;
  } ;
`;
const HeroBtnsCnt = styled(motion.div)`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    max-width: 600px;
    margin: 0.5rem 0;
  } ;
`;

export const Button = styled(motion.button)`
  width: 100%;
  padding: 0.3rem 1.3rem;
  border-radius: 5px;
  background: var(--bg-color);
  font-family: var(--main-font);
  color: var(--fourth-color);
  border: 1px solid var(--fourth-color);
  cursor: pointer;
  transition: 0.5s all;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  position: relative;
  z-index: 2;
  margin: 0.1rem 0;
  &:hover {
    color: var(--fifth-color);
  }
  @media ${device.mobileS} {
    padding: 0.3rem 0.6rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
    padding: 0rem 1.3rem;
  }
`;
