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

import { LoginData, RegisterData } from "./LoginRegister.types";

const LoginRegister = () => {
  const [page, setPage] = useState("register");

  const switchPage = () => {
    if (page === "login") {
      setPage("register");
    } else {
      setPage("login");
    }
  };

  // Handle register data

  const [userRegister, setUserRegister] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    const name = element.name;
    setUserRegister((prev) => ({ ...userRegister, [name]: value || "" }));
  };

  const handleRegisterSubmit = async () => {
    const { name, email, password, confirmPassword } = userRegister;
    if (!name || !email || !password || !confirmPassword) {
      alert("Missing field");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords not matching");
      return;
    }
    let response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegister),
    });
    let result = await response.json();
    console.log(result);
  };

  // Handle login data

  const [userLogin, setUserLogin] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    const name = element.name;
    setUserLogin((prev) => ({ ...userLogin, [name]: value || "" }));
  };

  if (page === "register") {
    return (
      <PageContainer>
        <LoginRegisterContainer>
          <StyledTitle>Register!</StyledTitle>
          <TextfieldContainer>
            <StyledTextfield
              required
              placeholder="Enter Name"
              name="name"
              onChange={handleRegisterChange}
            ></StyledTextfield>
            <StyledTextfield
              required
              placeholder="Enter Email Address"
              name="email"
              onChange={handleRegisterChange}
            ></StyledTextfield>
            <StyledTextfield
              required
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleRegisterChange}
            ></StyledTextfield>
            <StyledTextfield
              required
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleRegisterChange}
            ></StyledTextfield>
            <SwitchContainer>
              <SwitchText onClick={switchPage}>
                Already registered? Login
              </SwitchText>
            </SwitchContainer>
            <StyledButton onClick={handleRegisterSubmit}>Register</StyledButton>
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
              required
              placeholder="Enter Email Address"
              name="email"
              onChange={handleLoginChange}
            ></StyledTextfield>
            <StyledTextfield
              required
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleLoginChange}
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
