import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import LoginRegister from "./routes/login-register/LoginRegister.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
