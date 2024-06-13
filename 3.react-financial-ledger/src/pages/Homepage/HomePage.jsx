import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../apis/auth";
import AccountForm from "../../components/Account/AccountForm";
import AccountList from "../../components/Account/AccountList";
import AccountSelector from "../../components/Account/AccountSelector";
import Layout from "../../components/Layout";
import Navbar from "../../components/Layout/Navbar";
import { login, logout } from "../../redux/slices/authSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo && userInfo.success) {
          dispatch(login(userInfo));
        } else {
          dispatch(logout());
          localStorage.clear();
          navigate("/auth/signin");
        }
      } catch (error) {
        console.error("유저 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, [dispatch, navigate]);

  return (
    <>
      <Navbar />
      <Layout>
        <AccountForm />
        <AccountSelector />
        <AccountList />
      </Layout>
    </>
  );
};

export default HomePage;
