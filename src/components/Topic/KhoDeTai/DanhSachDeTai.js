import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import icon_X from "./assets/icon_X.svg";
import icon_save from "./assets/icon_save.svg";
import icon_up from "./assets/icon_up.svg";
import icon_plus from "./assets/icon_plus.svg";

import { SearchAddDeTai } from "./SearchAddDeTai";
import request from "../../../utils/request";

export const DachSachDeTai = (props) => {
  const {
    handleOpenCloseDS,
    dataYearShow,
    handleSubmit,
    search,
    setSearch,
    page,
    render,
    size,
  } = props;
  const handleGetDS = (e) => {
    request("");
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[4rem]  bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[1001px] flex flex-col ">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Danh sách đề tài năm {}</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col justify-around items-center h-[900px] shadow-md p-10  gap-10 ">
            <div className={` w-[750px] h-full relative`}>
              <table className="w-full ">
                <thead className={` border border-[#eee] relative w-full `}>
                  <tr>
                    <td className={`text-center w-[40px]  `}>STT</td>
                    <td className={`text-center w-[40px] `}>
                      <img className="m-auto" src={icon_stt} alt="" />
                    </td>
                    <td className={``}>
                      <div className="justify-center  flex flex-row">
                        <img src={icon_lenxuong} />
                        <span>Tên đề tài</span>
                      </div>
                    </td>
                  </tr>
                  {/* thanh tim kiem */}

                  <SearchAddDeTai></SearchAddDeTai>
                </thead>

                <tbody>
                  {dataYearShow?.map((item, index) => (
                    <tr className="border border-[#eee]">
                      <td className="border border-[#eee] text-center p-3">
                        {(page - 1) * size + index + 1}
                      </td>

                      <td className="border-x-0 border-[#eee] text-center p-3">
                        {item.year}
                      </td>
                      <td className="border-x-0 border-[#eee] text-center p-3">
                        {item.count}
                      </td>
                      <td className="border-x-0 border-[#eee] text-center p-3">
                        <button
                          type="button"
                          onClick={() => {
                            handleOpenCloseDS();
                          }}
                        >
                          <span className="font-medium text-sm text-[#1890FF]">
                            Xem danh sách
                          </span>
                        </button>
                      </td>
                      <td className="border-x-0 border-[#eee] text-center p-3">
                        {item.timeCreate}
                      </td>

                      {/* <td>{item.type}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* footer  */}
          <footer className="h-[60px]">
            <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
              <button
                type="button"
                className="border-[#E2E3E9] text-[#172B4D] font-normal w-[57px] h-[32px]  bg-inherit border rounded-[3px]"
                onClick={() => {
                  handleOpenCloseDS();
                }}
              >
                Đóng
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
