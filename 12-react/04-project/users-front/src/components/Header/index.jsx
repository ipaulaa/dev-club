import UsersBanner from "../../assets/users.png";
import { StyledHeader } from "./style";

function Header() {
  return (
    <StyledHeader>
      <img src={UsersBanner} alt={"Banner de Usuários"} />
    </StyledHeader>
  );
}

export default Header;
