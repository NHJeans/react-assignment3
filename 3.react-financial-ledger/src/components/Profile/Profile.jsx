import { useSelector } from "react-redux";
import { ProfileWrapper, UserAvatar, UserName } from "./style";

const Profile = () => {
  const user = useSelector((state) => state.auth);

  return (
    user &&
    user.isLogin && (
      <ProfileWrapper to="/profile">
        <UserAvatar src={user.avatar} alt="user-avatar" />
        <UserName>{user.nickname}</UserName>
      </ProfileWrapper>
    )
  );
};

export default Profile;
