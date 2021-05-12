import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  padding: 2rem;
  border-radius: 0.5rem;

  background: var(--white);

  display: flex;
  flex-direction: column;

  border: 2px solid transparent;

  transition: border-color 0.2s;

  button {
    position: absolute;
    right: 20px;
    top: 20px;

    background: transparent;
    border: 0;

    color: var(--gray-100);

    transition: color 0.2s;

    &:hover {
      color: var(--red-400);
    }
  }

  strong {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 0.875rem;
    text-transform: uppercase;
    color: var(--gray-800);
  }

  span {
    color: var(--gray-400);

    & + strong {
      margin-top: 2rem;
    }
  }

  &:hover {
    border-color: var(--red-400);
  }
`;
