import { Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
        <span>Portfólios de programadores da Kenzie!</span>

        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}
export default Home;
