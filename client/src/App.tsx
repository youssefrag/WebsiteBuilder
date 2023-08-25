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
import EditSite from "./routes/edit-site/edit-site.component";

function App() {
  const [preview, setPreview] = useState(false);

  const currentUser = useSelector(selectUser);

  const location = useLocation();

  console.log(location.pathname.split("/"));

  console.log("preview is on:", preview);

  useEffect(() => {
    if (location.pathname === "/preview-playground") {
      setPreview(true);
    } else if (location.pathname.split("/")[1] === "preview-website") {
      setPreview(true);
    }
  }, [location.pathname]);

  return (
    <>
      {/* {preview && <Preview />} */}
      {preview && (
        <Routes>
          <Route path="/preview-playground" element={<Preview />} />
          <Route path="/preview-website/:websiteId" element={<Preview />} />
        </Routes>
      )}
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
            <Route path="/edit-website/:websiteId" element={<EditSite />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
