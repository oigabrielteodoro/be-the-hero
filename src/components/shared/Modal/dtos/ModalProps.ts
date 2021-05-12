import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onRequestClose: () => void;
};

export default ModalProps;
