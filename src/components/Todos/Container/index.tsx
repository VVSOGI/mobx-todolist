import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import TodoMaker from "../TodoMaker";
import TodoTotalList from "../TodoTotalList";

const TotalContainer = styled.div`
  position: relative;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #ea3232;
`;

export default function TodoContainer() {
  const handlePageMove = () => {
    console.log("page move");
  };

  useEffect(() => {}, []);

  return (
    <TotalContainer>
      <Title>MAKE YOUR OWN BUSINESS TO-DO LIST</Title>
      <TodoMaker />
      <TodoTotalList />
    </TotalContainer>
  );
}
