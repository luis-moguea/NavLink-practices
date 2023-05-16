import { Routes, Route } from "react-router-dom";
import Dom from "./Dom/Dom";
import ReactCom from "./ReactCom/ReactCom";
import Home from "./Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<ReactCom />}></Route>
        <Route path=":id" element={<Home />}></Route>
        <Route path="dom" element={<Dom />}></Route>
        <Route path="frame" element={<ReactCom />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
