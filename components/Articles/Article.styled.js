import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  transition: transform 0.2s ease-in;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    transform: scale(1.05);
    div {
      color: white;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.75rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  div {
    background: grey;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 1.5rem;
  }
`;
