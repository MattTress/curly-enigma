import { useEffect, useState } from "react";
import {
  createField,
  deleteFieldById,
  getFieldById,
  updateField,
} from "../../services/danhmuc.service";
import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import request from "../../utils/request";

const Field = () => {
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [dataEdit, setDataEdit] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [render, setRender] = useState(0);
  const [fieldCode, setFieldCode] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [isShowHide, setIsShowHide] = useState(true);
  useEffect(() => {
    request("/api/field").then((res) => {
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

  const handleDeleteData = (id) => {
    deleteFieldById(id);
  };
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
    setVisible(false);
    setVisibleEdit(false);
    setVisibleAdd(false);
    setFieldCode("");
    setFieldName("");
    setDataEdit();
  };

  const handleCreateField = () => {
    const data = {
      name: fieldName,
      code: fieldCode,
    };
    createField(data).then((res) => {
      handleClose();
      setRender(Date.now());
    });
  };

  const handleUpdate = () => {
    const data = {
      name: fieldName,
      code: fieldCode,
    };
    updateField(dataEdit.id, data)
      .then((res) => {
        handleClose();
        setRender(Date.now());
      })
      .catch((e) => {
        console.log("error");
      });
  };
  const getDataById = (id) => {
    getFieldById(id).then((res) => {
      const response = res.data;
      setFieldCode(response.code);
      setFieldName(response.name);
      setDataEdit(res.data);
    });
  };
  const getDataEditField = (id) => {
    console.log(id);
    getFieldById(id).then((res) => {
      const response = res.data;
      setFieldCode(response.code);
      setFieldName(response.name);
      setDataEdit(res.data);
    });
  };

  return (
    <div className={` w-full h-full p-5 `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>Ngành nghề ({data.length})</div>
        <div>
          <button
            className="px-4 py-2 border bg-blue-500 text-white flex gap-x-2 items-center"
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
            Thêm ngành nghề
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
                <span>Mã ngành nghề</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Ngành nghề</span>
              </div>
            </td>
          </tr>
          <tr className="h-11">
            <td className={`p-1`}>
              <button
                type="button"
                className=" border   w-[32px] h-[32px] flex justify-center items-center  border-[#E2E3E9]"
              >
                <img src={icon_delflter} alt="" />
              </button>
            </td>
            <td>
              <button
                type="button"
                className=" border text-[#1890FF]   w-[92px] h-[32px] flex justify-center items-center  border-[#E2E3E9] "
              >
                Tìm kiếm
              </button>
            </td>
            <td className="text-center ">
              <input
                className=" border w-3/4 p-1 outline-none  border-[#E2E3E9]"
                type="text"
                name=""
                id=""
                placeholder=""
              />
            </td>
            <td className="text-center  ">
              <input
                className=" border w-3/4 p-1 outline-none border-[#E2E3E9]"
                type="text"
                name=""
                id=""
              />
            </td>
          </tr>
        </thead>

        <tbody>
          {dataShow.map((item, index) => (
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
                        getDataEditField(item.id);
                        setVisibleEdit(true);
                      }}
                      className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                    >
                      Sửa
                    </div>
                    <div
                      onClick={() => {
                        handleDeleteData(item.id);
                      }}
                      className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                    >
                      Xóa
                    </div>
                  </div>
                </div>
              </td>
              <td className="border border-[#eee] text-center p-3">
                {item.code}
              </td>
              <td className="border border-[#eee] text-center p-3">
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleEdit && (
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
          <div
            className="absolute mx-auto  z-20 w-[50%] mb-30 bg-white "
            show={visibleEdit}
            title="Sửa ngành nghề"
            backdrop="static"
            handleClose={() => handleClose()}
          >
            <div className="py-6 px-12 flex gap-x-10 ">
              <div className="w-full">
                <div className="font-bold">Mã ngành nghề</div>
                <div className="mt-2 w-full">
                  <input
                    className="border px-4 py-2 rounded w-full"
                    value={fieldCode}
                    placeholder="Nhập mã"
                    onChange={(e) => {
                      setFieldCode(e.target.value);
                    }}
                    readOnly
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold">Tên ngành nghề</div>
                <div className="mt-2 w-full">
                  <input
                    className="border px-4 py-2 rounded w-full"
                    placeholder="Nhập mã"
                    onChange={(e) => {
                      setFieldName(e.target.value);
                    }}
                    value={fieldName}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end border-t px-12 py-2 gap-x-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => {
                  handleClose();
                }}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 border rounded bg-[#1890FF] text-white"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Sửa
              </button>
            </div>
          </div>
        </div>
      )}

      {visibleAdd && (
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
          <div
            className="absolute mx-auto  z-20 w-[50%] mb-30 bg-white "
            show={visibleEdit}
            title="Sửa ngành nghề"
            backdrop="static"
            handleClose={() => handleClose()}
          >
            <div className="py-6 px-12 flex gap-x-10 ">
              <div className="w-full">
                <div className="font-bold">Mã ngành nghề</div>
                <div className="mt-2 w-full">
                  <input
                    className="border px-4 py-2 rounded w-full"
                    value={fieldCode}
                    placeholder="Nhập mã"
                    onChange={(e) => {
                      setFieldCode(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold">Tên ngành nghề</div>
                <div className="mt-2 w-full">
                  <input
                    className="border px-4 py-2 rounded w-full"
                    placeholder="Nhập mã"
                    onChange={(e) => {
                      setFieldName(e.target.value);
                    }}
                    value={fieldName}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end border-t px-12 py-2 gap-x-2">
              <button
                className="px-4 py-2 border rounded"
                onClick={() => {
                  handleClose();
                }}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 border rounded bg-[#1890FF] text-white"
                onClick={() => {
                  handleCreateField();
                }}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Field;
