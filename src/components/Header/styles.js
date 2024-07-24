import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: teal;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 20px;
  &:hover {
    background-color: #f1f1f1;
  }
`;