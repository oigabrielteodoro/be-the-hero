import Link from 'next/link';

import { FormProvider, useForm } from 'react-hook-form';

import { FiLogIn } from 'react-icons/fi';

import { Input } from '~/components/shared/Input';
import { Button } from '~/components/shared/Button';

import {
  Wrapper,
  Container,
  Content,
  Logo,
  SignUpContainer,
} from '~/styles/pages/SignIn';

export default function SignIn() {
  const { handleSubmit, ...form } = useForm();

  function onSubmit() {
    console.log('test');
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo src="/static/img/logo.svg" alt="Be The Hero" />

          <h1>Faça seu logon</h1>

          <FormProvider handleSubmit={handleSubmit} {...form}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Input name="email" icon={FiLogIn} placeholder="Seu e-mail" />

              <Button type="submit">Entrar no sistema</Button>
            </form>
          </FormProvider>

          <Link href="/signup">
            <SignUpContainer>
              <a>
                <FiLogIn size={20} /> Não tenho cadastro
              </a>
            </SignUpContainer>
          </Link>
        </Content>

        <img src="/static/img/peoples.svg" alt="Peoples" />
      </Container>
    </Wrapper>
  );
}
