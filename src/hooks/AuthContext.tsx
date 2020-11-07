import React, { createContext, useCallback, useState, useContext } from 'react';

/* ***************************[INTERFACES]*********************************** */
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthenticatedData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(Credentials: SignInCredentials): Promise<void>;
  // signOut(): void;
}
/* ************************************************************************** */

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<AuthenticatedData>({} as AuthenticatedData);

  const signIn = useCallback(async ({ email, password }: AuthenticatedData) => {
    /* Aqui busco os usuários cadastrados; */
    const storaged = localStorage.getItem('@MyMovies:data');
    const data = storaged ? JSON.parse(storaged) : [];
    let i = 0;
    /* Aqui verifico se o usuário que deseja se logar já é cadastrado; */
    for (i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        setUser(data[i]);
      }
    }
  }, []);

  // Aqui encerro a autenticação do usuário;
  // const signOut = useCallback(async () => {
  //   setUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
