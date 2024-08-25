import logo from "./logo.svg";
import "./App.css";
import Login from "./components/auth/Login/Login";
import Header from "./components/layout/Header/Header";
import SideBar from "./components/layout/SideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import ToChuc from "./components/ToChuc/ToChuc/ToChuc";
import Field from "./pages/Field/Field";
import Course from "./pages/Course/Course";
import Class from "./pages/Class/Class";
import User from "./components/User/User";
import { QuanLyDot } from "./components/Topic/QuanLyDot/QuanLyDot";
import { KhoDeTai } from "./components/Topic/KhoDeTai/KhoDeTai";
import { useState } from "react";
import { QuanLyTaiKhoan } from "./components/QuanLyTaiKhoan/QuanLyTaiKhoan";
import { ThongTinCaNhan } from "./components/QuanLyTaiKhoan/ThongTinCaNhan";
import { DoiMatKhau } from "./components/QuanLyTaiKhoan/DoiMatKhau";
import { NhomDoAn } from "./components/QuanLyNhomSV_GV/NhomDoAn";
import { QuanLySV } from "./components/QuanLyNhomSV/QuanLySV";

function App() {
  const RenderPage = () => {
    const token = localStorage.getItem("token");
    const [isOpenCloseQL, setIsOpenCloseQL] = useState(false);
    return (
      <>
        <div>
          {token && (
            <UserProvider>
              <div className="flex  h-screen overflow-hidden">
                {/* Sidebar */}
                <SideBar
                  isOpenCloseQL={isOpenCloseQL}
                  setIsOpenCloseQL={setIsOpenCloseQL}
                />
                {/* Content */}
                <div className="md:w-full h-full overflow-y-auto">
                  {/* header */}
                  <Header
                    isOpenCloseQL={isOpenCloseQL}
                    setIsOpenCloseQL={setIsOpenCloseQL}
                  />

                  <WebRoute />
                </div>
              </div>
            </UserProvider>
          )}
          {!token && <WebRoute />}
        </div>
      </>
    );
  };

  const WebRoute = () => {
    return (
      <Routes>
        <Route path="/home" element={<PrivateRoute></PrivateRoute>} />
        <Route path="/quanlynhomdoan" element={<NhomDoAn />} />
        <Route path="sinhvien" element={<QuanLySV />} />
        <Route path="/thongtincanhan" element={<ThongTinCaNhan />} />
        <Route path="/doimatkhau" element={<DoiMatKhau />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tochuc" element={<ToChuc />} />
        <Route path="/field" element={<Field />} />
        <Route path="/course" element={<Course />} />
        <Route path="/class" element={<Class />} />
        <Route path="/user" element={<User />} />
        <Route path="/quanlydot" element={<QuanLyDot />} />
        <Route path="/khodetai" element={<KhoDeTai />} />
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      <RenderPage />
    </BrowserRouter>
  );
}

export default App;
