import styled from "@emotion/styled";
import useStore from "/src/store";
import { observer } from "mobx-react-lite";
import MakeTodo from "./MakeTodo";
import TodoContent from "./TodoContent";
import { ReactSortable } from "react-sortablejs";
import { forwardRef, useEffect, useState } from "react";
import { toJS } from "mobx";

const MainContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainContents = styled.div`
  position: relative;
  flex: 10;
  max-height: 100%;
  overflow: scroll;
`;

const CustomComponent = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <MainContents id="main" ref={ref}>
      {props.children}
    </MainContents>
  );
});

function TodoMainContainer() {
  const { TodoState } = useStore();
  const {
    todos,
    color,
    handleSetTodo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
  } = TodoState;
  const [todoList, setTodoList] = useState(toJS(todos));

  useEffect(() => {
    handleSetTodo(todoList);
  }, [todoList]);

  return (
    <MainContainer>
      <ReactSortable
        tag={CustomComponent}
        list={toJS(todos)}
        setList={handleSetTodo}
      >
        {todos.map((data) => {
          return (
            <TodoContent
              id={data.id}
              color={data.color || "#ea3232"}
              todoText={data.todoText}
              isCheckedTodo={data.isCheckedTodo}
              handleCheck={handleCheckTodo}
              handleDelete={handleDeleteTodo}
            />
          );
        })}
      </ReactSortable>
      <MakeTodo color={color} handleAddTodo={handleAddTodo} />
    </MainContainer>
  );
}

export default observer(TodoMainContainer);
