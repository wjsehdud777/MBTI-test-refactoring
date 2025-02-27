import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/profile" element={<Profile user={user} />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
