import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import LogoImg from '../../assets/logo2.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Campo obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Campo obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log('Usuário não autenticado.');
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="My movies" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Entra ae!</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/signup">
          Criar conta
          <FiLogIn />
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
