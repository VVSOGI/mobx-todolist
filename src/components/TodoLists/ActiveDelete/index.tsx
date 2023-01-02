import React from "react";
import { TodoList } from "../../../store/todos";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

const DeleteActive = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  svg {
    cursor: pointer;
    :hover {
      color: #ea3232;
    }
    :active {
      color: #990a0a;
    }
  }
`;

interface Props {
  havingTodoList: TodoList[];
  handleActiveDelete: () => boolean;
}

function ActiveDelete({ handleActiveDelete, havingTodoList }: Props) {
  return (
    <>
      {havingTodoList.length > 0 ? (
        <DeleteActive onClick={() => handleActiveDelete()}>
          <DeleteIcon />
        </DeleteActive>
      ) : null}
    </>
  );
}

export default observer(ActiveDelete);
