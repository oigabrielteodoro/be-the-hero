import { MouseEvent, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import ModalProps from './dtos/ModalProps';

import { Container, Overlay } from './styles';

export function Modal({ children, onRequestClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);

  function handleClose() {
    setIsVisible(false);

    setTimeout(() => {
      onRequestClose();
    }, 500);
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === overlayRef.current) {
      handleClose();
    }
  }

  return (
    <Overlay ref={overlayRef} onClick={handleOverlayClick}>
      <AnimatePresence>
        {isVisible && (
          <Container
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transform: 'translateY(30px)' }}
            transition={{
              duration: 0.2,
            }}
          >
            {children}
          </Container>
        )}
      </AnimatePresence>
    </Overlay>
  );
}
