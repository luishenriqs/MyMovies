import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/input';
import Button from '../../components/button';
import LogoImg from '../../assets/logo2.png';
import { Container, Content, AnimationContainer, Background } from './styles';

/* **************************[INTERFACE]*************************** */
interface RegisteredData {
  name: string;
  email: string;
  password: string;
}
/* **************************************************************** */

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  /* Valor inicial do array de cadastro: cadastrados || objeto vazio; */
  const [registered, setRegistered] = useState<RegisteredData[]>(() => {
    const storaged = localStorage.getItem('@MyMovies:data');
    if (storaged) {
      return JSON.parse(storaged);
    }
    return [];
  });
  /* **************************************************************** */

  /* Primeiro cadastro || atualização de cadastros no localStorage; * */
  useEffect(() => {
    localStorage.setItem('@MyMovies:data', JSON.stringify(registered));
  }, [registered]);
  /* **************************************************************** */

  /* Captura de dados cadastrais && registro no array de cadastros; * */
  const handleSubmit = useCallback(
    async (data: RegisteredData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('Campo obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Campo obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        setRegistered([...registered, data]);
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    [registered, history],
  );
  /* **************************************************************** */

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={LogoImg} alt="My movies" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Vamos, já vai começar!</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
