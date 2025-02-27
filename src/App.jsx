import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import { useState } from "react";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  return (
    <Layout isAuthenticated={isAuthenticated} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile user={user} />}></Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
