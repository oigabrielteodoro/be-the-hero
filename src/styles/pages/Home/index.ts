import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;

  max-width: 1000px;
  margin: 2rem auto 5rem;

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
    color: var(--black-800);
  }
`;

export const CasesList = styled.ul`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;
