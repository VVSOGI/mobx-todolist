import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import { TodoList } from "../../../store/todos";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

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
  activeDelete: boolean;
  havingTodoList: TodoList[];
  handleActiveDelete: () => boolean;
}

function ActiveDelete({
  activeDelete,
  handleActiveDelete,
  havingTodoList,
}: Props) {
  return (
    <>
      {havingTodoList.length > 0 ? (
        <DeleteActive onClick={() => handleActiveDelete()}>
          {!activeDelete ? <DeleteIcon /> : <CheckIcon />}
        </DeleteActive>
      ) : null}
    </>
  );
}

export default observer(ActiveDelete);
