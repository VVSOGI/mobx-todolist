import styled from "@emotion/styled";
import { Button, Modal } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TodoList } from "../../../store/todos";

interface MoveTodoPageProps {
  activedelete: boolean;
}

const MoveTodoPage = styled(Button)<MoveTodoPageProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.4rem;
  margin-bottom: 0.4rem;
  border-bottom: 1px solid #00000039;
  border-radius: 0;
  color: #000000a1;
  :hover {
    background-color: ${({ activedelete }) => {
      return activedelete ? "#ff080839" : null;
    }};
  }
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

const ModalContainer = styled.div`
  position: absolute;
  width: 30%;
  height: 25%;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

const ModalSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    margin-top: 1rem;
  }
`;

interface Props {
  id: number;
  title: string;
  date: string;
  activeDelete: boolean;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleDelete: (id: number) => TodoList[];
  handlePageMove: (id: number) => number;
}

function TodoMove({
  id,
  title,
  date,
  activeDelete,
  open,
  handleOpen,
  handleClose,
  handleDelete,
  handlePageMove,
}: Props) {
  return (
    <>
      <MoveTodoPage
        onClick={() => {
          activeDelete ? handleOpen() : handlePageMove(id);
        }}
        activedelete={activeDelete}
      >
        {title}
        <MoveTodoPageDate>
          <span id="lastFixed">최종 수정일</span>
          <span id="date">{date}</span>
        </MoveTodoPageDate>
      </MoveTodoPage>
      {activeDelete ? (
        <Modal open={open} onClose={handleClose}>
          <ModalContainer>
            <ModalSpan>
              <span style={{ color: "red" }}>{title} </span>
              투두 리스트를 삭제하시겠습니까?
              <br />
              삭제된 데이터는 복구할 수 없습니다.
            </ModalSpan>
            <ButtonContainer>
              <Button
                onClick={() => {
                  handleClose();
                  handleDelete(id);
                }}
                sx={{ backgroundColor: "#ea3232f6" }}
                variant="contained"
              >
                삭제하기
              </Button>
            </ButtonContainer>
          </ModalContainer>
        </Modal>
      ) : null}
    </>
  );
}

export default observer(TodoMove);
