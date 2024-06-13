import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo();
        if (res) {
          dispatch(login(res));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  console.log("현재 로그인된 유저 정보1:", user);

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
