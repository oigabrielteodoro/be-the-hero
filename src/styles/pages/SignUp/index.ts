import styled from 'styled-components';

import { Container as InputContainer } from '~/components/shared/Input/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
`;

export const Container = styled.div`
  padding: 6rem;
  border-radius: 0.5rem;
  background: transparent;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 191px;
    height: 80.95px;
  }

  h1 {
    color: var(--black-800);
    margin: 4rem 0 2rem;
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }

  span {
    color: var(--gray-400);
    font-size: 1.125rem;
    line-height: 2rem;
  }

  a {
    margin-top: 5.25rem;

    display: flex;
    align-items: center;

    font-weight: 700;
    color: var(--gray-800);

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-left: 6rem;
  min-width: 448px;

  button,
  ${InputContainer} {
    margin-top: 1rem;
  }

  section {
    display: grid;
    grid-template-columns: auto 4.375rem;
    grid-gap: 1rem;
  }
`;
