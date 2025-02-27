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
            <Link to={"/"}>프로필</Link>
            <Link to={"/"}>테스트</Link>
            <Link to={"/"}>테스트 결과 목록</Link>
            <Link to={"/"}>로그아웃</Link>
          </>
        ) : (
          <div className="flex gap-3">
            <Link to={"/"}>로그인</Link>
            <Link to={"/"}>회원가입</Link>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
