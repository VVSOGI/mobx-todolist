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
  const { todosState } = useStore();

  return (
    <TotalContainer>
      <TodoMove id={1} title="choose me plz" date="2022.10.29" />
      {todosState.havingTodoList.map(({ id, date, title }) => {
        return <TodoMove key={id} id={id} title={title} date={date} />;
      })}
    </TotalContainer>
  );
}

export default observer(TodoTotalList);
