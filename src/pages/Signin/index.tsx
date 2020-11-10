import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getErrors';
import Input from '../../components/input';
import Button from '../../components/button';
import LogoImg from '../../assets/logo2.png';
import { Container, Content, AnimationContainer, Background } from './styles';

/* **************************[INTERFACE]*************************** */
interface SignInFormData {
  email: string;
  password: string;
}
/* **************************************************************** */

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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
        // Método signIn do AuthContext que verifica a autenticação do usuário;
        signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
        /* ***************************************************************** */
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="My movies" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Entra aê!</h1>
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
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
