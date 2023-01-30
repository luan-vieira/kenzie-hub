import Card from "../Card";
import { ContainerListCards, CardClean, ContainerPai } from "./styles";

const ListTechs = ({ infosUser, techList, editTech }) => {
  return (
    <ContainerPai>
      {techList.length > 0 ? (
        <ContainerListCards>
          {techList.map((tech, index) => {
            return (
              <Card
                key={index}
                id={tech.id}
                nameTech={tech.title}
                levelTech={tech.status}
                editTech={editTech}
              />
            );
          })}
        </ContainerListCards>
      ) : (
        <CardClean>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </CardClean>
      )}
    </ContainerPai>
  );
};
export default ListTechs;
