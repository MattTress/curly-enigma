import { useEffect, useState } from "react";
import { createClass, deleteClassById } from "../../services/danhmuc.service";
import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import request from "../../utils/request";
import icon_quanly from "./assets/icon_quanly.svg";
import icon_gv from "./assets/icon_gv.svg";
import icon_sv from "./assets/icon_sv.svg";
import icon_X from "./assets/icon_X.svg";
import icon_save from "./assets/icon_save.svg";
import icon_up from "./assets/icon_up.svg";
import { requestPost } from "../../utils/requestPOST";
import { SearchBox } from "../User/SearchBox";
import { SearchBoxNhomDoAn } from "./SearchBoxNhomDoAn";
import { AddNhom } from "./AddNhom/AddNhom";
import { ChiTiet } from "./ChiTiet/ChiTiet";

export const NhomDoAn = () => {

  const [visibleDetail, setVisibleDetail] = useState(false);
  const [idUser, setIdUser] = useState();
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [dataEdit, setDataEdit] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [render, setRender] = useState(0);
  const [visible, setVisible] = useState(false);

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleChiTiet, setVisibleChiTiet] = useState(false);
  const [visibleA, setVisibleA] = useState(true);
  const [createNhom, setCreateNhom] = useState({
    comment: "",
    file_id: [],
    group_id: "",
    point: [],
    student_user_id: [],
    name: "",
    detai: "",
  });
  const [search, setSearch] = useState({});

  const handleSubmit = () => {
    //     request("/api/admin/user", {
    //       params: {},
    //     }).then((res) => {
    //       let responseData = res.data;
    //       setData(responseData);
    //     });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

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
    setVisibleAdd(false);
  };
  useEffect(() => {
    request("/api/student-group")
      .then((res) => {
        let responseData = res.data;
        responseData = responseData.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setData(responseData);
        handleData();
      })
      .catch((err) => {});
  }, [render]);
  const post = () => {
    requestPost("/api/student-group", {
      data: {},
    })
      .then((res) => {
        let responseData = res.data;
        handleClose();
        setRender(Date.now());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={` w-full h-full p-5 `}>
      {visibleA && (
        <>
          <div className="border-b shadow flex justify-between px-10 py-2 items-center">
            <div>Nhóm ({data.length})</div>
            <div className="flex flex-row gap-2  ">
              <button
                className="px-4 py-2 border h-[32px]  bg-blue-500 text-white flex gap-x-2 items-center rounded-[3px]"
                onClick={() => {
                  setVisible(true);
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
                Thêm nhóm
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
                    <span>Đợt</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span>Tên nhóm</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span>Đề tài</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span>Số thành viên</span>
                  </div>
                </td>
              </tr>
              {/* thanh tim kiem */}

              <SearchBoxNhomDoAn
                handleSubmit={handleSubmit}
                search={search}
                setSearch={setSearch}
                page={page}
                size={size}
                setData={setData}
                handleData={handleData}
                render={render}
              ></SearchBoxNhomDoAn>
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
                            setIdUser(item.id);
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
                          }}
                          className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                        >
                          Xóa
                        </div>
                        <div
                          key={item.id}
                          onClick={() => {
                            setVisibleChiTiet(true);
                            setVisibleA(false);
                            setIdUser(item.id);
                          }}
                          className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                        >
                          Chi tiết
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-x-0 border-[#eee] text-center p-3">
                    {item.batchProjectId}
                  </td>
                  <td className="border-x-0 border-[#eee] text-center p-3">
                    {item.name}
                  </td>
                  <td className="border-x-0 border-[#eee] text-center p-3">
                    {item.topicId}
                  </td>
                  <td className="border-x-0 border-[#eee] text-center p-3">
                    {/* {item.address} */}
                  </td>

                  {/* <td>{item.type}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          {visibleAdd && (
            <AddNhom
              createNhom={createNhom}
              setCreateNhom={setCreateNhom}
              handleClose={handleClose}
              idUser={idUser}
              setIdUser={setIdUser}
              page={page}
              setPage={setPage}
              size={size}
              setSize={setSize}
              render={render}
              setData={setData}
              dataShow={dataShow}
              setDataShow={setDataShow}
              totalPage={totalPage}
              setTotalPage={setTotalPage}
            />
          )}
        </>
      )}

      {visibleChiTiet && (
        <ChiTiet
          visibleChiTiet={visibleChiTiet}
          setVisibleChiTiet={setVisibleChiTiet}
        />
      )}
    </div>
  );
};
