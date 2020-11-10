import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { Container } from './styles';
import LogoImg from '../../assets/logo3.png';

const Header: React.FC = () => {
  const history = useHistory();
  const { user, signOut } = useAuth();
  const auth = Object.values(user);
  const name = auth[0];

  const handleLogout = useCallback(async () => {
    try {
      // Método signOut do AuthContext que encerra a sessão do usuário;
      signOut();
      history.push('/');
      /* ***************************************************************** */
    } catch (err) {
      console.log(err);
    }
  }, [signOut, history]);
  return (
    <Container>
      <div id="logo">
        <img src={LogoImg} alt="My movies" />
        <Link to="/bestofyear">Melhores do Ano</Link>
      </div>
      <div id="login">
        <h4>Usuário logado:</h4>
        <span>{name}</span>
      </div>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
};

export default Header;
