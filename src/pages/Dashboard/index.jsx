import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";

import Header from "../../components/Header";
import HeaderTop from "../../components/headerTop";
import ListTechs from "../../components/ListTechs";
import ModalAddTech from "../../components/ModalAddTech";
import ModalEdit from "../../components/ModalEdit";
import api from "../../services/api";
import { Container, ContainerAddTech } from "./styles";

function Dashboard({ setAuthenticated, authenticated }) {
  const [infosUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [techList, setTechList] = useState(infosUser.techs);
  const [addTech, setAddTech] = useState(false);
  const [editAct, setEditAct] = useState(false);
  const [cardEditNow, setCardEditNow] = useState();

  const addNewTech = () => {
    setAddTech(true);
  };

  const updateList = () => {
    api
      .get(`https://kenziehub.herokuapp.com/users/${infosUser.id}`)
      .then((res) => {
        setTechList(res.data.techs);
      });
  };

  const editTech = (id) => {
    const edit = techList.find((tech) => tech.id === id);
    setEditAct(true);
    setCardEditNow(edit);
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <HeaderTop setAuthenticated={setAuthenticated} />
        <Header userName={infosUser.name} module={infosUser.course_module} />
        <ContainerAddTech>
          <h2>Tecnologias</h2>
          <Button onClick={addNewTech}>+</Button>
        </ContainerAddTech>

        <ListTechs
          infosUser={infosUser}
          techList={techList}
          editTech={editTech}
        />
        {addTech && (
          <ModalAddTech
            setAddTech={setAddTech}
            token={token}
            infosUser={infosUser}
            updateList={updateList}
          />
        )}
        {editAct && (
          <ModalEdit
            setEditAct={setEditAct}
            cardEditNow={cardEditNow}
            token={token}
            updateList={updateList}
          />
        )}
      </Container>
    </>
  );
}
export default Dashboard;
