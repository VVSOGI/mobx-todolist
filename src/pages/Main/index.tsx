import styled from "@emotion/styled";
import { useState } from "react";
import GoalsContainer from "../../components/GoalsContainer";
import Todo from "/src/components/Todo";
import { getCookie } from "/src/utils/cookies";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dce6;
`;

function Main() {
  const [token, setToken] = useState(getCookie("accessToken"));

  return (
    <TotalContainer>
      <GoalsContainer />
      <Todo token={token} />
    </TotalContainer>
  );
}

export default Main;
