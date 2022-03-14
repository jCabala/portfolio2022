import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Conntact from '../components/Conntact/Conntact';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Resume />

      <Conntact />
    </>
  );
};

export default Home;
