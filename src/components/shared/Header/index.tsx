import { FiPower } from 'react-icons/fi';

import { Button } from '../Button';

import { Container, ContentRow, signOutButton } from './styles';

export function Header() {
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

        <Button type="button" style={signOutButton}>
          <FiPower size={20} color="#E02041" />
        </Button>
      </ContentRow>
    </Container>
  );
}
