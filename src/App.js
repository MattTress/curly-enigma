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

function App() {
  const RenderPage = () => {
    const token = localStorage.getItem("token");
    return (
      <>
        <div>
          {token && (
            <UserProvider>
              <div className="flex  h-screen overflow-hidden">
                {/* Sidebar */}
                <SideBar />
                {/* Content */}
                <div className="md:w-full h-full overflow-y-auto">
                  {/* header */}
                  <Header />
                  {/* <div className={`min-h-[46px] w-full shadow-lg`}>
                    <span className="p-3 font-semibold text-[#172B4D]">
                      Tổ chức
                    </span>
                  </div> */}
                  {/* component */}
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
