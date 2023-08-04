import {
  LoginRegisterContainer,
  PageContainer,
  StyledButton,
  StyledTextfield,
  StyledTitle,
  SwitchText,
  TextfieldContainer,
} from "./LoginRegister.styles";

const LoginRegister = () => {
  return (
    <PageContainer>
      <LoginRegisterContainer>
        <StyledTitle>Register!</StyledTitle>
        <TextfieldContainer>
          <StyledTextfield
            placeholder="Enter Name"
            name="name"
          ></StyledTextfield>
          <StyledTextfield
            placeholder="Enter Email Address"
            name="email"
          ></StyledTextfield>
          <StyledTextfield
            type="password"
            placeholder="Enter Password"
            name="password"
          ></StyledTextfield>
          <StyledTextfield
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          ></StyledTextfield>
          <StyledButton>Register</StyledButton>
        </TextfieldContainer>
      </LoginRegisterContainer>
    </PageContainer>
  );
};

export default LoginRegister;