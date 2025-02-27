import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, isAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="flex items-center justify-between gap-5 h-[60px] px-5">
        <Link to={"/"}>홈</Link>
        {isAuthenticated ? (
          <>
            <Link to={"/profile"}>프로필</Link>
            <Link to={"/test"}>테스트</Link>
            <Link to={"/testResult"}>테스트 결과 목록</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <div className="flex gap-3">
            <Link to={"/login"}>로그인</Link>
            <Link to={"/signUp"}>회원가입</Link>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
