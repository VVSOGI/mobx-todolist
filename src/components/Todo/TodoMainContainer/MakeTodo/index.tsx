import styled from "@emotion/styled";
import React, { useState } from "react";
import { Colors, TodoContentType } from "/src/types";

interface LineProps {
  color?: Colors;
}

const InputForm = styled.form`
  flex: 1;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  input {
    width: 90%;
    height: 100%;
    padding: 1rem;
    border: none;
    outline: none;
  }

  button {
    width: 10%;
    height: 100%;
    border: none;
    outline: none;
    color: #fff;
    background-color: #ea3232;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    :active {
      transform: translateY(2px);
    }
  }
`;

const Line = styled.div<LineProps>`
  position: absolute;
  width: 5%;
  height: 3px;
  background-color: ${({ color }) => (color ? color : "#ea3232")};
`;

interface Props {
  color: Colors;
  enterGoal: number;
  handleAddTodo: (todoText: string, goalId: number, color: Colors) => void;
}

export default function MakeTodo({ color, enterGoal, handleAddTodo }: Props) {
  const [todo, setTodo] = useState("");

  return (
    <InputForm onClick={(e) => e.preventDefault()}>
      <Line color={color} />
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Post your to-do list here."
        value={todo}
      />
      <button
        onClick={() => {
          setTodo("");
          handleAddTodo(todo, enterGoal, color);
        }}
      >
        POST
      </button>
    </InputForm>
  );
}
