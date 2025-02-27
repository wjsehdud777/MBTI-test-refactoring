import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패했어요!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
    <h1 className="text-2xl font-semibold">회원가입을 해주세요!</h1>
    <AuthForm mode={"signup"} onSubmit={handleSignUp} />
  </div>
  
  );
};

export default SignUp;
