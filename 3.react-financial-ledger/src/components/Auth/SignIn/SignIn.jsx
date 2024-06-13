import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  InputWrapper,
  Label,
  Input,
  Button,
  ToggleButton,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/authSlice";
import { signIn } from "../../../apis/auth";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.isLogin) {
      console.log("로그인된 유저 정보:");
      console.log("유저 ID:", user.userId);
      console.log("닉네임:", user.nickname);
      console.log("아바타:", user.avatar);
      console.log("액세스 토큰:", user.accessToken);
    }
  }, [user]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = await signIn({ id, password });
    const { accessToken, avatar, nickname, userId, success } = data;
    if (success) {
      alert("로그인 성공");
      localStorage.setItem("accessToken", accessToken);
      dispatch(login({ accessToken, avatar, nickname, userId }));
      console.log("로그인 상태 업데이트:", {
        accessToken,
        avatar,
        nickname,
        userId,
      });
      navigate("/");
    }
  };
  return (
    <Container onSubmit={handleSignIn}>
      <InputWrapper>
        <Label>아이디:</Label>
        <Input
          type="text"
          value={id}
          placeholder="아이디를 입력하세요"
          onChange={(e) => setId(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호:</Label>
        <Input
          type="password"
          value={password}
          placeholder="최소 6자리 이상 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Button type="submit">로그인</Button>
      <ToggleButton
        type="button"
        onClick={() => {
          navigate("/auth/signup");
        }}
      >
        회원가입
      </ToggleButton>
    </Container>
  );
};

export default SignIn;
