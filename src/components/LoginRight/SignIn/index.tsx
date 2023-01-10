import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";

const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  color: #181818;
  margin-bottom: 1rem;
`;

const TextFieldCustom = styled(TextField)`
  margin-bottom: 1rem;
`;

const ButtonCustom = styled(Button)`
  margin-bottom: 1rem;
  height: 3rem;
`;

const OauthBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    margin: 0 1rem;
    cursor: pointer;
    :hover {
      transform: scale(0.9);
    }
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;

interface Props {
  checkAccess: boolean;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  handleChangeMode: (mode: boolean) => void;
  handleCheckSignIn: () => void;
}

export default function SignIn({
  checkAccess,
  setId,
  setPassword,
  handleChangeMode,
  handleCheckSignIn,
}: Props) {
  return (
    <>
      <Title>LOG IN</Title>
      <TextFieldCustom
        onChange={(e) => setId(e.target.value)}
        label="ID"
        variant="outlined"
      />
      <TextFieldCustom
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => {
          if (e.key !== "Enter") {
            return;
          }
          handleCheckSignIn();
        }}
        label="Password"
        type="password"
        variant="outlined"
      />
      {checkAccess ? (
        <Box sx={{ color: "red", fontSize: 12 }}>
          아이디 혹은 비밀번호가 틀렸습니다.
        </Box>
      ) : null}
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
        <ButtonCustom
          onClick={handleCheckSignIn}
          sx={{ backgroundColor: "#04b39c", color: "#fff" }}
        >
          LOGIN
        </ButtonCustom>
        <ButtonCustom
          onClick={() => handleChangeMode(true)}
          sx={{ border: "1px solid #0000001f" }}
        >
          SIGN UP
        </ButtonCustom>
      </Box>
      <OauthBox>
        <div>
          <img src="images/icon-google.png" alt="" />
        </div>
        <div>
          <img src="images/icon-facebook.png" alt="" />
        </div>
        <div>
          <img src="images/icon-github.png" alt="" />
        </div>
      </OauthBox>
    </>
  );
}
