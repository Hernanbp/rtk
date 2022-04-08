import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/*" element={<Login />} />
    </Routes>
  );
};
