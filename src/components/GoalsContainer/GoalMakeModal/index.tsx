import styled from "@emotion/styled";
import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import useStore from "../../../store";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 50%;
  padding: 4rem;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const ModalTextField = styled(TextField)`
  width: 80%;
  margin-top: 1rem;
`;

const ModalNextVersionCheck = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  background-color: #00000036;
`;

const ModalMakeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalMakeButton = styled(Button)`
  background-color: #f31a1a;

  :hover {
    background-color: #ff4400;
  }
`;

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function GoalMakeModal({ open, handleClose }: Props) {
  const { GoalsState } = useStore();
  const [title, setTitle] = useState("");

  const handleCreate = () => {
    GoalsState.handleMakeNewList(title);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        <ModalTitle>Make new business.</ModalTitle>
        <ModalTextField
          onChange={({ target: { value } }) => setTitle(value)}
          label="Business Todo Title"
          variant="standard"
        />
        <ModalNextVersionCheck></ModalNextVersionCheck>
        <ModalMakeButtonContainer>
          <ModalMakeButton variant="contained" onClick={handleCreate}>
            Make
          </ModalMakeButton>
        </ModalMakeButtonContainer>
      </ModalContainer>
    </Modal>
  );
}
