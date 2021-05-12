import { CSSProperties } from 'react';

import styled from 'styled-components';

export const signOutButton: CSSProperties = {
  background: 'transparent',
  height: 60,
  width: 60,
  border: '2px solid var(--gray-50)',
  padding: 0,
  marginLeft: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1000px;
  margin: 0 auto;

  padding: 2rem 0;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 144px;
    height: 62.73px;

    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
    color: var(--black-800);
    font-size: 1.25rem;
    margin-left: 2rem;

    strong {
      color: var(--red-400);
    }
  }

  button:first-child {
    width: 262px;
  }
`;
