import React from 'react'
import * as C from "./styles";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()

  function HandleLogout() {
    localStorage.removeItem("userToken")
    navigate("/login")
  }

  return (
    <C.Container>
        <C.Header>
            <C.Title>Controle Financeiro</C.Title>
        </C.Header>
        <C.LogoutButton onClick={HandleLogout}>Sair</C.LogoutButton>
    </C.Container>
  )
}

export default Header;