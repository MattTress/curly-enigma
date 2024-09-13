import { useEffect } from "react";
import { requestPost } from "../../../utils/requestPOST";

import icon_X from "./assets/icon_X.svg";
import icon_acc from "./assets/icon_acc.svg";
import icon_camera from "./assets/icon_camera.svg";
import { BodyAdd } from "../AddUser/BodyAdd";
import { FooterAdd } from "../AddUser/FooterAdd";
import { FooterEdit } from "./FooterEdit";
import { BodyEdit } from "./BodyEdit";

export const EditStudent = (props) => {
  const { idUser, handleClose, edit, updateUser, setUpdateUser,dataDetailEdit,
    setDataDetailEdit, } = props;

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
            <h2 className="p-4  font-medium ">Sửa sinh viên</h2>
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
          <BodyEdit
            idUser={idUser}
            updateUser={updateUser}
            setUpdateUser={setUpdateUser}
          />

          {/* footer  */}
          <FooterEdit
            handleClose={handleClose}
            blueBtn="Sửa"
            edit={edit}
            idUser={idUser}
          ></FooterEdit>
        </div>
      </div>
    </div>
  );
};
