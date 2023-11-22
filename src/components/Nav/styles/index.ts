import styled from "styled-components";

export const NavWrapper = styled.nav`
  border-bottom: 1.5px solid #f0effb;
  padding: 0 20px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .menu {
    display: none;
  }

  @media (max-width: 800px) {
    width: 100%;
    .menu {
      display: block;
    }
  }
`;
