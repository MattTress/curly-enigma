import icon_action from "./assets/icon_action.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import SearchBoxDeTai from "./SearchBoxDeTai.js";
import { AddDeTai } from "./AddDeTai/AddDeTai.js";
import { BtnChoiceDeTai } from "./BtnChoiceDeTai.js";
import Pagination from "../../layout/paniga/Pagination.js";
import request from "../../../utils/request.js";
import { useEffect } from "react";
import { requestPost } from "../../../utils/requestPOST.js";
import { deleteTopicById } from "../../../services/detai.service.js";

export const Kho = (props) => {
  const {
    data,
    setVisibleAdd,
    isStorage,
    setIsStorage,
    isTopicOfYear,
    setIsTopicOfYear,
    isThongKe,
    setIsThongKe,
    setRender,
    search,
    setSearch,
    page,
    size,
    setData,
    setDataShow,
    render,
    dataShow,
    visibleAdd,
    totalRow,
    setPage,
    setSize,
    setTotalPage,
    createDeTai,
    setCreateDeTai,
    today,
  } = props;
  const handleSubmit = () => {
    request("/api/topic", {}).then((res) => {
      let responseData = res.data;
      setData(responseData);
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  // get user data
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
      setData(responseData);
      handleData();
    });
  }, [render]);

  useEffect(() => {
    handleData();
  }, [data, page, size]);

  const handleData = () => {
    const calTotalPage = Math.ceil(data.length / size);
    setTotalPage(calTotalPage);
    const dataPagination = data.slice((page - 1) * size, page * size);
    setDataShow(dataPagination);
  };

  const handleClose = () => {
    // setVisible(false);
    setVisibleAdd(false);
    setCreateDeTai({
      content: "",
      description: "",
      isApply: true,
      isDraft: true,
      name: "",
    });
  };
  const post = async (isApply, isDraft) => {
    requestPost("/api/topic", {
      data: {
        content: createDeTai.content,
        description: createDeTai.description,
        isApply: isApply,
        isDraft: isDraft,
        name: createDeTai.name,
        timeStart: today,
      },
    })
      .then((res) => {
        let responseData = res.data;
        // sort data theo createdAt

        handleClose();
        setRender(Date.now());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteTopic = (id) => {
    deleteTopicById(id);
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
            Thêm đề tài
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
                <span>Tên đề tài</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Mô tả</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Trạng thái</span>
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
            setData={setData}
            handleData={handleData}
            render={render}
          ></SearchBoxDeTai>
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
                {item.name}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.description}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.isApply === false && item.isDraft === true ? "Nháp" : ""}
                {item.isApply === false && item.isDraft === false
                  ? "Xét duyệt"
                  : ""}
                {item.isApply === true && item.isDraft === false
                  ? "Áp dụng"
                  : ""}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.timeStart}
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        pageSize={size}
        totalRow={data.length}
        onPageChange={setPage}
        onSizeChange={setSize}
      />

      {visibleAdd && (
        <AddDeTai
          handleClose={handleClose}
          post={post}
          createDeTai={createDeTai}
          setCreateDeTai={setCreateDeTai}
          handleData = {handleData}
          render ={render}
        />
      )}
    </div>
  );
};
