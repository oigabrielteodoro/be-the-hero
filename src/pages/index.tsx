import { FormProvider, useForm } from 'react-hook-form';

import { FiLogIn } from 'react-icons/fi';

import { Button } from '~/components/shared/Button';
import { Input } from '~/components/shared/Input';

import { Container, Content, Logo } from '~/styles/pages/Home';

export default function Home() {
  const { handleSubmit, ...form } = useForm();

  function onSubmit() {
    console.log('test');
  }

  return (
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
      </Content>

      <img src="/static/img/peoples.svg" alt="Peoples" />
    </Container>
  );
}
