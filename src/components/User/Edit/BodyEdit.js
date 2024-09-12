import { useEffect, useState } from "react";
import request from "../../../utils/request";
import icon_acc from "../assets/icon_acc.svg";
import icon_camera from "../assets/icon_camera.svg";
import { render } from "@testing-library/react";

export const BodyEdit = (props) => {
  const { idUser, updateUser, setUpdateUser } = props;
  const [dataDetailEdit, setDataDetailEdit] = useState({
    address: "",
    avatar: "string",
    birthday: "",
    classId: 0,
    courseId: 0,
    email: "",
    enabled: true,
    fieldId: 0,
    fullName: "",
    gender: 0,
    note: "",
    password: "",
    phone: "",
    studentCode: "string",
    teacherType: true,
    type: "",
    username: "",
  });
  useEffect(() => {
    request(`/api/admin/user/${idUser}`)
      .then((res) => {
        let responseData = res.data;
        console.log(responseData);
        setDataDetailEdit(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="  w-full items-center h-[85.5%] relative shadow-md ">
      {/* {dataDetailEdit?.map((item, index) => {
        return ( */}
      <div key={dataDetailEdit.id}>
        <div className={`relative top-8 left-[3rem] w-fit `}>
          <img src={icon_acc} width={"120px"} alt="" />
        </div>
        <div className={`relative  left-[8.5rem] w-fit `}>
          <img src={icon_camera} width={"32px"} alt="" />
        </div>
        <div className="relative  w-fit gap-3 top-[-7.25rem] left-[35.5rem] ">
          {/* account */}
          <label
            htmlFor="taikhoan"
            className="flex flex-col items-start gap-2 "
          >
            <span className="text-sm font-medium">Tài khoản</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="text"
              id="taikhoan"
              placeholder="Nhập tài khoản"
              value={dataDetailEdit.username}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  username: e.target.value,
                });
                setUpdateUser({ ...updateUser, username: e.target.value });
              }}
            />
          </label>

          {/* Gender */}
          <div className="flex flex-row relative top-[15px]  items-start p-2 gap-14">
            <span className="text-sm font-medium">Giới tính</span>

            <label htmlFor="nam" className="flex flex-row items-center gap-1">
              <input
                type="radio"
                name=""
                id="nam"
                value={0}
                onClick={(e) => {
                  setDataDetailEdit({
                    ...dataDetailEdit,
                    gender: e.target.value,
                  });
                  setUpdateUser({ ...updateUser, gender: e.target.value });
                }}
              />
              <span className="text-sm font-medium">Nam</span>
            </label>
            <label htmlFor="nu" className="flex flex-row items-center gap-1">
              <input
                type="radio"
                name=""
                id="nu"
                value={1}
                onClick={(e) => {
                  setDataDetailEdit({
                    ...dataDetailEdit,
                    gender: e.target.value,
                  });
                  setUpdateUser({ ...updateUser, gender: e.target.value });
                }}
              />
              <span className="text-sm font-medium">Nữ</span>
            </label>
            <label htmlFor="khac" className="flex flex-row items-center gap-1 ">
              <input
                type="radio"
                name=""
                id="khac"
                value={2}
                onClick={(e) => {
                  setDataDetailEdit({
                    ...dataDetailEdit,
                    gender: e.target.value,
                  });
                  setUpdateUser({ ...updateUser, gender: e.target.value });
                }}
              />
              <span className="text-sm font-medium">Khác</span>
            </label>
          </div>
          {/* telecom */}
          <label
            htmlFor="tel"
            className="flex flex-col relative top-[120px]  items-start gap-2 "
          >
            <span className="text-sm font-medium">Số điện thoại</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="tel"
              name=""
              id="tel"
              placeholder="Nhập số điện thoại"
              value={dataDetailEdit.phone}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  phone: e.target.value,
                });
                setUpdateUser({ ...updateUser, phone: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="relative flex flex-col w-fit gap-5 top-[-8.5rem] left-[3rem] ">
          {/* fullname */}
          <label htmlFor="fullname" className="flex flex-col items-start gap-2">
            <span className="text-sm font-medium">Họ và tên</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="text"
              id="fullname"
              placeholder="Nhập họ và tên"
              value={dataDetailEdit.fullName}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  fullName: e.target.value,
                });
                setUpdateUser({ ...updateUser, fullName: e.target.value });
              }}
            />
          </label>
          {/* date */}
          <label htmlFor="date" className="flex flex-col items-start gap-2 ">
            <span className="text-sm font-medium">Ngày sinh</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="date"
              id="date"
              placeholder="Chọn ngày"
              value={dataDetailEdit.birthday}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  birthday: e.target.value,
                });
                setUpdateUser({ ...updateUser, birthday: e.target.value });
              }}
            />
          </label>
          {/* Mail */}
          <label htmlFor="Email" className="flex flex-col items-start gap-2 ">
            <span className="text-sm font-medium">Email</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="email"
              id="Email"
              placeholder="Nhập email"
              value={dataDetailEdit.email}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  email: e.target.value,
                });
                setUpdateUser({ ...updateUser, email: e.target.value });
              }}
            />
          </label>

          {/* address */}
          <label
            htmlFor="address"
            className="flex flex-col items-start gap-2 relative "
          >
            <span className="text-sm font-medium">Địa chỉ</span>
            <input
              className="w-[860px] absolute top-[30px]  px-5 py-[3px] border rounded-[3px]"
              type="text"
              name=""
              id="address"
              placeholder="Nhập địa chỉ"
              value={dataDetailEdit.address}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  address: e.target.value,
                });
                setUpdateUser({ ...updateUser, address: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="relative flex flex-col w-fit gap-5 top-[-4rem] left-[3rem]">
          {/* working */}
          <label htmlFor="working" className="flex flex-col items-start gap-2 ">
            <span className="text-sm font-medium">Học và làm việc tại</span>
            <input
              className="w-[340px] px-5 py-[3px] border rounded-[3px]"
              type="text"
              id="working"
              placeholder="Nhập thông tin"
              value={""}
              onChange={(e) => {}}
            />
          </label>

          {/* notes */}
          <label htmlFor="notes" className="flex flex-col items-start gap-2 ">
            <span className="text-sm font-medium">Ghi chú</span>
            <input
              className="w-[750px] px-5 py-[3px] border rounded-[3px]"
              type="text"
              name=""
              id="notes"
              placeholder="Nhập ghi chú"
              value={dataDetailEdit.note}
              onChange={(e) => {
                setDataDetailEdit({
                  ...dataDetailEdit,
                  note: e.target.value,
                });
                setUpdateUser({ ...updateUser, note: e.target.value });
              }}
            />
          </label>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};
