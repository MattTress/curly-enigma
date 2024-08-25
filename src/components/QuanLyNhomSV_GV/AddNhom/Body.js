import { SearchAddDeTai } from "../../Topic/KhoDeTai/SearchAddDeTai";
import icon_search from "../assets/icon_search.svg";
import icon_stt from "../assets/icon_stt.svg";
import icon_action from "../assets/icon_action.svg";
import icon_lenxuong from "../assets/icon_lenxuong.svg";
import icon_plus from "../assets/icon_plus.svg";
import { DanhSachSV } from "./DanhSachSV";
import { ChoiceDeTai } from "../../Topic/KhoDeTai/AddDeTai/ChoiceDeTai";
import { ChoiceDeTaiSV } from "./ChoiceDeTaiSV";
import { useState } from "react";
import { ChoiceSV } from "./ChoiceSV";

export const Body = (props) => {
  const {
    createNhom,
    setCreateNhom,
    dataShow,
    page,
    setPage,
    size,
    setSize,
    setTotalPage,
    totalPage,
  } = props;
  const [isOpenClose, setIsOpenClose] = useState(false);
  const [isOpenCloseSV, setIsOpenCloseSV] = useState(false);
  return (
    <div className="relative h-[81%]">
      <div className=" mt-8  flex flex-row justify-center gap-[12rem]">
        <div className="w-[316px]">
          <label htmlFor="chonDot" className="flex flex-col">
            <span className="font-medium text-left text-sm">Chọn đợt</span>
            <select
              name=""
              id="chonDot"
              className="w-[316px] h-[32px] border-[#E2E3E9] rounded-[3px] border "
            >
              <option value="">Đợt 1</option>
              <option value="">Đợt 2</option>
              <option value="">Đợt 3</option>
            </select>
          </label>
        </div>

        <div className="w-[316px] ">
          <label htmlFor="chonDot" className="flex flex-col">
            <span className="font-medium text-left text-sm">Tên nhóm</span>
            <input
              className="w-[316px] h-[32px] border-[#E2E3E9] rounded-[3px] border px-2 "
              type="text"
              placeholder="Nhập tên nhóm"
              value={createNhom.name}
              onChange={(e) => {
                setCreateNhom({ ...createNhom, name: e.target.value });
              }}
            />
          </label>
        </div>
      </div>
      <div className="w-fit relative top-[1rem] left-[4.19rem] ">
        <label
          htmlFor="chonDot"
          className="flex flex-col"
          onClick={(e) => {
            setIsOpenClose(true);
          }}
        >
          <span className="font-medium text-left text-sm">Chọn đề tài</span>
          <input
            className="w-[826px] h-[32px] border-[#E2E3E9] rounded-[3px] border px-2 "
            type="text"
            readOnly
            placeholder="Nhập tên nhóm"
            value={createNhom.detai}
            onChange={(e) => {
              setCreateNhom({ ...createNhom, detai: e.target.value });
            }}
          />
        </label>
      </div>{" "}
      <div className="relative flex flex-col w-[826px] top-[1rem] left-[4.19rem] pt-3 ">
        <div className="flex flex-row justify-between w-[826px] ">
          <div>
            <h4 className="text-sm font-medium ">
              Danh sách sinh viên được chọn
            </h4>
          </div>
          <div
            className="flex flex-row w-fit "
            onClick={(e) => {
              setIsOpenCloseSV(true);
            }}
          >
            <img src={icon_plus} width={"20px"} alt="" />
            <h4 className="text-[#1890FF] font-medium">Chọn sinh viên</h4>
          </div>
        </div>
        <table className=" w-[826px] relative ">
          <thead className={` border border-[#eee] relative w-full `}>
            <tr>
              <td className={`text-center w-[40px]  `}>STT</td>
              <td className={`text-center w-[40px] `}>
                <img className="m-auto" src={icon_stt} alt="" />
              </td>
              <td className={``}>
                <div className="justify-center  flex flex-row">
                  <img src={icon_lenxuong} />
                  <span>Mã sinh viên</span>
                </div>
              </td>
              <td className={``}>
                <div className="justify-center  flex flex-row">
                  <img src={icon_lenxuong} />
                  <span>Họ và tên</span>
                </div>
              </td>
              <td className={``}>
                <div className="justify-center  flex flex-row">
                  <img src={icon_lenxuong} />
                  <span>Chuyên ngành</span>
                </div>
              </td>
              <td className={``}>
                <div className="justify-center  flex flex-row">
                  <img src={icon_lenxuong} />
                  <span>Vai trò</span>
                </div>
              </td>
            </tr>
          </thead>

          <tbody>
            {dataShow?.map((item, index) => (
              <tr className="border border-[#eee]">
                <td className="border border-[#eee] text-center p-3">
                  {(page - 1) * size + index + 1}
                </td>
                <td className="border border-[#eee] text-center p-3">
                  <div className={`mx-auto relative dropDown`}>
                    <img src={icon_action} className="" alt="" />

                    <div
                      key={item.id}
                      className="child rounded-lg border-2 border-[#c4c4c4]  shadow-md  bg-white z-10"
                    >
                      <div
                        key={item.id}
                        onClick={() => {
                          //   handleDeleteTopic(item.id);
                        }}
                        className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                      >
                        Xóa
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-x-0 border-[#eee] text-center p-3">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isOpenClose && (
        <ChoiceDeTaiSV
          setIsOpenClose={setIsOpenClose}
          isOpenClose={isOpenClose}
          setTotalPage={setTotalPage}
          size={size}
          page={page}
          setSize={setSize}
          setPage={setPage}
        />
      )}
      {isOpenCloseSV && (
        <ChoiceSV
          setIsOpenCloseSV={setIsOpenCloseSV}
          isOpenCloseSV={isOpenCloseSV}
          setTotalPage={setTotalPage}
        />
      )}
    </div>
  );
};
