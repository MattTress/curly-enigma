import icon_plus from "../assets/icon_plus.svg";
import icon_action from "../assets/icon_action.svg";
import icon_delflter from "../assets/icon_delfilter.svg";
import icon_lenxuong from "../assets/icon_lenxuong.svg";
import icon_stt from "../assets/icon_stt.svg";
import icon_X from "../assets/icon_X.svg";
import icon_save from "../assets/icon_save.svg";
import icon_up from "../assets/icon_up.svg";
import { useEffect, useState } from "react";
import { SearchAddDeTai } from "../../Topic/KhoDeTai/SearchAddDeTai";
import request from "../../../utils/request";

export const ChoiceSV = (props) => {
  const {
    handleDeleteTopic,
    handleClose,
    handleSubmit,
    search,
    setSearch,
    page,
    size,
    setData,
    setTotalPage,
    render,
    dataShow,
    data,
    setPage,
    setSize,
    setDataShow,
    isOpenClose,
    setIsOpenCloseSV,
    idDeTai,
    setIdDeTai,
  } = props;
  const [dataSV, setDataSV] = useState([]);
  const [dataSVShow, setDataSVShow] = useState([]);

  useEffect(() => {
    request("/api/topic", {
      params: {},
    }).then((res) => {
      let responseData = res.data;
      // sort data theo createdAt
      responseData = responseData.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setDataSV(responseData);
      handleData();
    });
  }, [render]);
  useEffect(() => {
    handleData();
  });
  const handleData = () => {
    const calTotalPage = Math.ceil(dataSV.length / size);
    setTotalPage(calTotalPage);
    const dataPagination = dataSV.slice((page - 1) * size, page * size);
    setDataSVShow(dataPagination);
  };
  const handleCloseChoice = (e) => {
    setIsOpenCloseSV(false);
  };
  return (
    <div
      className="absolute mx-auto  z-20 w-[960px] top-[-6rem] max-h-[833px]  bg-white "
      title="Thêm thành viên"
    >
      <div className="w-full h-fit flex flex-col ">
        {/* Header */}
        <header className="flex flex-row justify-between h-[60px] shadow-md ">
          <h2 className="p-4  font-medium ">Chọn sinh viên</h2>
          <img className="p-4" src={""} alt="" onClick={() => {}} />
        </header>
        {/* body  */}
        <div className="flex justify-around items-center h-[45rem] shadow-md p-10 bg-white  gap-10 ">
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

                <SearchAddDeTai
                  handleSubmit={handleSubmit}
                  search={search}
                  setSearch={setSearch}
                  page={page}
                  size={size}
                  setData={setData}
                  // handleData={handleData}
                  render={render}
                ></SearchAddDeTai>
              </thead>

              <tbody>
                {dataSVShow?.map((item, index) => (
                  <tr className="border border-[#eee]">
                    <td className="border border-[#eee] text-center p-3">
                      {(page - 1) * size + index + 1}
                    </td>
                    <td className="border border-[#eee] text-center p-3">
                      <div className={`mx-auto relative dropDown`}>
                        <input
                          type="checkbox"
                          onClick={(e) => {
                            setIdDeTai(item.id);
                          }}
                        ></input>
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
        </div>

        {/* footer  */}
        <footer className="h-[60px]">
          <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
            <button
              type="button"
              className="border-[#E2E3E9] text-[#172B4D] font-normal w-[57px] h-[32px]  bg-inherit border rounded-[3px]"
              onClick={() => {
                handleCloseChoice();
              }}
            >
              Hủy
            </button>
            <button
              type="button"
              className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
              onClick={() => {
                setIsOpenCloseSV(false);
              }}
            >
              Xác nhận
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
