import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectUser } from "./store/user/userSlice";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import LoginRegister from "./routes/login-register/login-register.component";
import Websites from "./routes/websites/websites.component";
import Playground from "./routes/playground/playground.component";
import Preview from "./routes/preview/preview.component";

function App() {
  const [preview, setPreview] = useState(false);

  const currentUser = useSelector(selectUser);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/preview") {
      setPreview(true);
    }
  }, [preview]);

  return (
    <>
      {preview && <Preview />}
      {preview === false && (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route
              path="/websites"
              element={currentUser ? <Websites /> : <LoginRegister />}
            />
            <Route path="/playground" element={<Playground />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
