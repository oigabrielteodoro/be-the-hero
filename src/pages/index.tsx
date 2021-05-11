import { Button } from '~/components/shared/Button';
import { Container, Content, Logo } from '~/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Content>
        <Logo src="/static/img/logo.svg" alt="Be The Hero" />

        <h1>Faça seu logon</h1>

        <form>
          <input type="text" placeholder="Seu ID" />

          <Button type="submit">Entrar</Button>
        </form>
      </Content>

      <img src="/static/img/peoples.svg" alt="Peoples" />
    </Container>
  );
}
