import styled, { css } from 'styled-components';

type ContainerProps = {
  isFilled: boolean;
  isFocused: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: var(--white);
  border: 2px solid var(--gray-50);

  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: border-color 0.2s;

  svg {
    color: var(--gray-100);
    margin-right: 1.25rem;
  }

  input {
    background: transparent;
    border: 0;

    font-size: 1.125rem;
    line-height: 1.25rem;

    flex: 1;

    &::placeholder {
      color: var(--gray-100);
    }
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        color: var(--red-400);
      }
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--red-400);
    `}
`;
