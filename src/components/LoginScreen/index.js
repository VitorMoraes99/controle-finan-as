import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { api } from "../../api";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function Login() {
    try {
      const res = await api.post("/login", {
        email,
        password
      });
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Falha ao fazer login");
    }
  }

  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.LoginBox>
        <C.Title>Login</C.Title>
        <C.Form>
          <C.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <C.Input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <C.Button onClick={() => Login()}>Entrar</C.Button>
        </C.Form>
        <C.RegisterLink>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </C.RegisterLink>
      </C.LoginBox>
    </C.Container>
  );
};

export default LoginScreen;
