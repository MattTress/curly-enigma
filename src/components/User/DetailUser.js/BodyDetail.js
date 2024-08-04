import { useEffect, useState } from "react";
import pic_bg from "./assets/pic_bg.svg";
import request from "../../../utils/request";

export const BodyDetail = (props) => {
  const { idUser } = props;
  // debugger
  const [dataDetail, setDataDetail] = useState();
  useEffect(() => {
    request(`/api/admin/user/${idUser}`, {
      params: {},
    })
      .then((res) => {
        let responseData = res.data;
        // sort data theo createdAt
        console.log(responseData);
        setDataDetail([responseData]);
        // handleData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataDetail);

  return (
    <div className="flex flex-row ">
      <div className="relative w-[25%] top-[50px] left-[70px] ">
        <img src={pic_bg} width={"270"} height={"246"} alt="" />
      </div>
      <div className="w-[75%] relative top-[50px] left-[100px] border-b border-[#9D9D9D] border-dotted	 ">
        {dataDetail?.map((item, index) => {
          return (
            <div className="grid grid-row-3 pl-[20px] gap-5  " key={item.id}>
              {/* 1 */}
              <div className="  w-[75%]">
                <h1 className="text-2xl text-[#172B4D] text-left  font-medium ">
                  {/* Bùi Thị F */}
                  {item.fullName}
                </h1>
              </div>
              {/* 2 */}
              <div className=" grid grid-flow-col w-[75%]">
                <div>
                  <label
                    htmlFor="username"
                    className="flex flex-col  text-left "
                  >
                    {/* username */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9]  ">
                      Tài khoản
                    </h3>
                    <p
                      id="username"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* taikhoanf */}
                      {item.username}
                    </p>
                  </label>{" "}
                </div>
                <div>
                  <label
                    htmlFor="gender "
                    className="flex flex-col  text-left "
                  >
                    {/* gender */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9] ">
                      Giới tính
                    </h3>
                    <p
                      id="gender"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* Nữ */}
                      {item.gender === 0 ? "Nữ" : "Nam"}
                    </p>
                  </label>{" "}
                </div>
                <div>
                  <label
                    htmlFor="birthday "
                    className="flex flex-col  text-left "
                  >
                    {/* birthday */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9] ">
                      Ngày sinh
                    </h3>
                    <p
                      id="birthday"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* 06/12/1990{" "} */}
                      {item.birthday}
                    </p>
                  </label>{" "}
                </div>
              </div>
              {/* 3 */}
              <div className=" grid grid-flow-col w-[75%]">
                <div>
                  <label htmlFor="phone " className="flex flex-col  text-left ">
                    {/* phone */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9] ">
                      Số điện thoại
                    </h3>
                    <p
                      id="phone"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* 090995663 */}
                      {item.phone}
                    </p>
                  </label>{" "}
                </div>
                <div>
                  <label htmlFor="email " className="flex flex-col  text-left ">
                    {/* email */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9] ">
                      Email
                    </h3>
                    <p
                      id="email"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* buithifabcde@gmail.com */}
                      {item.email}
                    </p>
                  </label>{" "}
                </div>
                <div>
                  <label
                    htmlFor="address "
                    className="flex flex-col text-left "
                  >
                    {/* address */}
                    <h3 className=" text-sm font-normal text-[#9EA3A9] ">
                      Địa chỉ
                    </h3>
                    <p
                      id="address"
                      className="w-[250px] font-normal  text-[#172B4D] "
                    >
                      {/* Địa chỉ số 456, đường Hà Nội, ngõ B, Quận C, Hà Nội */}
                      {item.address}
                    </p>
                  </label>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
