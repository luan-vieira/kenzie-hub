import { toast } from "react-toastify";

import Button from "./../Button";
import Input from "./../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "./../../services/api";
import {
  ContainerButtons,
  ContainerModal,
  ContainerSelect,
  Label,
  Modal,
} from "./styles";

const ModalEdit = ({ setEditAct, cardEditNow, token, updateList }) => {
  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const removeTech = () => {
    api
      .delete(`/users/techs/${cardEditNow.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setEditAct(false);
        updateList();
        toast.success("Tecnologia removida com sucesso!");
      })
      .catch((_) => toast.error("Falha ao tentar remover"));
  };

  const EditTech = (data) => {
    api
      .put(`/users/techs/${cardEditNow.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setEditAct(false);
        updateList();
        toast.success("Tecnologia atualizada com sucesso!");
      })
      .catch((_) => toast.error("Falha na atualização"));
  };

  return (
    <ContainerModal>
      <Modal>
        <header>
          <h2>Tecnologia Detalhes</h2>

          <Button type="button" onClick={() => setEditAct(false)}>
            X
          </Button>
        </header>
        <form onSubmit={handleSubmit(EditTech)}>
          <Input
            label="Nome do projeto"
            register={register}
            name="title"
            error={errors.name?.message}
            value={cardEditNow.title}
          />
          <div className="selectStatus">
            <Label>Selecionar status</Label>
            <ContainerSelect>
              <select name="Status" {...register("status")}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </ContainerSelect>
          </div>
          <ContainerButtons>
            <section>
              <Button type="submit">Salvar alterações</Button>
              <div>
                <Button type="button" onClick={removeTech}>
                  Excluir
                </Button>
              </div>
            </section>
          </ContainerButtons>
        </form>
      </Modal>
    </ContainerModal>
  );
};
export default ModalEdit;
