import { useEffect, useState } from "react";
import icon_delflter from "./assets/icon_delfilter.svg";
import request from "../../utils/request";
import { searchUser } from "../../services/user.service";
import { render } from "@testing-library/react";

export const SearchBox = (props) => {
  const {
    handleSubmit,
    search,
    setSearch,
    page,
    size,
    setData,
    handleData,
    render,
  } = props;

  const [isOpenClose, setIsOpenClose] = useState(false);
  const [showGender, setShowGender] = useState("");

  return (
    <tr className="h-11 relative">
      <td className={`p-1`}>
        <button
          type="button"
          className=" border w-[32px] h-[32px] flex justify-center items-center  border-[#E2E3E9]"
          onClick={() => {}}
        >
          <img src={icon_delflter} alt="" />
        </button>
      </td>
      <td>
        <button
          type="button"
          className=" border   w-[92px] text-[#1890FF]  h-[32px] flex justify-center items-center  border-[#E2E3E9] "
          onClick={() => {
            handleSubmit();
          }}
        >
          Tìm kiếm
        </button>
      </td>
      <td className="text-center ">
        <input
          className=" border w-3/4 p-1 outline-none  border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={search.full_name}
          onChange={(e) => {
            setSearch({ ...search, full_name: e.target.value });
          }}
        />
      </td>
      <td className="text-center  ">
        <input
          className=" border w-3/4 p-1 outline-none border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={search.phone}
          onChange={(e) => {
            setSearch({ ...search, phone: e.target.value });
          }}
        />
      </td>
      <td className="text-center ">
        <input
          className=" border w-3/4 p-1 outline-none  border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={search.email}
          onChange={(e) => {
            setSearch({ ...search, email: e.target.value });
          }}
        />
      </td>
      <td className="text-center  ">
        <input
          className=" border w-3/4 p-1 outline-none border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={search.address}
          onChange={(e) => {
            setSearch({ ...search, address: e.target.value });
          }}
        />
      </td>
      <td className="text-center ">
        <input
          className=" border w-[86px] p-1 outline-none   border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={showGender}
          readOnly
          // onChange={(e) => {
          //   setSearch({ ...search, gender: e.target.value });
          // }}
          onClick={(e) => {
            setIsOpenClose(!isOpenClose);
          }}
        />
        {isOpenClose && (
          <nav className="relative w-fit">
            <ul className="absolute w-[86px] rounded-[5px] top-0 left-5 shadow-[0_4px_4px_0_25%_#000000] border border-[#C4C4C440]  bg-[#FFFFFF] ">
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 1 });
                  setShowGender("Nam");
                  setIsOpenClose(false);
                }}
              >
                Nam
              </li>
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 0 });
                  setShowGender("Nữ");
                  setIsOpenClose(false);
                }}
              >
                Nữ
              </li>
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 2 });
                  setShowGender("Khác");
                  setIsOpenClose(false);
                }}
              >
                Khác
              </li>
            </ul>
          </nav>
        )}
      </td>
      <td className="text-center  ">
        <input
          className=" border w-3/4 p-1 outline-none border-[#E2E3E9]"
          type="date"
          placeholder=""
          name=""
          id=""
          value={search.birthday_start}
          onChange={(e) => {
            setSearch({ ...search, birthday_start: e.target.value });
          }}
        />
      </td>
    </tr>
  );
};
