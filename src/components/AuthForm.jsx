import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          className="p-3 rounded-md border border-gray-300 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디를 입력해주세요."
          required
        />
        <input
          className="p-3 rounded-md border border-gray-300 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력해주세요."
          required
        />
        {mode === "signup" && (
          <input
            className="p-3 rounded-md border border-gray-300 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
            required
          />
        )}
        <button
          type="submit"
          className="mt-4 p-3 rounded-md bg-red-400 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {mode === "signup" ? "회원가입" : "로그인"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
