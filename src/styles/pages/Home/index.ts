import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
`;

export const Container = styled.div`
  display: flex;

  max-width: 1100px;
  margin: 0 auto;

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
  min-width: 351px;

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

export const SignUpContainer = styled.div`
  margin-top: 2.5rem;

  cursor: pointer;

  a {
    display: flex;
    align-items: center;

    font-size: 1.125rem;
    font-weight: 500;

    color: var(--black-400);

    transition: opacity 0.2s;

    svg {
      margin-right: 0.75rem;
      color: var(--red-400);
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
