import { NavWrapper } from "./styles";
const Nav = () => {
  return (
    <NavWrapper>
      <img src="/images/logo.svg" alt="Logo" />
      <img className="menu" src="/images/menu.svg" alt="Menu" />
    </NavWrapper>
  );
};

export default Nav;
