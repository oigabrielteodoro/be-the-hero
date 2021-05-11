import Link from 'next/link';

import { FormProvider, useForm } from 'react-hook-form';

import { FiArrowLeft, FiMail, FiMapPin, FiSmartphone, FiTag } from 'react-icons/fi';

import { Input } from '~/components/shared/Input';
import { Button } from '~/components/shared/Button';

import { Wrapper, Container, Content, Form } from '~/styles/pages/SignUp';

export default function SignUp() {
  const { handleSubmit, ...form } = useForm();

  return (
    <Wrapper>
      <Container>
        <Content>
          <img src="/static/img/logo.svg" alt="Be The Hero" />

          <h1>Cadastro</h1>

          <span>
            Faça seu cadastro, entre na plataforma e ajude
            <br />
            pessoas a encontrarem os casos da sua ONG.
          </span>

          <Link href="/">
            <a>
              <FiArrowLeft size={20} strokeWidth={2.5} />
              Voltar para o login
            </a>
          </Link>
        </Content>
        <FormProvider handleSubmit={handleSubmit} {...form}>
          <Form>
            <Input name="name" placeholder="Nome da ONG" icon={FiTag} />
            <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />
            <Input name="cellphone" placeholder="Celular" icon={FiSmartphone} />

            <section>
              <Input name="city" placeholder="Cidade" icon={FiMapPin} />
              <Input name="uf" placeholder="UF" />
            </section>

            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormProvider>
      </Container>
    </Wrapper>
  );
}
