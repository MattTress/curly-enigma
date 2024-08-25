import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import icon_X from "./assets/icon_X.svg";
import icon_save from "./assets/icon_save.svg";
import icon_up from "./assets/icon_up.svg";
import { AddDeTaiNam } from "./AddDeTai/AddDeTaiNam.js";
import { useEffect, useState } from "react";
import request from "../../../utils/request";
import { requestPost } from "../../../utils/requestPOST";

import { Pagination } from "react-bootstrap";
import SearchBoxDeTai from "./SearchBoxDeTai";
import { BtnChoiceDeTai } from "./BtnChoiceDeTai";
import { DachSachDeTai } from "./DanhSachDeTai.js";

export const DeTaiTheoNam = (props) => {
  const {
    today,
    data,
    dataYear,
    setVisibleAdd,
    isStorage,
    setIsStorage,
    isTopicOfYear,
    setIsTopicOfYear,
    isThongKe,
    setIsThongKe,
    handleSubmit,
    handleDeleteTopic,
    search,
    setSearch,
    page,
    size,
    dataShow,
    setDataYear,
    setRender,
    render,
    dataYearShow,
    visibleAdd,
    totalRow,
    setPage,
    setSize,
    setTotalPage,
    setDataYearShow,
    setDataShow,
  } = props;
  const [isOpenDanhSach, setIsOpenDanhSach] = useState(false);
  const [idDeTai, setIdDeTai] = useState("");
  const [year, setYear] = useState("");
  const handleOpenCloseDS = (e) => {
    setIsOpenDanhSach(!isOpenDanhSach);
  };

  useEffect(() => {
    handleDataYear();
  }, [dataYear, page, size]);
  useEffect(() => {
    request(`/api/topics-of-year/topic-year`).then((res) => {
      let responseData = res.data;
      // sort data theo createdAt
      responseData = responseData.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setDataYear(responseData);
      handleDataYear();
    });
  }, [render]);
  const postYear = (isApply, isDraft) => {
    requestPost(`/api/topics-of-year`, {
      params: {
        year: year,
      },
      body: {
        content: "string",
        description: "string",
        isApply: true,
        isDraft: true,
        name: "string",
        timeStart: "2011-11-11",
      },
    }).then((res) => {
      handleClose();
    });
  };
  const handleDataYear = () => {
    const calTotalPage = Math.ceil(dataYear.length / size);
    setTotalPage(calTotalPage);
    const dataPagination = dataYear.slice((page - 1) * size, page * size);
    setDataYearShow(dataPagination);
  };

  const handleClose = () => {
    // setVisible(false);
    setVisibleAdd(false);
    setIdDeTai("");
    setYear("");
  };
  return (
    <div className={` w-full h-full p-5 `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>Kho đề tài ({data.length})</div>
        <div className="flex flex-row gap-2  ">
          <button
            className="px-4 py-2 border h-[32px]  bg-blue-500 text-white flex gap-x-2 items-center rounded-[3px]"
            onClick={() => {
              setVisibleAdd(true);
            }}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10.7125H15"
                stroke="#F7F7F8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 15.6506V5.77443"
                stroke="#F7F7F8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Thêm đề tài theo năm
          </button>
        </div>
      </div>
      <table className="w-full ">
        <thead className={` border border-[#eee] relative w-full `}>
          <tr>
            <td className="h-[68px]">
              <BtnChoiceDeTai
                isStorage={isStorage}
                setIsStorage={setIsStorage}
                isTopicOfYear={isTopicOfYear}
                setIsTopicOfYear={setIsTopicOfYear}
                isThongKe={isThongKe}
                setIsThongKe={setIsThongKe}
              ></BtnChoiceDeTai>
            </td>
          </tr>

          <tr>
            <td className={`text-center w-[40px]  `}>STT</td>
            <td className={`text-center w-[40px] `}>
              <img className="m-auto" src={icon_stt} alt="" />
            </td>
            <td className={``}>
              <div className="justify-center  flex flex-row">
                <img src={icon_lenxuong} />
                <span>Năm</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Số lượng đề tài</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Dánh sách đề tài</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Ngày tạo</span>
              </div>
            </td>
          </tr>
          {/* thanh tim kiem */}

          <SearchBoxDeTai
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
            page={page}
            size={size}
            setDataYear={setDataYear}
            handleDataYear={handleDataYear}
            render={render}
          ></SearchBoxDeTai>
        </thead>

        <tbody>
          {dataYearShow?.map((item, index) => (
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
                      onClick={() => {}}
                      className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                    >
                      Sửa
                    </div>
                    <div
                      key={item.id}
                      onClick={() => {
                        handleDeleteTopic(item.id);
                      }}
                      className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                    >
                      Xóa
                    </div>
                  </div>
                </div>
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
      <Pagination
        currentPage={page}
        pageSize={size}
        totalRow={dataYear.length}
        onPageChange={setPage}
        onSizeChange={setSize}
      />

      {visibleAdd && (
        <AddDeTaiNam
          postYear={postYear}
          handleClose={handleClose}
          isStorage={isStorage}
          setIsStorage={setIsStorage}
          isTopicOfYear={isTopicOfYear}
          setIsTopicOfYear={setIsTopicOfYear}
          isThongKe={isThongKe}
          setIsThongKe={setIsThongKe}
          dataShow={dataShow}
          handleDeleteTopic={handleDeleteTopic}
          setPage={setPage}
          setSize={setSize}
          data={data}
          page={page}
          size={size}
          setDataShow={setDataShow}
          setTotalPage={setTotalPage}
          year={year}
          setYear={setYear}
          idDeTai={idDeTai}
          setIdDeTai={setIdDeTai}
        />
      )}
      {isOpenDanhSach && (
        <DachSachDeTai
          handleOpenCloseDS={handleOpenCloseDS}
          dataYearShow={dataYearShow}
          // handleSubmit={handleSubmit}
          // search={search}
          // setSearch={setSearch}
          // page={page}
          // size={size}
          // handleData={handleData}
          // render={render}
        />
      )}
    </div>
  );
};
