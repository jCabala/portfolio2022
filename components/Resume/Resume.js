import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';

import {
  ContentContainer,
  ResumeContainer,
  TextWrapper,
  IconWrapper,
} from './ResumeStyles';

import { FaBookOpen } from 'react-icons/fa';

const Resume = () => {
  return (
    <Section nopadding id='about'>
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <ContentContainer>
        <TextWrapper>
          <SectionText>
            My name is Jakub from Poland, and I do web development. Currently, I
            focus on frontend development with React. Apart from web
            development, I am interested in competitive programming and
            mathematics.
          </SectionText>
        </TextWrapper>

        <ResumeContainer>
          <h3>My Resume</h3>
          <IconWrapper href='./download/cv.pdf' target='_blank'>
            <FaBookOpen size='5rem' color='#dc143c' />
          </IconWrapper>
        </ResumeContainer>
      </ContentContainer>
      <img src='./images/coding.svg' style={{ width: '100%' }} alt='' />
    </Section>
  );
};

export default Resume;
