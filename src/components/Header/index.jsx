import { Container } from "./styles.js";

function Header({ userName, module }) {
  return (
    <Container>
      <h1>Olá, {userName}</h1>
      <span>{module}</span>
    </Container>
  );
}

export default Header;
