import { useRef } from "react";
import Button from "../../../../components/Button";
import api from "../../../../services/api";
import { Container, Input, Label, StyledForm } from "./style";

function Form() {
  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const emailInput = useRef(null);

  async function addNewUser(e) {
    e.preventDefault();
    const data = await api.post("/users", {
      name: nameInput.current.value,
      age: Number.parseInt(ageInput.current.value),
      email: emailInput.current.value
    });

    console.log(data);
  }
  return (
    <StyledForm>
      <Container>
        <div>
          <Label htmlFor="name">
            Nome <span>*</span>
          </Label>
          <Input
            type="text"
            id={"name"}
            name={"name"}
            placeholder={"Nome do usuário"}
            ref={nameInput}
          />
        </div>
        <div>
          <Label htmlFor="age">
            Idade <span>*</span>
          </Label>
          <Input
            type="number"
            id={"age"}
            name={"age"}
            placeholder={"Idade do usuário"}
            ref={ageInput}
          />
        </div>
      </Container>
      <div>
        <Label htmlFor="email">
          E-mail <span>*</span>
        </Label>
        <Input
          type="email"
          id={"email"}
          name={"email"}
          placeholder={"E-mail do usuário"}
          ref={emailInput}
        />
      </div>
      <Button theme={"primary"} type={"submit"} onClick={addNewUser}>
        Cadastrar Usuário
      </Button>
    </StyledForm>
  );
}

export default Form;
