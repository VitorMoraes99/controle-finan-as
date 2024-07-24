import React from "react";
import { Link } from "react-router-dom";
import * as C from './styles'

const RegisterScreen = () => {
  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.RegisterBox>
        <C.Title>Cadastro</C.Title>
        <C.Form>
          <C.Input type="text" placeholder="Nome" required />
          <C.Input type="email" placeholder="Email" required />
          <C.Input type="number" placeholder="Idade" required />
          <C.Input type="password" placeholder="Crie sua senha" required />
          <C.Button>Cadastrar</C.Button>
        </C.Form>
        <C.LoginLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </C.LoginLink>
      </C.RegisterBox>
    </C.Container>
  );
};

export default RegisterScreen;

