import { StyledButton } from "./style";

function Button({ children, theme, ...props }) {
  return (
    <StyledButton $primary={theme === "primary"} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
