import styled from "@emotion/styled";
import GoalsContainer from "../../components/GoalsContainer";
import Todo from "/src/components/Todo";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dce6;
`;

function Main() {
  return (
    <TotalContainer>
      <GoalsContainer />
      <Todo />
    </TotalContainer>
  );
}

export default Main;
