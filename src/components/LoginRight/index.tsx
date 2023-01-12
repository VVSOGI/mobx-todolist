import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UsersState } from "/src/store/users";

const RightContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

function LoginRight() {
  const { handleCheckToken, handleUserSignIn, handleUserSignUp } = UsersState;

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkAccess, setCheckAccess] = useState(false);
  const [changeMode, setChangeMode] = useState(false);

  const [signUpId, setSignUpId] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpDoubleCheck, setSignUpDoubleCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleCheckSignIn = async () => {
    const result = await handleUserSignIn(id, password);

    if (result) {
      navigate("/main");
    } else {
      setCheckAccess(true);
    }
  };

  const handleChangeMode = (mode: boolean) => {
    setChangeMode(mode);
  };

  const handleSignUp = async () => {
    const data = await handleUserSignUp(
      signUpEmail,
      signUpId,
      signUpPassword,
      signUpDoubleCheck
    );
    if (typeof data === "boolean") {
      navigate("/main");
    } else {
      setErrorMessage(data.response.data.message);
    }
  };

  useEffect(() => {
    handleCheckToken(navigate);
  }, []);

  useEffect(() => {
    if (checkAccess) {
      const timeout = setTimeout(() => {
        setCheckAccess(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }

    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [checkAccess, errorMessage]);

  return (
    <RightContainer>
      {changeMode ? (
        <SignUp
          errorMessage={errorMessage}
          setSignUpId={setSignUpId}
          setSignUpEmail={setSignUpEmail}
          setSignUpPassword={setSignUpPassword}
          setSignUpDoubleCheck={setSignUpDoubleCheck}
          handleChangeMode={handleChangeMode}
          handleSignUp={handleSignUp}
        />
      ) : (
        <SignIn
          checkAccess={checkAccess}
          setId={setId}
          setPassword={setPassword}
          handleChangeMode={handleChangeMode}
          handleCheckSignIn={handleCheckSignIn}
        />
      )}
    </RightContainer>
  );
}

export default observer(LoginRight);
