import { FiLogOut, FiXCircle } from 'react-icons/fi';

import { Modal } from '../../Modal';

import SignOutModalProps from './dtos/SignOutModalProps';

import { Container, Button } from './styles';

export function SignOutModal({ onRequestClose }: SignOutModalProps) {
  return (
    <Modal onRequestClose={onRequestClose}>
      <Container>
        <h1>Sair da plataforma</h1>
        <span>Você deseja mesmo sair da plataforma? 😢</span>

        <section>
          <Button type="button">
            <FiXCircle size={40} />
            <span>Cancelar</span>
          </Button>
          <Button type="button" isSignOut>
            <FiLogOut size={40} />
            <span>Sair</span>
          </Button>
        </section>
      </Container>
    </Modal>
  );
}
