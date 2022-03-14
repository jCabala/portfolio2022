import styled from 'styled-components';

export const LinkWrapper = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  border-radius: 12px;

  &:hover {
    color: grey;
    border: 1px solid grey;
  }
`;

export const Article = styled.article`
  * {
    line-height: 25px;
  }
  margin-bottom: 30px;
  ul,
  ol {
    font-size: 110%;
    line-height: 2.3;
    font-weight: bold;
    margin: 10px 0;
  }
  pre {
    background: grey;
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    line-height: 2.3;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ArticleWrapper = styled.div`
  margin: 50px auto;

  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 800px;
    margin-bottom: 30px;
    border-radius: 12px;
  }

  h2 {
    align-self: flex-start !important;
  }
`;

export const Date = styled.span`
  width: 100%;
  max-width: 800px;
  padding: 5px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 10px 0;
`;
