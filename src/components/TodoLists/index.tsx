import styled from "@emotion/styled";
import TodoMaker from "./TodoMaker";
import TodoTotalList from "./TodoTotalList";
import useStore from "../../store";
import { observer } from "mobx-react-lite";
import ActiveDelete from "./ActiveDelete";

const TotalContainer = styled.div`
  position: relative;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #ea3232;
`;

function TodoContainer() {
  const { todosState, activeDeleteState } = useStore();
  const { havingTodoList } = todosState;
  const { handleActiveDelete } = activeDeleteState;

  const handlePageMove = () => {
    console.log("page move");
  };

  return (
    <TotalContainer>
      <Title>MAKE YOUR OWN BUSINESS TO-DO LIST</Title>
      <TodoMaker />
      <ActiveDelete
        handleActiveDelete={handleActiveDelete}
        havingTodoList={havingTodoList}
      />
      <TodoTotalList />
    </TotalContainer>
  );
}

export default observer(TodoContainer);
