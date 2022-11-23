import styled from "@emotion/styled";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import useStore from "../../../store";
import TodoMaker from "../TodoMaker";
import TodoTotalList from "../TodoTotalList";

const TotalContainer = styled.div`
  position: relative;
  width: 50%;
  height: 70%;
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
  const { todosState } = useStore();

  const handlePageMove = () => {
    console.log("page move");
  };

  useEffect(() => {
    todosState.handleMakeNewList({
      id: 2,
      date: "2022.11.23",
      title: "testing",
    });
    console.log(toJS(todosState.havingTodoList));
  }, []);

  return (
    <TotalContainer>
      <Title>MAKE YOUR OWN BUSINESS TO-DO LIST</Title>
      <TodoMaker />
      <TodoTotalList />
    </TotalContainer>
  );
}

export default observer(TodoContainer);
