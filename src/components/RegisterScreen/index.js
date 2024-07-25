import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as C from "./styles";
import { api } from "../../api";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  async function Register() {
    try {
      const res = await api.post("/register", {
        email,
        password,
        name,
        age: Number(age),
      });
      alert("Usuario criado com sucesso!");
      navigate("/login");
    } catch (e) {
      console.log(e);
      alert("Falha ao fazer login");
    }
  }

  return (
    <C.Container>
      <C.BackgroundTop />
      <C.BackgroundBottom />
      <C.RegisterBox>
        <C.Title>Cadastro</C.Title>
        <C.Form>
          <C.Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <C.Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.Input
            type="number"
            placeholder="Idade"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <C.Input
            type="password"
            placeholder="Crie sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <C.Button onClick={() => Register()}>Cadastrar</C.Button>
        </C.Form>
        <C.LoginLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </C.LoginLink>
      </C.RegisterBox>
    </C.Container>
  );
};

export default RegisterScreen;
