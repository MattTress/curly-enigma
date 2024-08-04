import { useEffect, useState } from "react";
import icon_delflter from "./assets/icon_delfilter.svg";
import { render } from "@testing-library/react";

const SearchBoxDeTai = (props) => {
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
          className=" border p-1 w-[350px]  outline-none  border-[#E2E3E9]"
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
          className=" border p-1 w-[315px]  outline-none border-[#E2E3E9]"
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
          className=" border w-[140px] p-1 outline-none   border-[#E2E3E9]"
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
            <ul className="absolute w-[140px] rounded-[5px] top-0 left-[39px] shadow-[0_4px_4px_0_25%_#000000] border border-[#C4C4C440]  bg-[#FFFFFF] ">
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 1 });
                  setIsOpenClose(false);
                }}
              >
                Nháp
              </li>
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 0 });
                  setIsOpenClose(false);
                }}
              >
                Xét duyệt
              </li>
              <li
                className="h-[32px] hover:bg-[#E2E3E9]  "
                onClick={() => {
                  setSearch({ ...search, gender: 2 });
                  setIsOpenClose(false);
                }}
              >
                Áp dụng
              </li>
            </ul>
          </nav>
        )}
      </td>

      <td className="text-center  ">
        <input
          className=" border w-[140px] p-1 outline-none border-[#E2E3E9]"
          type="text"
          name=""
          id=""
          value={search.address}
          onChange={(e) => {
            setSearch({ ...search, address: e.target.value });
          }}
        />
      </td>
    </tr>
  );
};
export default SearchBoxDeTai;
