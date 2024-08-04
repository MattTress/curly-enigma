import React, { useEffect, useState } from "react";
import home from "./asset/home.svg";
import expand from "./asset/expand.svg";
import quantri from "./asset/quantri.svg";
import document_ from "./asset/document_.svg";
import do_an from "./asset/do_an.svg";
import to_chuc from "./asset/to_chuc.svg";
import { Link, NavLink } from "react-router-dom";
import { flushSync } from "react-dom";

function SideBar(props) {
  const [isCollap, setIsCollap] = useState(false);
  const [isCollapDoAn, setIsCollapDoAn] = useState(false);
  const [check, setSheck] = useState(true);
  const [open, setOpen] = useState(false);
  const [openDoAn, setOpenDoAn] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [openToChuc, setOpenToChuc] = useState(false);
  const handleOpenDoAn = () => {
    setOpenDoAn(!openDoAn);
  };

  const HandleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {}, [openField]);
  return (
    <div
      className={`relative  flex flex-col gap-20  ${
        isCollap ? `w-[5%]` : `w-[15%]`
      }  items-center      border-r-2`}
    >
      <div
        className="pt-5"
        onClick={() => {
          window.location.href = "/home";
        }}
      >
        <img src={home} alt="" />
      </div>
      <div className={`flex flex-col items-center  gap-8 `}>
        <Link to="/user">
          <div
            onClick={() => {
              setOpenToChuc(!openToChuc);
              setOpenField(false);
              setOpenCourse(false);
              setOpenClass(false);
              setOpen(false);
            }}
            className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${openToChuc ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`}
            ${isCollap ? "justify-center" : ""}
            flex-row `}
          >
            <label htmlFor="quantri" className="min-w-[20px]">
              <img src={quantri} alt="" />
            </label>
            <h2
              className={`font-medium text-sm  
            ${isCollap ? `hidden` : `block`}  
            `}
              id={"quantri"}
              onClick={console.log("da an")}
            >
              Quản trị thành viên
            </h2>
          </div>
        </Link>

        <div
          onClick={() => {
            HandleOpen();
            setOpenToChuc(false);
          }}
          className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${!isCollap && open ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`}
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${isCollap ? "justify-center" : ""}
            flex-row `}
        >
          <label htmlFor="" className="min-w-[20px]">
            <img src={document_} alt="" />
          </label>
          <h2
            className={`font-medium  ${isCollap ? `hidden` : `block`}  text-sm`}
          >
            Danh mục
          </h2>
          <div
            className={`${
              isCollap ? `hidden` : `block`
            }  flex flex-grow justify-end `}
          >
            <img src={expand} alt="" />
          </div>
        </div>
        {!isCollap && open && (
          <div className="w-[200px] mb-[-20px]  h-fit flex flex-col gap-2  items-center  ">
            <Link to={`/field`}>
              <div
                className={`w-[159px] h-[39px] rounded-[4px] flex items-center pl-8   ${
                  openField ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`
                }   `}
                onClick={() => {
                  setOpenField(!openField);
                  setOpenCourse(false);
                  setOpenClass(false);
                }}
              >
                <span className={`font-medium  text-sm`}>Ngành nghề</span>
              </div>
            </Link>

            <Link to={`/course`}>
              <div
                className={`w-[159px] h-[39px]  rounded-[4px] flex items-center  pl-8 ${
                  openCourse ? `bg-[#F0F7FF] text-[#1890FF]` : `bg-inherit`
                } `}
                onClick={() => {
                  setOpenCourse(!openCourse);
                  setOpenField(false);
                  setOpenClass(false);
                }}
              >
                <span className={`font-medium text-sm`}>Khóa</span>
              </div>
            </Link>

            <Link to={`/class`}>
              <div
                className={`w-[159px] h-[39px] rounded-[4px] flex items-center pl-8 ${
                  openClass ? `bg-[#F0F7FF] text-[#1890FF]  ` : `bg-inherit`
                } `}
                onClick={() => {
                  setOpenClass(!openClass);
                  setOpenCourse(false);
                  setOpenField(false);
                  // window.location.href = "/class";
                }}
              >
                <span className={`font-medium   text-sm`}>Lớp</span>
              </div>
            </Link>
          </div>
        )}
        <div
          onClick={() => {
            handleOpenDoAn()
          }}
          className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${!isCollapDoAn && openDoAn ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`}
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${isCollap ? "justify-center" : ""}
            flex-row `}
        >
          <label htmlFor="" className="min-w-[20px]">
            <img src={do_an} alt="" />
          </label>
          <h2
            className={`font-medium  ${isCollap ? `hidden` : `block`}  text-sm`}
          >
            Đồ án
          </h2>
          <div
            className={`${
              isCollap ? `hidden` : `block`
            }  flex flex-grow justify-end `}
          >
            <img src={expand} alt="" />
          </div>
        </div>
        {!isCollapDoAn && openDoAn && (
          <div className="w-[200px] mb-[-20px]  h-fit flex flex-col gap-2  items-center  ">
            <Link to={`/quanlydot`}>
              <div
                className={`w-[159px] h-[39px] rounded-[4px] flex items-center pl-8   ${
                  openField ? `bg-[#F0F7FF]  text-[#1890FF]` : `bg-inherit`
                }   `}
                onClick={() => {
                  setOpenField(false);
                  setOpenCourse(false);
                  setOpenClass(false);
                }}
              >
                <span className={`font-medium  text-sm`}>Quản lý đợt</span>
              </div>
            </Link>

            <Link to={`/khodetai`}>
              <div
                className={`w-[159px] h-[39px]  rounded-[4px] flex items-center  pl-8 ${
                  openCourse ? `bg-[#F0F7FF] text-[#1890FF]` : `bg-inherit`
                } `}
                onClick={() => {
                  setOpenCourse(false);
                  setOpenField(false);
                  setOpenClass(false);
                }}
              >
                <span className={`font-medium text-sm`}>Kho đề tài</span>
              </div>
            </Link>
          </div>
        )}
        <div
          onClick={() => {
            window.location.href = "/tochuc";
          }}
          className={`flex gap-2 min-w-[178px]   min-h-[40px] p-2 items-center rounded 
            ${check ? "" : "bg-[#F0F7FF]  "} 
            ${isCollap ? "justify-center" : ""}
            
            flex-row `}
        >
          <label htmlFor="" className="min-w-[20px]">
            <img src={to_chuc} className="" alt="" />
          </label>
          <h2
            className={`font-medium  ${isCollap ? `hidden` : `block`}  text-sm`}
          >
            Tổ chức
          </h2>
        </div>
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
    </div>
  );
}
export default SideBar;
