import React from 'react';
import Link from 'next/link';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Div1, Div2 } from './HeroStyles';

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome to My Website
        <br />
        Nice To See You There.
      </SectionTitle>
      <Div1>
        <img style={{ width: 300 }} src='./images/js.png' alt='' />
        <img style={{ width: 300 }} src='./images/html.png' alt='' />
        <img style={{ width: 300 }} src='./images/css.png' alt='' />
      </Div1>
      <Div2>
        <img style={{ width: 300 }} src='./images/coding.png' alt='' />
      </Div2>
      <Link href='/#about' passHref={true}>
        <Button> Learn More</Button>
      </Link>{' '}
    </LeftSection>
  </Section>
);

export default Hero;
