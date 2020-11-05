import React, { createContext, useCallback, useState, useContext } from 'react';

interface AuthState {
  name?: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(email: string, password: string): void;
  signUp(name: string, email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const name = localStorage.getItem('@MyMovies:name');
    const email = localStorage.getItem('@MyMovies:email');
    const password = localStorage.getItem('@MyMovies:password');

    if (name && email && password) {
      console.log('localStorage: ', name, email, password);
      return { name, email, password };
    }
    return {} as AuthState;
  });
  const [user, setUser] = useState<AuthState>({} as AuthState);

  const signUp = useCallback(async ({ name, email, password }) => {
    localStorage.setItem('@MyMovies:name', name);
    localStorage.setItem('@MyMovies:email', email);
    localStorage.setItem('@MyMovies:password', password);
    console.log('Cadastro realizado: ', name, email, password);
    setData({ name, email, password });
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    if (data.email === email && data.password === password) {
      console.log('Usuário autorizado');
      localStorage.setItem('@MyMoviesUser:email', email);
      localStorage.setItem('@MyMoviesUser:password', password);
      setUser({ email, password });
    } else {
      console.log('Usuário não cadastrado.');
      throw new Error('User not registered.');
    }
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@MyMoviesUser:email');
    localStorage.removeItem('@MyMoviesUser:password');
    setUser({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
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
