import Trash from "../../../../assets/trash.svg";
import { Avatar, ListItem, TrashIcon } from "./style";

function UserCard({ id, name, age, email, deleteUser }) {
  return (
    <ListItem>
      <Avatar
        src={`https://avatar.iran.liara.run/public?username=${name}`}
        alt={`Avatar de ${name}`}
      />
      <div>
        <h2>
          <strong>{name}</strong>, {age}
        </h2>
        <p>{email}</p>
      </div>
      <TrashIcon
        onClick={() => deleteUser(id)}
        src={Trash}
        alt={"Ícone de Lixo"}
      />
    </ListItem>
  );
}

export default UserCard;
