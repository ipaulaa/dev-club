import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";
import api from "../../services/api";
import UserCard from "./components/UserCard";
import { UserCards } from "./style";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }

    getUsers();
  }, []);

  async function deleteUser(userId) {
    await api.delete(`/users/${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  }
  return (
    <Page>
      <Header />
      <main>
        <Title>Listagem de Usuários</Title>
        <UserCards>
          {users.map(user => (
            <UserCard key={user.id} {...user} deleteUser={deleteUser} />
          ))}
        </UserCards>
        <Button type={"button"} onClick={() => navigate("/")}>
          Voltar
        </Button>
      </main>
    </Page>
  );
}

export default UserList;
