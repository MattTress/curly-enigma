// import { logDOM } from "@testing-library/react";

import { useEffect, useState } from "react";
import { FooterAdd } from "../AddUser/FooterAdd";
import icon_X from "../assets/icon_X.svg";
import icon_acc from "../assets/icon_acc.svg";
import icon_camera from "../assets/icon_camera.svg";
import { BodyEdit } from "./BodyEdit";
import request from "../../../utils/request";

const EditQuanLy = (props) => {
  const { createUser, idUser, setCreateUser, handleClose } = props;
  // debugger

  return (
    <>
      (
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
        <div
          className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
          title="Thêm thành viên"
          handleClose={() => handleClose}
        >
          <div className="w-full h-[833px]">
            {/* Header */}
            <header className="flex flex-row justify-between h-[60px] shadow-md ">
              <h2 className="p-4  font-medium ">Sửa quản lý</h2>
              <img className="p-4" src={icon_X} alt="" />
            </header>
            {/* body  */}
            <BodyEdit idUser={idUser}></BodyEdit>

            {/* footer  */}
            <FooterAdd handleClose={handleClose}></FooterAdd>
          </div>
        </div>
      </div>
      )
    </>
  );
};
export default EditQuanLy;
