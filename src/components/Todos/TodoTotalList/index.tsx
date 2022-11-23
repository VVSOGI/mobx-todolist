import styled from "@emotion/styled";
import TodoMove from "../TodoMove";

const TotalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export default function TodoTotalList() {
  return (
    <TotalContainer>
      <TodoMove id={1} title="choose me plz" date="2022.10.29" />
    </TotalContainer>
  );
}
