import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";
import { TodoState } from "/src/store/todo";
import { Colors } from "/src/types";

interface ColorProps {
  color?: string;
}

const TotalContainer = styled.div`
  flex: 1;
  max-width: 303px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

const ColorPickerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Circle = styled.div<ColorProps>`
  width: 30px;
  height: 30px;
  margin-right: 0.8rem;
  border-radius: 50%;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  background-color: ${({ color }) => (color ? color : "#ea3232")};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

function TodoSubContainer() {
  const { handleColorChange } = TodoState;

  const colors: Colors[] = [
    "#ea3232",
    "#ea7632",
    "#ffd500",
    "#229c2c",
    "#2159d1",
    "#8221d1",
  ];

  return (
    <TotalContainer>
      <ColorPickerBox>
        {colors.map((color) => {
          return (
            <Circle
              key={v4()}
              onClick={() => {
                handleColorChange(color);
              }}
              color={color}
            />
          );
        })}
      </ColorPickerBox>
    </TotalContainer>
  );
}

export default observer(TodoSubContainer);
