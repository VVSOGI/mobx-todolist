import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { todosState } from "../../store/todos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { toJS } from "mobx";

interface TotalContainerProps {
  loading: boolean;
}

const TotalContainer = styled.div<TotalContainerProps>`
  position: fixed;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 1s;
  z-index: 1;
  opacity: ${({ loading }) => {
    return loading ? "100%" : "0%";
  }};
`;

const Title = styled.div`
  position: relative;
  padding: 1rem;
  padding-left: 2rem;
  border-bottom: 1px solid #00000066;
  font-size: 32px;
  font-weight: 600;
`;

const MoveBack = styled(ArrowBackIcon)`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  cursor: pointer;
  :hover {
    color: #ea3232;
  }
`;
function Todo() {
  const [loading, setLoading] = useState(false);
  const { enterTodos, choiceTodo, handleExitTodo } = todosState;

  useEffect(() => {
    if (enterTodos) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [enterTodos]);

  return (
    <TotalContainer loading={loading}>
      <Title>
        {choiceTodo?.title}

        <MoveBack onClick={handleExitTodo} />
      </Title>
    </TotalContainer>
  );
}

export default observer(Todo);
