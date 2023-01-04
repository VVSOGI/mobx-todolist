import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import { TodoList } from "../../../store/todos";

const TotalContainer = styled.div`
  position: relative;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 32px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0px 8px 6px -7px rgba(0, 0, 0, 0.2);
`;

const MoveBackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    background-color: #f8f8f8;
  }
  :active {
    transform: translateY(-50%) scale(0.9);
  }
`;

const MoveBack = styled(ArrowBackIcon)`
  width: 20px;
  height: 20px;
`;

const CreationDate = styled.span`
  margin-left: 1rem;
  font-size: 14px;
  font-weight: 400;
  color: #a82b2b;
`;

interface Props {
  choiceTodo: TodoList | undefined;
  handleExitTodo: () => number;
}

export default function Title({ choiceTodo, handleExitTodo }: Props) {
  return (
    <TotalContainer>
      {choiceTodo?.title}
      <CreationDate>{choiceTodo?.date}</CreationDate>
      <MoveBackContainer onClick={handleExitTodo}>
        <MoveBack />
      </MoveBackContainer>
    </TotalContainer>
  );
}
