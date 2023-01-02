import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import useStore from "../../../store";
import TodoMove from "../TodoMove";

const TotalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

function TodoTotalList() {
  const [open, setOpen] = useState(false);
  const { todosState } = useStore();
  const { activeDelete, havingTodoList, handleDeleteList, handleEnterTodo } =
    todosState;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePageMove = (id: number) => handleEnterTodo(id);

  return (
    <TotalContainer>
      {havingTodoList.map(({ id, date, title }) => {
        return (
          <TodoMove
            key={id}
            id={id}
            title={title}
            date={date}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleDelete={handleDeleteList}
            handlePageMove={handlePageMove}
            activeDelete={activeDelete}
          />
        );
      })}
    </TotalContainer>
  );
}

export default observer(TodoTotalList);
