import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Menu } from "../components/Menu";

export const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};
