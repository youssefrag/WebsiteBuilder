import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectUser } from "./store/user/userSlice";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import LoginRegister from "./routes/login-register/LoginRegister.component";
import Websites from "./routes/websites/websites.component";

function App() {
  const currentUser = useSelector(selectUser);

  console.log(currentUser);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route
          path="/websites"
          element={currentUser ? <Websites /> : <LoginRegister />}
        />
      </Route>
    </Routes>
  );
}

export default App;
