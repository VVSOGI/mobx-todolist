import styled from "@emotion/styled";
import TodoContainer from "/src/components/TodoLists";
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
      <TodoContainer />
      <Todo />
    </TotalContainer>
  );
}

export default Main;
