import { useEffect } from "react";

import icon_X from "../assets/icon_X.svg";
import { requestPost } from "../../../utils/requestPOST";
import { Body } from "./Body";
import { FooterAdd } from "../../User/AddUser/FooterAdd";

export const AddNhom = (props) => {
  const {
    handleClose,
    createNhom,
    setCreateNhom,
    handleData,
    render,
    setData,
    post,
    idUser,
    setIdUser,
    page,
    setPage,
    size,
    totalPage,
    setTotalPage,
  } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[833px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm nhóm</h2>
            <img
              className="p-4"
              onClick={() => {
                handleClose();
              }}
              src={icon_X}
              alt=""
            />
          </header>
          {/* body  */}

          <Body
            createNhom={createNhom}
            setCreateNhom={setCreateNhom}
            idUser={idUser}
            render={render}
            setIdUser={setIdUser}
            page={page}
            setPage={setPage}
            size={size}
            setData={setData}
            totalPage = {totalPage}
            setTotalPage ={setTotalPage}
          />

          {/* footer  */}

          <FooterAdd
            handleClose={handleClose}
            // handleCreateUser={handleCreateUser}
            blueBtn="Thêm"
            post={post}
          ></FooterAdd>
        </div>
      </div>
    </div>
  );
};
