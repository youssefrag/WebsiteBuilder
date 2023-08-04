import { useState } from "react";

import {
  LoginRegisterContainer,
  PageContainer,
  StyledButton,
  StyledTextfield,
  StyledTitle,
  SwitchContainer,
  SwitchText,
  TextfieldContainer,
} from "./LoginRegister.styles";

const LoginRegister = () => {
  const [page, setPage] = useState("register");

  const switchPage = () => {
    if (page === "login") {
      setPage("register");
    } else {
      setPage("login");
    }
  };

  if (page === "register") {
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
            <SwitchContainer>
              <SwitchText onClick={switchPage}>
                Already registered? Login
              </SwitchText>
            </SwitchContainer>
            <StyledButton>Register</StyledButton>
          </TextfieldContainer>
        </LoginRegisterContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <LoginRegisterContainer>
          <StyledTitle>Login!</StyledTitle>
          <TextfieldContainer>
            <StyledTextfield
              placeholder="Enter Email Address"
              name="email"
            ></StyledTextfield>
            <StyledTextfield
              type="password"
              placeholder="Enter Password"
              name="password"
            ></StyledTextfield>

            <SwitchContainer>
              <SwitchText onClick={switchPage}>New user? Register</SwitchText>
            </SwitchContainer>
            <StyledButton>Login</StyledButton>
          </TextfieldContainer>
        </LoginRegisterContainer>
      </PageContainer>
    );
  }
};

export default LoginRegister;
