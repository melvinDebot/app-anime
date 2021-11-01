import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";

// import components
import InputText from "../components/Input/index";
import Button from "../components/Button/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {}, [username]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      alert("Please enter big username");
      return;
    }
    axios({
      method: "POST",
      url: "https://easy-login-api.herokuapp.com/users/login",
      data: {
        username: username,
        password: password,
      },
    }).then((response) => {
      console.log(response.headers["x-access-token"]);
      localStorage.setItem("token", response.headers["x-access-token"]);
      history.push("/list");
    });
  };

  return (
    <StyledContainer>
      <StyledH1>My Anime</StyledH1>
      <StyledH3>Inscris toi pour séléctionnez ton anime 🤗</StyledH3>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>Email</StyledLabel>
        <InputText
          typeInput="email"
          placeholderInput="melvin@gmail.com"
          valueInput={username}
          onChangeInput={(e) => setUsername(e.target.value)}
          name="username"
          required
        />
        <StyledLabel>Password</StyledLabel>
        <InputText
          typeInput="password"
          valueInput={password}
          placeholderInput="...."
          name="password"
          required
          onChangeInput={(e) => setPassword(e.target.value)}
        />
        <Button buttonType="submit" />
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 20px;
  overflow: hidden;
`;

const StyledH1 = styled.h1`
  text-align: center;
  margin-top: 3.5em;
`;

const StyledH3 = styled.h3`
  text-align: center;
`;

const StyledLabel = styled.h4`
  margin-top: 4em;
  margin-bottom: 0px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: auto;
`;

export default Login;
