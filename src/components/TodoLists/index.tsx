import styled from "@emotion/styled";
import TodoMaker from "./TodoMaker";
import TodoTotalList from "./TodoTotalList";
import useStore from "../../store";
import { observer } from "mobx-react-lite";
import ActiveDelete from "./ActiveDelete";
import { useEffect } from "react";

interface TotalContainerProps {
  entertodos: number;
}

const TotalContainer = styled.div<TotalContainerProps>`
  position: relative;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 1.2s;
  transform: ${({ entertodos }) => {
    return entertodos ? "translateX(-180%)" : "translate(0%)";
  }};
  z-index: 2;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #ea3232;
`;

function TodoContainer() {
  const { todosState } = useStore();
  const { enterTodos, havingTodoList, activeDelete, handleActiveDelete } =
    todosState;

  useEffect(() => {
    if (todosState.havingTodoList.length === 0) {
      todosState.handleActiveDeleteFalse();
    }
  }, [todosState.havingTodoList.length]);

  return (
    <TotalContainer entertodos={enterTodos}>
      <Title>MAKE YOUR OWN BUSINESS TO-DO LIST</Title>
      <TodoMaker />
      <ActiveDelete
        activeDelete={activeDelete}
        handleActiveDelete={handleActiveDelete}
        havingTodoList={havingTodoList}
      />
      <TodoTotalList />
    </TotalContainer>
  );
}

export default observer(TodoContainer);
