import { useNavigate } from "react-router-dom";
import { login, getUserProfile } from "../api/auth";
import AuthForm from "../components/AuthForm";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);
      const userData = await getUserProfile(data.accessToken);
      setUser(userData);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("로그인 실패했어요!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-semibold">로그인을 해주세요!</h1>
      <AuthForm mode={"login"} onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
