import styled from "@emotion/styled";
import GoalMaker from "./GoalMaker";
import Goals from "./Goals";
import useStore from "../../store";
import { observer } from "mobx-react-lite";
import ActiveDelete from "./ActiveDelete";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "/src/utils/cookies";

interface TotalContainerProps {
  enterGoal: number;
}

const TotalContainer = styled.div<TotalContainerProps>`
  position: relative;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 1.2s;
  transform: ${({ enterGoal }) => {
    return enterGoal ? "translateX(-180%)" : "translate(0%)";
  }};
  z-index: 2;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #ea3232;
`;

function GoalsContainer() {
  const { GoalsState } = useStore();
  const {
    enterGoal,
    goals,
    activeDelete,
    token,
    handleGetGoals,
    handleActiveDelete,
    handleSetToken,
  } = GoalsState;

  const navigate = useNavigate();

  useEffect(() => {
    if (GoalsState.goals.length === 0) {
      GoalsState.handleActiveDeleteDisabled();
    }
  }, [GoalsState.goals.length]);

  useEffect(() => {
    if (!token) {
      const token = getCookie("accessToken");
      handleSetToken(token);
      return;
    }

    (async () => {
      const result = (await handleGetGoals()) as any;
      if (result.response.status === 401) {
        navigate("/");
      }
    })();
  }, [token]);

  if (!token) {
    <>...loading</>;
  }

  return (
    <TotalContainer enterGoal={enterGoal}>
      <Title>MAKE YOUR OWN BUSINESS TO-DO LIST</Title>
      <GoalMaker />
      <ActiveDelete
        activeDelete={activeDelete}
        handleActiveDelete={handleActiveDelete}
        havingGoals={goals}
      />
      <Goals />
    </TotalContainer>
  );
}

export default observer(GoalsContainer);
