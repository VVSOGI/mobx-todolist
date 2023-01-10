import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const MoveBackBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;

const MoveBack = styled(ArrowBackIcon)`
  transform: scale(0.8);
`;

const TextFieldCustom = styled(TextField)`
  margin-bottom: 1rem;
`;

const ButtonCustom = styled(Button)`
  margin-bottom: 1rem;
  height: 3rem;
`;

interface Props {
  errorMessage: string;
  setSignUpId: (value: string) => void;
  setSignUpEmail: (value: string) => void;
  setSignUpPassword: (value: string) => void;
  setSignUpDoubleCheck: (value: string) => void;
  handleChangeMode: (mode: boolean) => void;
  handleSignUp: () => void;
}

export default function SignUp({
  errorMessage,
  setSignUpId,
  setSignUpEmail,
  setSignUpPassword,
  setSignUpDoubleCheck,
  handleChangeMode,
  handleSignUp,
}: Props) {
  return (
    <>
      <MoveBackBox onClick={() => handleChangeMode(false)}>
        <MoveBack />
      </MoveBackBox>
      <Box sx={{ fontSize: 24, fontWeight: 700, marginBottom: "1rem" }}>
        Sign Up
      </Box>
      <TextFieldCustom
        onChange={(e) => setSignUpId(e.target.value)}
        label="ID"
        variant="outlined"
      />
      <TextFieldCustom
        onChange={(e) => setSignUpEmail(e.target.value)}
        label="Email"
        variant="outlined"
      />
      <TextFieldCustom
        onChange={(e) => setSignUpPassword(e.target.value)}
        label="Password"
        variant="outlined"
        type="password"
      />
      <TextFieldCustom
        onChange={(e) => setSignUpDoubleCheck(e.target.value)}
        label="Double Check Password"
        variant="outlined"
        type="password"
      />
      <Box
        sx={{
          color: "red",
          textAlign: "center",
          fontSize: 14,
          marginBottom: "1rem",
        }}
      >
        {errorMessage}
      </Box>
      <ButtonCustom
        onClick={handleSignUp}
        sx={{ border: "1px solid #0000001f" }}
      >
        SIGN UP
      </ButtonCustom>
    </>
  );
}
