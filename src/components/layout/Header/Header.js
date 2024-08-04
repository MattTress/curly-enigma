import React, { useContext, useEffect, useState } from "react";
import icon_vn from "./asset/icon_vn.svg";
import icon_red from "./asset/icon_redDot.svg";
import icon_noti from "./asset/icon_noti.svg";
import icon_acc from "./asset/icon_acc.svg";
import icon_logout from "./asset/icon_logout.svg";
import { UserContext } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";
function Header(props) {
  const [check, setCheck] = useState(false);
  const handleClickAcc = () => {
    console.log("da an");
    setCheck(!check);
  };
  const { currentUser } = useContext(UserContext);
  useEffect(() => {});

  return (
    <div className="flex flex-row   relative border-b-2 ">
      <div className="  w-full  grow  h-[82px]  grid grid-cols-2 items-center">
        <h1 className="text-[20px] pl-6  leading-6 font-medium">
          Trường Đại học A
        </h1>
        <form>
          <div className="flex flex-row justify-end gap-6 pr-[10%]">
            <img src={icon_vn} alt="" />
            <div>
              <img src={icon_noti} alt="" />
            </div>
            <div
              onClick={() => {
                handleClickAcc();
              }}
            >
              <img src={icon_acc} alt="" />
            </div>

            {check && (
              <div className="min-w-[260px]   rounded-[3px] drop-shadow-md shadow-[#172B4D]  min-h-[255px] absolute z-10 top-16  h-36 bg-[#FFFFFF] ">
                <div className="flex flex-col pt-3  justify-center items-center gap-4 ">
                  <img src={icon_acc} width={70} alt="" />
                  <span>{currentUser.fullName}</span>
                  <button className="min-w-[136px] min-h-[36px] border rounded-[3px] mb-4  p-2">
                    Quản lý tài khoản
                  </button>
                </div>
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                  }}
                  className=" w-full p-4   flex flex-row border-t border-[#E2E3E9]  "
                >
                  <img src={icon_logout} alt="" />
                  <span>Đăng xuất</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Header;
