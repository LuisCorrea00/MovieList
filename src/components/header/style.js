import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #1E1E1E;
  color: #fff;
  height: 15vh;
`;

export const Title = styled.h1`
  font-family: 'Kavoon', cursive;
  margin-left: 20px;
  font-size: 40px;
`;

export const Links = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ff5733;
    }
  }
`;


