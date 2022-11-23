import styled from "@emotion/styled";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { toJS } from "mobx";
import { useEffect } from "react";
import useStore from "../../../store";

const MoveTodoPage = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.4rem;
  margin-bottom: 0.4rem;
  border-bottom: 1px solid #00000039;
  border-radius: 0;
  color: #000000a1;
`;

const MoveTodoPageDate = styled.div`
  #lastFixed {
    font-size: 10px;
    font-weight: 600;
    margin-right: 0.5rem;
  }
  #date {
    font-size: 12px;
    font-weight: 500;
    color: #ea3232f6;
  }
`;

interface Props {
  id: number;
  title: string;
  date: string;
}

export default function TodoMove({ id, title, date }: Props) {
  const { todosState } = useStore();

  const handleClick = () => {
    todosState.handleMakeNewList("다운 풀 블루");
  };

  useEffect(() => {
    console.log(toJS(todosState.havingTodoList));
  }, [todosState.havingTodoList]);

  return (
    <MoveTodoPage onClick={handleClick}>
      {title}
      <MoveTodoPageDate>
        <span id="lastFixed">최종 수정일</span>
        <span id="date">{date}</span>
      </MoveTodoPageDate>
    </MoveTodoPage>
  );
}
