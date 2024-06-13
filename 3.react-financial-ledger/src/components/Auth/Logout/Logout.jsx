import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/authSlice";
import { StLogout } from "./style";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/auth/signin");
  };

  return <StLogout onClick={handleLogout}>로그아웃</StLogout>;
};

export default Logout;
