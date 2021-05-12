import styled, { css } from 'styled-components';

type ContainerProps = {
  alignInCenter: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ alignInCenter }) =>
    alignInCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      flex: 1;
    `}
`;
