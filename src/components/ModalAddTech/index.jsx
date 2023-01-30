import Button from "./../Button";
import Input from "./../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../../services/api";
import { ContainerModal, ContainerSelect, Label, Modal } from "./styles";

const ModalAddTech = ({ setAddTech, token, updateList }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const add = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setAddTech(false);
        updateList();
        toast.success("Tecnologia cadastrada com sucesso!");
      })
      .catch((err) => toast.error("Está tecnologia já existe"));
  };

  return (
    <ContainerModal>
      <Modal>
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <Button onClick={() => setAddTech(false)}>X</Button>
        </header>
        <form onSubmit={handleSubmit(add)}>
          <Input
            label="Nome"
            register={register}
            name="title"
            error={errors.name?.message}
            placeholder="Tecnologia"
          />
          <div>
            <Label>Selecionar status</Label>
            <ContainerSelect>
              <select name="Selecionar status" {...register("status")}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </ContainerSelect>
          </div>

          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </Modal>
    </ContainerModal>
  );
};
export default ModalAddTech;
