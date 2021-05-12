import { useState } from 'react';

import { FiPower } from 'react-icons/fi';

import { Button } from '../Button';

import { SignOutModal } from './SignOutModal';

import { Container, ContentRow, signOutButton } from './styles';

export function Header() {
  const [isSignOutModal, setIsSignOutModal] = useState(false);

  function handleOpenSignOutModal() {
    setIsSignOutModal(true);
  }

  function handleCloseSignOutModal() {
    setIsSignOutModal(false);
  }

  return (
    <Container>
      <ContentRow>
        <img src="/static/img/logo.svg" alt="Be The Hero" />

        <span>
          Bem vindo, <strong>APAD</strong>
        </span>
      </ContentRow>
      <ContentRow>
        <Button type="button">Cadastrar novo caso</Button>

        <Button type="button" style={signOutButton} onClick={handleOpenSignOutModal}>
          <FiPower size={20} color="#E02041" />
        </Button>
      </ContentRow>

      {isSignOutModal && <SignOutModal onRequestClose={handleCloseSignOutModal} />}
    </Container>
  );
}
