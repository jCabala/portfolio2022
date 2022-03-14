import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Div1 = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }

  display: flex;
`;

export const Div2 = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: none;
`;
