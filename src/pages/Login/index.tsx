import styled from "@emotion/styled";
import LoginRight from "/src/components/LoginRight";

const TotalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dce6;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 70rem;
  height: 40rem;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const LeftContainer = styled.div`
  flex: 2;
`;

const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Login() {
  return (
    <TotalContainer>
      <LoginContainer>
        <LeftContainer>
          <LeftImage src="images/login.jpg" alt="login" />
        </LeftContainer>
        <LoginRight />
      </LoginContainer>
    </TotalContainer>
  );
}
