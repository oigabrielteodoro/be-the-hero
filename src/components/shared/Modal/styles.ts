import { motion } from 'framer-motion';

import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: #00000090;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  overflow: hidden;
  cursor: pointer;
`;

export const Container = styled(motion.div)`
  padding: 2rem;
  background: var(--white);
  border-radius: 0.5rem;
  cursor: default;
`;
