import { Container, InputContainer } from "./styles";

function Input({ label, icon: Icon, register, name, error, ...rest }) {
  return (
    <Container>
      <div>
        <span className="label">{label}</span>
        {!!error && <span className="error"> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
export default Input;
