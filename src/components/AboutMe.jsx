import React from 'react';
import styled from 'styled-components';
import waveSvg from '../images/svg/wave.svg';
import { Container } from './Hero';
import photo from '../images/images/profile.jpg';
import { motion } from 'framer-motion';
import { device } from './Hero';

const codeVariants = {
  to: {
    y: 10,
    transition: {
      duration: 1,
      yoyo: Infinity,
    },
  },
};

const otherTechnologies = [
  'React: Hooks, Context API, Router, HOC, Render Props, Atomic Design',
  'Redux (React-Redux)',
  'Gatsby.JS (Basics)',
  'GraphQL (Apollo Client)',
  'Jest & React Testing Library',
  'Styled Components',
  'Formik & Yup',
  'Framer Motion',
  'Storybook',
  'ECMAScript 6',
  'AJAX',
  'Responsive Web Design',
  'Mobile First',
  'BEM',
  'Contentful',
  'Netlify',
  'Adobe Photoshop',
  'Visual Studio Code',
];

// const otherTechnologies = [
//     'React: Hooks, Context API, Router, HOC, Render Props',
//     'Gatsby.JS (Basics)',
//     'React Hooks',
//     'React Router',
//     'Context API',
//     'Styled Compponents',
//     'Formik & Yup',
//     'Framer Motion',
//     'Storybook',
//     'ECMAScript 6',
//     'Atomic Design',
//     'AJAX',
//     'Responsive Web Design',
//     'Mobile First',
//     'BEM',
//     'Contentful',
//     'Netlify',
//     'Adobe Photoshop',
//     'Visual Studio Code',
//   ];

export default function AboutMe() {
  const codeLines = [
    `const firstWelcome = "Hello World";`,
    `console.log(firstWelcome);`,
    `class GoodEmployee
            contructor(name, lastName, ambition, hardWorking) {
                this.name = Konrad;
                this.lastName = Korabiowski;
                this.ambition = 99%; 
                this.hardWorking = 100%;
             }
            :)
        }`,
    `const HireMe = () => {
            const getContact = document.getElementById("contact");
            const coordsTop = getContact.getBoundingClientRect().top;
            window.scrollTo(0, coordsTop)
            :)
        }`,
  ];

  return (
    <AboutMeSection>
      <img src={waveSvg} alt='wave svg' />
      <Container>
        <SectionTitleAbout id='about-me'>About me</SectionTitleAbout>
        <PhotoAndDescCnt>
          <Photo src={photo} />
          <SectionDesc>
            Hello! My name is Konrad I’m 26 years old engineer who was working
            as a HVAC systems designer but decided to change path of career. Now
            I want to become a professional front-end developer, but in the
            future I see myself as a professional full-stack developer and
            that’s my goal. Step by step I realize my plan by practicing
            everyday and improving my front-end skills. My favorite technology
            to build applications is React.js. I can code simple to-do apps,
            e-commerce or webpages. The last thing I learned was basics of
            Gatsby JS. Now I’m going to improve Gatsby skills and soon I’m going
            to learn TypeScript. By joining your company I commit to make myself
            and my job the best as I can. If you want to see some of my
            projects, go to:{' '}
            <a href='https://github.com/kkorab' target='_blank'>
              github
            </a>
          </SectionDesc>
        </PhotoAndDescCnt>
        <SubHeadline>Education</SubHeadline>
        <EducationStage>
          <Stage>
            <Year>2017-2019</Year>
            <Degree>Master of Engineering</Degree>
          </Stage>
          <StageTree>
            <svg className='svg-education'>
              <circle cx='50%' cy='5' r='5' />
              <line x1='50%' y1='2' x2='50%' y2='100%' />
            </svg>
          </StageTree>
          <StageDesc>
            <UniversityName>Warsaw University of Technology</UniversityName>
            <UniversityDesc>
              <UniversityDescLI>
                Faculty: "Wydział Instalacji Budowlanych, Hydrotechniki i
                Inżynierii Środowiska"{' '}
              </UniversityDescLI>
              <UniversityDescLI>
                Course: Environtmental Engineering
              </UniversityDescLI>
              <UniversityDescLI>
                Spec.: Heating, Ventilation and Air Conditioning Systems
              </UniversityDescLI>
            </UniversityDesc>
          </StageDesc>
        </EducationStage>
        <EducationStageTwo>
          <Stage>
            <Year>2013-2017</Year>
            <Degree>Bachelor of Engineering</Degree>
          </Stage>
          <StageTree>
            <svg className='svg-education'>
              <circle cx='50%' cy='5' r='5' />
              <line x1='50%' y1='2' x2='50%' y2='100%' />
            </svg>
          </StageTree>
          <StageDesc>
            <UniversityName>Poznań University of Technology</UniversityName>
            <UniversityDesc>
              <UniversityDescLI>
                Faculty: "Wydział Budownictwa i Inżynierii Środowiska"{' '}
              </UniversityDescLI>
              <UniversityDescLI>
                Course: Environtmental Engineering
              </UniversityDescLI>
            </UniversityDesc>
          </StageDesc>
        </EducationStageTwo>
        <SubHeadline>Technologies</SubHeadline>
        <TechnologiesCnt>
          <Technology>
            <i className='fab fa-react'></i>{' '}
          </Technology>
          <Technology>
            <i className='fab fa-js-square'></i>
          </Technology>
          <Technology>
            <i className='fab fa-html5'></i>{' '}
          </Technology>
          <Technology>
            <i className='fab fa-css3-alt'></i>
          </Technology>
          <Technology>
            <i className='fab fa-sass'></i>
          </Technology>
          <Technology>
            <i className='fab fa-npm'></i>
          </Technology>
          <Technology>
            <i className='fab fa-git-alt'></i>
          </Technology>
          <Technology>
            <i className='fab fa-node'></i>
            <span className='basics'>(basics)</span>
          </Technology>
        </TechnologiesCnt>
        <SubHeadline>Other</SubHeadline>
        <OtherList>
          {otherTechnologies.map((tech, i) => {
            return <OtherLI key={i}>{tech}</OtherLI>;
          })}
        </OtherList>
        <motion.div
          variants={codeVariants}
          initial={{ rotate: 30 }}
          animate='to'
          className='code-icon code-icon-1'
        >
          <i className='fas fa-code'></i>
        </motion.div>
        <motion.div
          variants={codeVariants}
          initial={{ rotate: -30 }}
          animate='to'
          className='code-icon code-icon-2'
        >
          <i className='fas fa-code'></i>
        </motion.div>
        <motion.div
          variants={codeVariants}
          initial={{ rotate: 30 }}
          animate='to'
          className='code-icon code-icon-3'
        >
          <i className='fas fa-code'></i>
        </motion.div>
        <motion.div
          variants={codeVariants}
          initial={{ rotate: -30 }}
          animate='to'
          className='code-icon code-icon-4'
        >
          <i className='fas fa-code'></i>
        </motion.div>
      </Container>
      <motion.h5
        className='code-line code-line-0'
        initial={{ rotate: -10, y: 0 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            yoyo: Infinity,
          },
        }}
      >
        {codeLines[0]}
      </motion.h5>
      <motion.h5
        className='code-line code-line-1'
        initial={{ rotate: 10, y: 0 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            yoyo: Infinity,
          },
        }}
      >
        {codeLines[1]}
      </motion.h5>
      <motion.h5
        className='code-line code-line-2'
        initial={{ rotate: -10, y: 0 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            yoyo: Infinity,
          },
        }}
      >
        {codeLines[2]}
      </motion.h5>
      <motion.h5
        className='code-line code-line-3'
        initial={{ rotate: 10, y: 0 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            yoyo: Infinity,
          },
        }}
      >
        {codeLines[3]}
      </motion.h5>
    </AboutMeSection>
  );
}

const AboutMeSection = styled.section`
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  background: var(--third-color);
  overflow: hidden;
`;

const SectionTitleAbout = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  position: relative;
  &:before {
    content: '';
    width: 40px;
    height: 1px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    left: 0;
    top: 50%;
  }
  &:after {
    content: '';
    width: 40px;
    height: 1px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    right: 0;
    top: 50%;
  }
  @media ${device.tablet} {
    margin: 0 auto;
    max-width: 400px;
    font-size: 2rem;
  } ;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  position: relative;
  &:before {
    content: '';
    width: 40px;
    height: 1px;
    border-radius: 1px;
    background: var(--third-color);
    position: absolute;
    left: 0;
    top: 50%;
  }
  &:after {
    content: '';
    width: 40px;
    height: 1px;
    border-radius: 1px;
    background: var(--third-color);
    position: absolute;
    right: 0;
    top: 50%;
  }
  @media ${device.tablet} {
    margin: 0 auto;
    max-width: 400px;
    font-size: 2rem;
  } ;
`;

const PhotoAndDescCnt = styled.div``;

const Photo = styled.img`
  display: block;
  height: 230px;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 20px;
`;

const SectionDesc = styled.p`
  text-indent: 12px;
  line-height: 1.8;
  font-size: 0.8rem;
  text-align: justify;
  padding: 1rem 0;
  letter-spacing: 0.3px;
  max-width: 800px;
  margin: 0 auto;
`;

const SubHeadline = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
`;

const EducationStage = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Stage = styled.div`
  width: 45%;
`;

const Year = styled.h5`
  text-align: center;
  font-size: 0.875rem;
  margin: 0.4rem;
`;

const Degree = styled.h5`
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const StageTree = styled.div`
  width: 5%;
`;

const StageDesc = styled.div`
  width: 45%;
`;

const UniversityName = styled.h5`
  text-align: center;
  font-size: 0.875rem;
  margin: 0.4rem;
`;

const UniversityDesc = styled.ul`
  font-size: 0.875rem;
  list-style: disc inside;
  text-align: center;
`;

const UniversityDescLI = styled.li`
  font-size: 0.8rem;
  padding: 0.2rem 0;
`;

const EducationStageTwo = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const TechnologiesCnt = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Technology = styled.div`
  width: 100px;
  margin: 0.5rem 0;
  font-size: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s all;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    margin: 1rem 0;
    font-size: 3rem;
  }
  &:nth-child(1):hover {
    color: #61dafb;
  }
  &:nth-child(2):hover {
    color: #f0db4f;
  }
  &:nth-child(3):hover {
    color: #f06529;
  }
  &:nth-child(4):hover {
    color: #00a0e4;
  }
  &:nth-child(5):hover {
    color: #cc6699;
  }
  &:nth-child(6):hover {
    color: #d1403f;
  }
  &:nth-child(7):hover {
    color: #f05033;
  }
  &:nth-child(8):hover {
    color: #83cd29;
  }
`;

const OtherList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const OtherLI = styled.li`
  // text-transform: uppercase;
`;
