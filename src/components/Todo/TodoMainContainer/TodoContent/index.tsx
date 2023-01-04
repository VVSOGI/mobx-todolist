import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Colors } from "/src/types";

interface TotalContainerProps {
  loading?: boolean;
}

interface LineProps {
  isChecked?: boolean;
}

interface ColorProps {
  color?: Colors;
}

const TotalContainer = styled.div<TotalContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100% - 1rem;
  height: 10% - 1rem;
  padding: 0.8rem 1rem;
  margin: 0.2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  opacity: ${({ loading }) => {
    return loading ? "0" : "1";
  }};
  transition: 1s;
  overflow: hidden;
`;

const Line = styled.div<LineProps>`
  position: absolute;
  width: ${({ isChecked }) => {
    return isChecked ? "80%" : "0%";
  }};
  height: 2px;
  margin-left: 1rem;
  background-color: #ea3232;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div<ColorProps>`
  width: 8px;
  height: 8px;
  margin-right: 0.8rem;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "#ea3232")};
`;

const TodoText = styled.span``;

const Check = styled(CheckIcon)`
  transform: scale(1.2);
  cursor: pointer;
  :hover {
    color: #ea3232;
  }
  :active {
    transform: scale(1);
  }
  margin-right: 1rem;
`;

const Delete = styled(DeleteIcon)`
  transform: scale(1.2);
  cursor: pointer;
  :hover {
    color: #ea3232;
  }
  :active {
    transform: scale(1);
  }
`;

interface Props {
  id: number | string;
  color: Colors;
  todoText: string;
  isCheckedTodo: boolean;
  handleCheck: (id: number | string) => void;
  handleDelete: (id: number | string) => void;
}

export default function TodoContent({
  id,
  color,
  todoText,
  isCheckedTodo,
  handleCheck,
  handleDelete,
}: Props) {
  const [loading, setLoading] = useState(true);

  const handleTodoCheck = () => {
    handleCheck(id);
  };

  useEffect(() => {
    if (id) {
      setLoading(false);
    }
  }, []);

  return (
    <TotalContainer loading={loading}>
      <Line isChecked={isCheckedTodo} />
      <Content>
        <Circle color={color}></Circle>
        <TodoText>{todoText}</TodoText>
      </Content>
      <Box>
        <Check onClick={handleTodoCheck} />
        <Delete
          onClick={() => {
            handleDelete(id);
          }}
        />
      </Box>
    </TotalContainer>
  );
}
