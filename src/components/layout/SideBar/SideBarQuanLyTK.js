import { useState } from "react";
import expand from "./asset/expand.svg";
import qltk from "./asset/qltk.svg";
import pass from "./asset/pass.svg";
import { Link } from "react-router-dom";
export const SideBarQuanLyTK = (props) => {
  const { isCollap, setIsCollap, check, open, setOpen, setCheck } = props;
  const [isClickedTT, setIsClickedTT] = useState(false);
  const [isClickedP, setIsClickedP] = useState(false);
  return (
    <>
      <div className={`flex flex-col items-center  gap-8`}>
        <h3 className={`font-medium ${isCollap ? `hidden` : `block`}`}>
          Quản lý tài khoản
        </h3>
        <Link to={"thongtincanhan"}>
          <div
            onClick={() => {
              setIsClickedTT(!isClickedTT);
              setIsClickedP(false);
            }}
            className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${isClickedTT ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`}
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${isCollap ? "justify-center" : ""}
            flex-row `}
          >
            <label htmlFor="" className="min-w-[20px]">
              <img
                src={qltk}
                className={`${
                  isClickedP ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`
                }`}
                alt=""
              />
            </label>
            <h2
              className={`font-medium  ${
                isCollap ? `hidden` : `block`
              }  text-sm`}
            >
              Thông tin cá nhân
            </h2>
            <div
              className={`${
                isCollap ? `hidden` : `block`
              }  flex flex-grow justify-end `}
            >
              <img src={expand} alt="" />
            </div>
          </div>
        </Link>
        <Link to={"doimatkhau"}>
          {" "}
          <div
            onClick={() => {
              setIsClickedTT(false);
              setIsClickedP(!isClickedP);
            }}
            className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${isClickedP ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`}
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${isCollap ? "justify-center" : ""}
            flex-row `}
          >
            <label htmlFor="" className="min-w-[20px]">
              <img
                src={pass}
                className={`${
                  isClickedP ? `bg-[#F0F7FF] text-[#1890FF]` : `bg-inherit`
                }`}
                alt=""
              />
            </label>
            <h2
              className={`font-medium  ${
                isCollap ? `hidden` : `block`
              }  text-sm`}
            >
              Đổi mật khẩu
            </h2>
            <div
              className={`
                  ${isCollap ? `hidden` : `block`} 
                   flex flex-grow justify-end `}
            >
              <img src={expand} alt="" />
            </div>
          </div>
        </Link>
        <div className="absolute w-6 h-8  bottom-0  z-20 right-[-20px]  ">
          <button
            className="w-6 h-8"
            onClick={() => {
              setIsCollap(!isCollap);
              setOpen(false);
            }}
          >
            <img src={expand} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
