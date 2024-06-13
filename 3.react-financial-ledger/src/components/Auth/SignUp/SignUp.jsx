import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../apis/auth";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4자 이상 10자 이하로 입력해주세요.");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4자 이상 15자 이하로 입력해주세요.");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1자 이상 10자 이하로 입력해주세요.");
      return;
    }
    const data = await signUp({ id, nickname, password });
    if (data.success) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/auth/signin");
    }
  };

  return (
    <Container onSubmit={handleSignUp}>
      <InputWrapper>
        <Label>아이디:</Label>
        <Input
          type="text"
          value={id}
          placeholder="아이디를 입력하세요."
          onChange={(e) => setId(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임:</Label>
        <Input
          type="text"
          value={nickname}
          placeholder="닉네임을 입력하세요."
          onChange={(e) => setNickname(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호:</Label>
        <Input
          type="password"
          value={password}
          placeholder="최소 6자리 이상 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호 확인:</Label>
        <Input
          type="password"
          value={passwordCheck}
          placeholder="비밀번호 재입력"
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
      </InputWrapper>
      <Button onClick={handleSignUp}>회원가입</Button>
      <ToggleButton
        onClick={() => {
          navigate("/auth/signin");
        }}
      >
        돌아가기
      </ToggleButton>
    </Container>
  );
};

export default SignUp;

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: block;
  padding-left: 30px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 30px;
  border: none;
  background-color: #efefef;
  border-radius: 50px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a0d2cf;
  }
`;
export const Button = styled.button`
  background-color: #a0d2cf;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2cap;
  &:hover {
    background-color: #8cb9b5;
  }
`;
export const ToggleButton = styled.button`
  background-color: #97aba9;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  width: 100%;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2cap;
  &:hover {
    background-color: #798281;
  }
`;
