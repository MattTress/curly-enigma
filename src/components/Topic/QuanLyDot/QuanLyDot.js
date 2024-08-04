import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import icon_quanly from "./assets/icon_quanly.svg";
import icon_gv from "./assets/icon_gv.svg";
import icon_sv from "./assets/icon_sv.svg";
import icon_X from "./assets/icon_X.svg";
import icon_save from "./assets/icon_save.svg";
import icon_up from "./assets/icon_up.svg";
import { useEffect, useState } from "react";
import { SearchBox } from "../../User/SearchBox";
import request from "../../../utils/request";
import { SearchBoxQLDot } from "./SearchBoxQLDot";
import { AddDot } from "./AddDot/AddDot";
import { requestDELETE } from "../../../utils/requestDETELE";
import { requestPost } from "../../../utils/requestPOST";

export const QuanLyDot = () => {
  const [modalType, setModalType] = useState();
  const [visibleAddChoice, setVisibleAddChoice] = useState(false);
  const [visibleAddManager, setVisibleAddManager] = useState(false);
  const [visibleAddTeacher, setVisibleAddTeacher] = useState(false);
  const [visibleAddStudent, setVisibleAddStudent] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [idUser, setIdUser] = useState();
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState([]);

  const [dataEdit, setDataEdit] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [render, setRender] = useState(0);
  const [courseId, setCourseId] = useState("");
  const [visible, setVisible] = useState(false);

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [createBatch, setCreateBatch] = useState({
    name: "",
    timeEnd: "",
    timeStart: "",
    year: "",
  });
  const [search, setSearch] = useState({});

  // get user data
  useEffect(
    (event) => {
      request("/api/batch-project", {
        params: {
          name: "",
          timeEnd: "",
          timeStart: "",
          year: "",
        },
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
    },
    [render]
  );

  useEffect(() => {
    handleData();
  }, [data, page, size]);

  const handleData = () => {
    const calTotalPage = Math.ceil(data.length / size);
    setTotalPage(calTotalPage);
    const dataPagination = data.slice((page - 1) * size, page * size);
    setDataShow(dataPagination);
  };
  const handleDeleteDot = async (id) => {
    requestDELETE(`/api/batch-project/${id}`).then((res) => {
      window.location.reload();
    });
  };

  const handleClose = () => {
    setVisible(false);
    setVisibleEdit(false);
    setVisibleDetail(false);
    setVisibleAdd(false);
    setDataEdit();
    setCreateBatch({
      name: "",
      timeEnd: "",
      timeStart: "",
      year: "",
    });
  };
  // add batch
  const post = async () => {
    requestPost("/api/batch-project", {
      params: {
        name: createBatch.name,
        time_end: createBatch.timeEnd,
        time_start: createBatch.timeStart,
        year: createBatch.year,
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
  return (
    <div className={` w-full h-full p-5 `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>Thành viên ({data.length})</div>
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
            Đợt
          </button>
        </div>
      </div>
      <table className="w-full ">
        <thead className={` border border-[#eee] relative `}>
          <tr>
            <td className={`text-center w-[40px]  `}>STT</td>
            <td className={`text-center w-[40px] `}>
              <img className="m-auto" src={icon_stt} alt="" />
            </td>
            <td className={``}>
              <div className="justify-center  flex flex-row">
                <img src={icon_lenxuong} />
                <span>Áp dụng đề tài của năm</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Tên đợt</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Thời gian bắt đầu</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Thời gian kết thúc</span>
              </div>
            </td>
          </tr>
          {/* thanh tim kiem */}

          <SearchBoxQLDot
            search={search}
            setSearch={setSearch}
            page={page}
            size={size}
            setData={setData}
            handleData={handleData}
            render={render}
          ></SearchBoxQLDot>
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
                      onClick={() => {
                        setVisibleEdit(true);
                      }}
                      className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                    >
                      Sửa
                    </div>
                    <div
                      key={item.id}
                      onClick={() => {
                        setVisibleDetail(true);
                        setIdUser(item.id);
                        handleDeleteDot(item.id);
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
                {item.name}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.timeStart}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.timeEnd}
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {visibleAdd && (
        <AddDot
          createBatch={createBatch}
          setCreateBatch={setCreateBatch}
          handleClose={handleClose}
          handleData={handleData}
          render={render}
          setRender={setRender}
          setData={setData}
          post={post}
        />
      )}
    </div>
  );
};
