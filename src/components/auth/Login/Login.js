import { useEffect, useState } from "react";
import Img1 from "./asset/img1.png";
import Img2 from "./asset/img2.png";
import { Link, Navigate } from "react-router-dom";
import { doLogin } from "../../../services/user.service";
function Login() {
  const token = localStorage.getItem("token");
  const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

  const [chk, setChk] = useState();
  const [chkPass, setChkPass] = useState();
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();
  const handleUserName = (event) => {
    setUserName(event.target.value);
    testUserName(username);
    console.log(">>username: " + username);
  };
  const handlePassWord = (event) => {
    setPassWord(event.target.value);
    testPassWord(password);
    console.log(">>password: " + password);
  };
  const testUserName = (test) => {
    setChk(regEmail.test(test));
    console.log(
      regEmail.test(test) ? ">>> username: ok" : ">>> username: not ok"
    );
  };
  const testPassWord = (test) => {
    setChkPass(regPassword.test(test));
    console.log(regPassword.test(test) ? ">>> pass: ok" : ">>> pass:not ok");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || username === "") {
      console.log("Nhap lai ten dang nhap");
      return;
    }
    if (!password || password === "") {
      console.log("Nhap lai mat khau");
    }
    doLogin({ username, password }).then((res) => {
      const responseData = res.data;

      localStorage.setItem("token", responseData.token);
      // <Navigate to ={"/home"}/>
      window.location.href = "/home";
    });
  };
  useEffect(() => {
    if (token) {
      // <Navigate to ={"/home"}/>
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Image */}
      <div className="absolute top-0 right-0 z-[-1]">
        <img src={Img1} alt="img1" />
      </div>
      <div className="absolute right-[67px] bottom-0 z-[-1]">
        <img src={Img2} alt="img2" />
      </div>
      <div className="py-6 px-10">
        <h2 className="font-medium text-xl text-[#172B4D]">Quản lý đồ án</h2>
      </div>
      <div className="relative z-10 ">
        <div className=" lg:w-1/2  mt-20">
          <h1 className="font-bold  text-[#1890FF] text-center  mb-12 mx-auto  text-[32px]">
            Đăng nhập
          </h1>
          <div className="md:w-1/2  mx-auto">
            <form onSubmit={handleSubmit} className="px-12">
              <div className="flex gap-2   w-max min-h-[100px] flex-col">
                <label htmlFor="username" className="text-[#172B4D]">
                  Tài khoản
                </label>
                <input
                  type="text"
                  name=""
                  id="username"
                  value={username}
                  className="px-6 py-2 max-w-[361px] max-h-[40px] min-w-[361px] min-h-[40px]  outline-none rounded-lg border  border-[#D9D9D9]"
                  placeholder="Tài khoản"
                  onChange={(event) => {
                    handleUserName(event);
                  }}
                />
                {/* {!chk && (
                  <i className="text-sm  text-red-500">
                    Nhập lại tên đăng nhập
                  </i>
                )} */}
              </div>
              <div className="flex gap-2 w-max min-h-[100px]  flex-col ">
                <label htmlFor="password" className="text-[#172B4D]">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="px-6 py-2 max-w-[361px] max-h-[40px] min-w-[361px] min-h-[40px]  outline-none rounded-lg border border-[#D9D9D9]"
                  placeholder="Mật khẩu"
                  onChange={(event) => {
                    handlePassWord(event);
                  }}
                />
                {/* {!chkPass && (
                  <i className="text-sm text-red-500">Nhập lại mật khẩu</i>
                )} */}
              </div>

              <button
                type={chk === true && chkPass === true ? `submit` : `submit`}
                className={`px-6 py-2 max-w-[361px] ${
                  chkPass === true ? `bg-[#1890FF]` : `bg-[#02213d]`
                }   min-w-[361px]  w-full mt-1  max-h-[40px]  text-[#F0F7FF]  outline-none rounded-lg border border-[#D9D9D9]`}
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
