import styled from "@emotion/styled";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { GoalsState, GoalsType } from "../../store/goals";
import Title from "./Title";
import TodoMainContainer from "./TodoMainContainer";
import TodoSubContainer from "./TodoSubContainer";
import { TodoState } from "/src/store/todo";

interface TotalContainerProps {
  loading: boolean;
}

const TotalContainer = styled.div<TotalContainerProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
  transition: 1s;
  z-index: 1;
  opacity: ${({ loading }) => {
    return loading ? "100%" : "0%";
  }};
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface Props {
  token: string;
}

function Todo({ token }: Props) {
  const [loading, setLoading] = useState(false);
  const { enterGoal, choiceGoals, handleExitTodo } = GoalsState;
  const { todos, handleGetTodo, handleSetToken } = TodoState;

  useEffect(() => {
    if (enterGoal) {
      const { id } = choiceGoals as GoalsType;
      handleGetTodo(token, id);
      handleSetToken(token);
    }
  }, [choiceGoals, enterGoal]);

  useEffect(() => {
    const main = document.getElementById("main");
    main?.scrollTo({ top: main?.scrollHeight });
  }, [todos.length]);

  useEffect(() => {
    if (enterGoal) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [enterGoal]);

  return (
    <TotalContainer loading={loading}>
      <Title choiceGoals={choiceGoals} handleExitTodo={handleExitTodo} />
      <Main>
        <TodoMainContainer />
        <TodoSubContainer />
      </Main>
    </TotalContainer>
  );
}

export default observer(Todo);
