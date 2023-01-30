import { Container, Content } from "./styles";
import Button from "../Button";

function HeaderTop({ setAuthenticated }) {
  const handleLogout = () => {
    setAuthenticated(false);
    return localStorage.clear();
  };
  return (
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
        <Button onClick={handleLogout}>Voltar</Button>
      </Content>
    </Container>
  );
}
export default HeaderTop;
