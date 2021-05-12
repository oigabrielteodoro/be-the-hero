import Link from 'next/link';

import { FormProvider, useForm } from 'react-hook-form';

import { FiLogIn } from 'react-icons/fi';

import { Input } from '~/components/shared/Input';
import { Button } from '~/components/shared/Button';

import { Wrapper, Container, Content, SignUpContainer } from '~/styles/pages/SignIn';

import { Load } from '~/components/shared/Load';

export default function SignIn() {
  const { handleSubmit, ...form } = useForm();

  function onSubmit() {}

  return (
    <Wrapper>
      <Container>
        <Content>
          <Load duration={3} alignInCenter={false} repeat={0} />

          <h1>Faça seu logon</h1>

          <FormProvider handleSubmit={handleSubmit} {...form}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Input type="email" name="email" icon={FiLogIn} placeholder="Seu e-mail" />

              <Button type="submit">Entrar</Button>
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
