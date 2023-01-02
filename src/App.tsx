import styled from "@emotion/styled";
import TodoContainer from "./components/TodoLists";
import Todo from "./components/Todo";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dce6;
`;

function App() {
  return (
    <AppContainer>
      <TodoContainer />
      {/* <Todo /> */}
    </AppContainer>
  );
}

export default App;
