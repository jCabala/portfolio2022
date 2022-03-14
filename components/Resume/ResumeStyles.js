import styled, { keyframes } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const ResumeContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TextWrapper = styled.div`
  border-right: 10px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;

  @media ${({ theme }) => theme.breakpoints.md} {
    border-right: none;
  }

  padding-right: 20px;
  margin-right: 20px;
`;

const scale = keyframes`
    50%{
        transform: scale(1.3);
    }
`;

export const IconWrapper = styled.a`
  justify-self: center;
  margin: 50px auto;
  animation: ${scale} 3s infinite;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  padding: 10px;
  cursor: pointer;
`;
