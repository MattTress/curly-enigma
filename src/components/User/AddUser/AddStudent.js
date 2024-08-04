import { useEffect } from "react";
import { requestPost } from "../../../utils/requestPOST";
import { BodyAdd } from "./BodyAdd";
import { FooterAdd } from "./FooterAdd";
import { InputA } from "./InputA";
import icon_X from "./assets/icon_X.svg";
import icon_acc from "./assets/icon_acc.svg";
import icon_camera from "./assets/icon_camera.svg";

export const AddStudent = (props) => {
  const { handleClose, createUser, setCreateUser, handleData, render, post } =
    props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
        handleClose={() =>
          //  handleClose()
          {}
        }
      >
        <div className="w-full h-[833px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm sinh viên</h2>
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
          <BodyAdd
            createUser={createUser}
            setCreateUser={setCreateUser}
          ></BodyAdd>

          {/* footer  */}
          <FooterAdd
            handleClose={handleClose}
            blueBtn="Thêm"
            post={post}
          ></FooterAdd>
        </div>
      </div>
    </div>
  );
};
