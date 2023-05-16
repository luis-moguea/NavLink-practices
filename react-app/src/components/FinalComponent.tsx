import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar/NavBar";
import Links from "./Links/Links";
import NotFound from "./NotFound/NotFound";

const FinalComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="react/*" element={<AppRoutes />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default FinalComponent;
