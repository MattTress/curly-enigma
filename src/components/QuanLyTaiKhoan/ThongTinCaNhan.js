import { useEffect, useState } from "react";
import icon_acc from "./assets/icon_acc.svg";
import mayanh from "./assets/mayanh.svg";
import { requestPut } from "../../utils/requestPUT";
import request from "../../utils/request";
import { render } from "@testing-library/react";
export const ThongTinCaNhan = (props) => {
  const [render, setRender] = useState(0);
  const [userInfor, setUserInfor] = useState([]);
  useEffect(() => {
    request("/api/auth/user-info", {})
      .then((res) => {
        const responseData = res.data;
        setUserInfor(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);
  return (
    <div className={` w-full h-full p-5  `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>
          <h3 className=" text-nowrap font-medium">Thông tin cá nhân</h3>
        </div>
        <div
          className={` h-full mx-6 my-4  bg-[#F9F9F9] absolute  relative  w-full`}
        ></div>
      </div>
      <div className="bg-[#F9F9F9] w-full h-[70%] relative top-6">
        <div className={`absolute top-8 left-44`}>
          <img src={icon_acc} width={"120px"} alt="" />
        </div>
        <div className={`absolute top-24 left-[17rem]`}>
          <img src={mayanh} width={"32px"} alt="" />
        </div>
        <div className={`absolute top-[5rem] left-[25rem]`}>
          <h3 className={`text-3xl font-medium`}>{userInfor.fullName}</h3>
        </div>

        <div className={`absolute top-[13rem] left-[11rem]`}>
          <div className={`mb-9`}>
            <span className={`font-medium text-xl`}>Thông cá nhân</span>
          </div>
          <div className={`grid grid-cols-2 gap-x-[24rem] gap-y-[2rem]`}>
            <label htmlFor="tk" className={`text-sm font-medium`}>
              Tài khoản
              <div className="pt-4">
                <input
                  id={"tk"}
                  value={userInfor.username}
                  type="tk"
                  placeholder="Tài khoản"
                  className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                />
              </div>
            </label>
            <div>
              <h3 className="text-sm font-medium">Giới tính</h3>
              <div
                className={`text-sm font-medium flex flex-row items-center gap-16 `}
              >
                <label htmlFor="" className="flex gap-3  flex-row-reverse">
                  <h4>Nam</h4>
                  <input type="radio" name="" id="" />
                </label>
                <label htmlFor="" className="flex gap-3  flex-row-reverse">
                  <h4>Nữ</h4>
                  <input type="radio" name="" id="" />
                </label>
                <label htmlFor="" className="flex gap-3  flex-row-reverse">
                  <h4>Khác</h4>
                  <input type="radio" name="" id="" />
                </label>
              </div>
            </div>

            <label htmlFor="date" className={`text-sm font-medium  `}>
              Ngày sinh
              <div className="pt-4">
                <input
                  id={"date"}
                  value={userInfor.birthday}
                  type="text"
                  placeholder="Ngày sinh"
                  className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                />
              </div>
            </label>
            <label htmlFor="sđt" className={`text-sm font-medium`}>
              Số điện thoại
              <div className="pt-4">
                <input
                  id={"sđt"}
                  value={userInfor.phone}
                  type=""
                  placeholder="Số điện thoại"
                  className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                />
              </div>
            </label>
            <label htmlFor="email" className={`text-sm font-medium  `}>
              Email
              <div className="pt-4">
                <input
                  id={"email"}
                  value={userInfor.email}
                  type="email"
                  placeholder="Email"
                  className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                />
              </div>
            </label>
            <label htmlFor="đc" className={`text-sm font-medium`}>
              Địa chỉ
              <div className="pt-4">
                <input
                  id={"đc"}
                  value={userInfor.address}
                  type="text"
                  placeholder="Địa chỉ"
                  className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
