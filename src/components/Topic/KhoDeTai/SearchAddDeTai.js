import { useEffect, useState } from "react";
import icon_delflter from "./assets/icon_delfilter.svg";
import { render } from "@testing-library/react";

export const SearchAddDeTai = (props) => {
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
          value={""}
          onChange={(e) => {
            setSearch();
          }}
        />
      </td>
    </tr>
  );
};
