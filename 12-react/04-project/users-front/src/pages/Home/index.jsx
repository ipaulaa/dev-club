import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Page } from "../../components/Page";
import { Title } from "../../components/Title";

import Form from "./components/Form";

function Home() {
  const navigate = useNavigate();
  return (
    <Page>
      <Header />
      <main>
        <Title>Cadastrar Usuário</Title>
        <Form />
        <Button type={"button"} onClick={() => navigate("/users")}>
          Listar Usuários
        </Button>
      </main>
    </Page>
  );
}

export default Home;
