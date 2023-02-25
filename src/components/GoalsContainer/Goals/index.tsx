import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import useStore from "../../../store";
import TodoMove from "./TodoMove";

const TotalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

function Goals() {
  const { GoalsState } = useStore();
  const { activeDelete, goals, handleDeleteList, handleEnterTodo } = GoalsState;

  const handlePageMove = (id: number) => handleEnterTodo(id);

  return (
    <TotalContainer>
      {goals.map(({ id, goal_date, goal_title }) => {
        return (
          <TodoMove
            key={id}
            id={id}
            title={goal_title}
            date={goal_date}
            handleDelete={handleDeleteList}
            handlePageMove={handlePageMove}
            activeDelete={activeDelete}
          />
        );
      })}
    </TotalContainer>
  );
}

export default observer(Goals);
