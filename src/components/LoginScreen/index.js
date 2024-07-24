import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from './styles'

const LoginScreen = () => {
  const navigate = useNavigate();

  function HandleLogin() {
    localStorage.setItem("user", "Lucas");
    navigate("/");
  }

  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.LoginBox>
        <C.Title>Login</C.Title>
        <C.Form>
          <C.Input type="email" placeholder="Email" required />
          <C.Input type="password" placeholder="Senha" required />
          <C.Button onClick={HandleLogin}>Entrar</C.Button>
        </C.Form>
        <C.RegisterLink>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </C.RegisterLink>
      </C.LoginBox>
    </C.Container>
  );
};

export default LoginScreen;

