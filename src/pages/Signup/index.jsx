import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Content, Select } from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Mínimo de 6 dígitos"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      )
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
    bio: yup.string().required("Fale um pouco sobre você!"),
    contact: yup.string().required("Infome um contato"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    course_module,
    contact,
    bio,
  }) => {
    const user = { name, email, password, course_module, contact, bio };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <section>
        <h1>Kenzie Hub</h1>
        <Button onClick={() => handleNavigation("/")}>Voltar</Button>
      </section>
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
          <Input
            register={register}
            name="name"
            label="Nome"
            placeholder="Digite aqui seu nome"
            error={errors.name?.message}
          />
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
          <Input
            register={register}
            name="passwordConfirm"
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            type="password"
            error={errors.passwordConfirm?.message}
          />
          <Input
            name="bio"
            register={register}
            label="Bio"
            placeholder="Fale sobre você"
            error={errors.bio?.message}
          />
          <Input
            name="contact"
            register={register}
            label="Contato"
            placeholder="Opção de contato"
            error={errors.contact?.message}
          />
          <span className="labelModulo">Selecionar módulo</span>
          <Select
            {...register("course_module")}
            name="course_module"
            type="select"
          >
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
          </Select>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
export default Signup;
