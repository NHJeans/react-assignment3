import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import { useSelector } from "react-redux";

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? element : <Navigate to="/auth/signin" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/detail/:id"
        element={<PrivateRoute element={<DetailPage />} />}
      />
      <Route
        path="/auth/signin"
        element={<PublicRoute element={<Signin />} />}
      />
      <Route
        path="/auth/signup"
        element={<PublicRoute element={<SignUp />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
