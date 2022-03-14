import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <BsCodeSlash size='3rem' style={{ marginRight: 5 }} />
          <span>jCabala</span>
        </a>
      </Link>
    </Div1>

    <Div2>
      {['projects', 'about', 'conntact'].map(e => (
        <li key={e}>
          <Link href={`/#${e}`} passHref={true}>
            <NavLink>{capitalize(e)}</NavLink>
          </Link>
        </li>
      ))}

      <li key='blog'>
        <Link href={`/blog`} passHref={true}>
          <NavLink colored>Blog</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href='https://github.com/jCabala'>
        <AiFillGithub size='3rem'></AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://twitter.com/CabalaKuba'>
        <AiFillTwitterCircle size='3rem'></AiFillTwitterCircle>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
