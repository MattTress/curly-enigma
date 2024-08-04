import { useEffect, useState } from "react";
import icon_delflter from "./assets/icon_delfilter.svg";

export const SearchBoxQLDot = (props) => {
  const {
    
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
            
          }}
        >
          Tìm kiếm
        </button>
      </td>
      <td className="text-center ">
        <input
          className=" border w-[192px] p-1 outline-none  border-[#E2E3E9]"
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
          className=" border w-[453px] p-1 outline-none border-[#E2E3E9]"
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
          className=" border w-[150px] p-1 outline-none  border-[#E2E3E9]"
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
          className=" border w-[150px] p-1 outline-none border-[#E2E3E9]"
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
