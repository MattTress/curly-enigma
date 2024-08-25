import { useState } from "react";
import { requestPut } from "../../utils/requestPUT";

export const DoiMatKhau = (props) => {
  const [changePass, setChangePass] = useState({
    new_password: "",
    old_password: [],
    chk_password: [],
  });
  const handleUpdatePass = () => {
    requestPut("/api/user/change-password", {
      params: {
        new_password: changePass.new_password,
        old_password: changePass.old_password,
      },
    }).then((res) => {});
  };
  return (
    <div className={` w-full h-full p-5  `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>
          <h3 className=" text-nowrap  text-[#1890FF] font-medium">
            Đổi mật khẩu
          </h3>
        </div>
        <div
          className={` h-full mx-6 my-4  bg-[#F9F9F9] absolute  relative  w-full`}
        >
          <form className={`relative w-full `}>
            <div className={`absolute top-[10rem] left-[8rem] border-b pb-12`}>
              <div className={`mb-9`}>
                <span className={`font-medium text-xl`}>Đổi mật khẩu</span>
              </div>
              <div className={`grid grid-cols-2 gap-5`}>
                <label htmlFor="oldPass" className={`text-sm font-medium`}>
                  Mật khẩu cũ
                  <div className="pt-4">
                    <input
                      id={"oldPass"}
                      type="text"
                      placeholder="Nhập mật khẩu"
                      className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                      value={changePass.old_password}
                      onChange={(e) => {
                        setChangePass({
                          ...changePass,
                          old_password: e.target.value,
                        });
                      }}
                    />
                  </div>
                </label>

                <label
                  htmlFor="newPass"
                  className={`text-sm font-medium ml-[10rem] `}
                >
                  Mật khẩu mới
                  <div className="pt-4">
                    <input
                      id={"newPass"}
                      type="text"
                      placeholder="Nhập mật khẩu"
                      className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                      value={changePass.new_password}
                      onChange={(e) => {
                        setChangePass({
                          ...changePass,
                          new_password: e.target.value,
                        });
                      }}
                    />
                  </div>
                </label>
                <div></div>
                <label
                  htmlFor="checkPass"
                  className={`text-sm font-medium ml-[10rem]`}
                >
                  Mật khẩu xác nhận
                  <div className="pt-4">
                    <input
                      id={"checkPass"}
                      type="text"
                      placeholder="Nhập lại mật khẩu"
                      className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                      value={changePass.chk_password}
                      onChange={(e) => {
                        setChangePass({
                          ...changePass,
                          chk_password: e.target.value,
                        });
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>
            <button
              type="button"
              className={`absolute rounded-[3px] w-[5.5rem] h-[2rem] left-[66.2rem] top-[28.5rem] 
                ${
                  changePass.new_password === changePass.chk_password
                    ? `bg-[#1890FF]`
                    : `bg-slate-400`
                }`}
              onClick={(e) => {
                handleUpdatePass();
              }}
            >
              <span className="text-[#FFFFFF]">Cập nhật</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
