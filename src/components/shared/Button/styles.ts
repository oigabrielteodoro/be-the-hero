import styled from 'styled-components';

export const Container = styled.button`
  background: var(--red-400);
  border: 0;

  font-size: 1.125rem;
  font-weight: 500;

  color: var(--white);
  line-height: 1.313rem;

  padding: 1.25rem;
  border-radius: 0.5rem;

  width: 100%;
  height: 3.75rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
