import { useEffect, useState } from "react";
import { BodyDetail } from "./BodyDetail";
import request from "../../../utils/request";

export const DetailUser = (props) => {
  const {
    title,
    handleClose,
    icon_X,
    dataShow,
    idUser,
    size,
    page,
    search,
    render,
    handleData,
  } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[1200px]] top-[10rem]  bg-white "
        title="Thêm thành viên"
        handleClose={() => handleClose()}
      >
        <div className="w-[1200px] h-[570px]">
          {/* Header */}
          <header className="w-full relative ">
            <h1 className="text-2xl text-center font-medium mt-10 text-[#172B4D]">
              Chi tiết quản lý {title}
            </h1>
            <img
              className="absolute top-[-25px] right-[20px]"
              onClick={() => {
                handleClose();
              }}
              src={icon_X}
              alt=""
            />
          </header>
          {/* body  */}
          <BodyDetail
          //  dataDetail={dataDetail}
          idUser = {idUser}
          ></BodyDetail>
          {/* footer  */}
        </div>
      </div>
    </div>
  );
};
