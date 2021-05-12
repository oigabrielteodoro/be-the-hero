import styled, { css } from 'styled-components';

type ButtonProps = {
  isSignOut?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--black-800);
    font-size: 1.75rem;
    text-align: center;
  }

  span {
    color: var(--gray-100);
  }

  section {
    display: flex;
    align-items: center;

    margin-top: 1.75rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  flex: 1;

  height: 10rem;
  width: 8.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-radius: 0.5rem;

  border: 0;
  background: var(--shape);

  transition: filter 0.2s;

  svg {
    color: var(--gray-400);
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0.75rem;
    color: var(--gray-400);
  }

  & + button {
    margin-left: 1rem;
  }

  &:hover {
    filter: brightness(0.98);
  }

  ${({ isSignOut }) =>
    isSignOut &&
    css`
      background: var(--red-400);
      color: var(--white);

      svg,
      span {
        color: var(--white);
      }

      span {
        font-weight: bold;
      }

      &:hover {
        filter: brightness(0.9);
      }
    `}
`;
