import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content } from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      )
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        const { token, user } = response.data;

        setAuthenticated(true);
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        toast.success("Login realizado com sucesso!");

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <section>
        <h1>Kenzie Hub</h1>
      </section>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <Input
            name="email"
            register={register}
            label="Email"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            error={errors.password?.message}
          />

          <Button type="submit">Entrar</Button>
          <p>Ainda não possui uma conta?</p>
          <div>
            <Button onClick={() => handleNavigation("/signup")} type="submit">
              Cadastre-se
            </Button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
export default Login;

const onSubmit = (data) => {
  axios
    .post("https://kenziehub.herokuapp.com/sessions", data)
    .then((response) => {
      if (response.data.user) {
        // window.localStorage.clear();
        window.localStorage.setItem("@username", response.data.user.name);
        window.localStorage.setItem(
          "@usermodule",
          response.data.user.course_module
        );
        window.localStorage.setItem("@userId", response.data.user.id);
        window.localStorage.setItem("@token", response.data.token);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        history.push(`/dashboard`);
        // console(response.data.user)
        setUser(response.data.user);
      } else {
        history.push(`/`);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Email ou senha incorretos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
};
