import styled from "@emotion/styled";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TotalContainer = styled(Button)`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-color: #6d6d6da9;
  color: #21212171;

  :hover {
    background-color: transparent;
    border-color: #986c5fb8;
    color: #f9754db9;
    svg {
      color: #f9754db9;
      transform: rotateZ(-180deg);
    }
  }
`;

const Icon = styled(AddIcon)`
  transition: 0.2s;
  color: #212121d4;
  transform: rotateZ(0deg);
`;

export default function TodoMaker() {
  return (
    <TotalContainer variant="outlined">
      Make Business
      <Icon></Icon>
    </TotalContainer>
  );
}
