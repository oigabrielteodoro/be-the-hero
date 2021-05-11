import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  max-width: 1100px;
  margin: 122px auto;

  > img {
    margin-left: 151px;
  }
`;

export const Logo = styled.img`
  margin-bottom: 100px;

  width: 250px;
  height: 106px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  h1 {
    font-size: 2.25rem;
    line-height: 2.25rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  form {
    display: grid;
    grid-gap: 1rem;
  }
`;
