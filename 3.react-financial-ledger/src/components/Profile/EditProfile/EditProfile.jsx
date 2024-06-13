import { styled } from "styled-components";
import { useState } from "react";
import { updateProfile } from "../../../apis/auth";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      const updatedUser = await updateProfile(formData);
      console.log("업데이트된 유저 정보:", updatedUser);
      alert("프로필이 성공적으로 업데이트되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생:", error);
    }
  };
  return (
    <Container>
      <Title>프로필 수정</Title>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar">프로필 이미지</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
        />
      </InputGroup>
      <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
    </Container>
  );
};

export default EditProfile;

export const Title = styled.h2`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  & input {
    width: 95%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #7ab2b2;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: #7ab2b2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #5f8a8a;
  }
`;
