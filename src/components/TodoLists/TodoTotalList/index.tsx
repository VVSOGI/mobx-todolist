import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import useStore from "../../../store";
import TodoMove from "../TodoMove";

const TotalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

function TodoTotalList() {
  const { todosState, activeDeleteState } = useStore();
  const { havingTodoList } = todosState;
  const { activeDelete } = activeDeleteState;

  return (
    <TotalContainer>
      {havingTodoList.map(({ id, date, title }) => {
        return (
          <TodoMove
            key={id}
            id={id}
            title={title}
            date={date}
            activeDelete={activeDelete}
          />
        );
      })}
    </TotalContainer>
  );
}

export default observer(TodoTotalList);
