import { useEffect, useState } from "react";
import request from "../../../utils/request";
import icon_acc from "../assets/icon_acc.svg";
import icon_camera from "../assets/icon_camera.svg";

export const BodyEdit = (props) => {
  const { idUser } = props;
  const [dataDetailEdit, setDataDetailEdit] = useState();
  useEffect(() => {
    request(`/api/admin/user/student/`, {
      params: {
        id: idUser,
      },
    })
      .then((res) => {
        let responseData = res.data;
        // sort data theo createdAt
        console.log(responseData);
        setDataDetailEdit([responseData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataDetailEdit);
  return (
    <div className="  w-full items-center h-[85.5%] relative shadow-md ">
      {dataDetailEdit?.map((item, index) => {
        return (
          <div>
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
                  value={item.username}
                  onChange={(e) => {}}
                />
              </label>

              {/* Gender */}
              <div className="flex flex-row relative top-[15px]  items-start p-2 gap-14">
                <span className="text-sm font-medium">Giới tính</span>

                <label
                  htmlFor="nam"
                  className="flex flex-row items-center gap-1"
                >
                  <input
                    type="radio"
                    name=""
                    id="nam"
                    value={0}
                    onClick={(e) => {}}
                  />
                  <span className="text-sm font-medium">Nam</span>
                </label>
                <label
                  htmlFor="nu"
                  className="flex flex-row items-center gap-1"
                >
                  <input
                    type="radio"
                    name=""
                    id="nu"
                    value={1}
                    onClick={(e) => {}}
                  />
                  <span className="text-sm font-medium">Nữ</span>
                </label>
                <label
                  htmlFor="khac"
                  className="flex flex-row items-center gap-1 "
                >
                  <input
                    type="radio"
                    name=""
                    id="khac"
                    value={2}
                    onClick={(e) => {}}
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
                  value={item.phone}
                  onChange={(e) => {}}
                />
              </label>
            </div>
            <div className="relative flex flex-col w-fit gap-5 top-[-8.5rem] left-[3rem] ">
              {/* fullname */}
              <label
                htmlFor="fullname"
                className="flex flex-col items-start gap-2"
              >
                <span className="text-sm font-medium">Họ và tên</span>
                <input
                  className="w-[340px] px-5 py-[3px] border rounded-[3px]"
                  type="text"
                  id="fullname"
                  placeholder="Nhập họ và tên"
                  value={item.fullName}
                  onChange={(e) => {}}
                />
              </label>
              {/* date */}
              <label
                htmlFor="date"
                className="flex flex-col items-start gap-2 "
              >
                <span className="text-sm font-medium">Ngày sinh</span>
                <input
                  className="w-[340px] px-5 py-[3px] border rounded-[3px]"
                  type="date"
                  id="date"
                  placeholder="Chọn ngày"
                  value={item.birthday}
                  onChange={(e) => {}}
                />
              </label>
              {/* Mail */}
              <label
                htmlFor="Email"
                className="flex flex-col items-start gap-2 "
              >
                <span className="text-sm font-medium">Email</span>
                <input
                  className="w-[340px] px-5 py-[3px] border rounded-[3px]"
                  type="email"
                  id="Email"
                  placeholder="Nhập email"
                  value={item.email}
                  onChange={(e) => {}}
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
                  value={item.address}
                  onChange={(e) => {}}
                />
              </label>
            </div>
            <div className="relative flex flex-col w-fit gap-5 top-[-4rem] left-[3rem]">
              {/* working */}
              <label
                htmlFor="working"
                className="flex flex-col items-start gap-2 "
              >
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
              <label
                htmlFor="notes"
                className="flex flex-col items-start gap-2 "
              >
                <span className="text-sm font-medium">Ghi chú</span>
                <input
                  className="w-[750px] px-5 py-[3px] border rounded-[3px]"
                  type="text"
                  name=""
                  id="notes"
                  placeholder="Nhập ghi chú"
                  value={item.note}
                  onChange={(e) => {}}
                />
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
