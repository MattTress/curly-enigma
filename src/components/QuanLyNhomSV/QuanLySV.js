import { useEffect, useState } from "react";
import icon_action from "./assets/icon_action.svg";
import icon_stt from "./assets/icon_stt.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import { SearchBoxNhomDoAn } from "../QuanLyNhomSV_GV/SearchBoxNhomDoAn";
import { SearchBoxNhomSV } from "./SearchBoxNhomSV";
import request from "../../utils/request";
import { ChiTietSV } from "./ChiTietSV/ChiTietSV";

export const QuanLySV = (props) => {
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
  
  const handleData = () => {
    const calTotalPage = Math.ceil(data.length / size);
    setTotalPage(calTotalPage);
    const dataPagination = data.slice((page - 1) * size, page * size);
    setDataShow(dataPagination);
  };

  useEffect(() => {
    request("/api/project-group", { params: {} })
      .then((res) => {
        let responseData = res.data;
        responseData = responseData.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setData(responseData);
        handleData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);
  useEffect(() => {
    handleData();
  }, [data, page, size]);
  return (
    <div className={` w-full h-full p-5 `}>
      {visibleA && (
        <>
          <div className="border-b shadow flex justify-between px-10 py-2 items-center">
            <div>
              <h3 className="font-semibold ">Đồ án ({data.length}) </h3>
            </div>
          </div>
          <table className="w-full ">
            <thead className={` border border-[#eee] relative `}>
              <tr>
                <td className={`text-center w-[40px]  `}>
                  <h3 className="font-semibold ">STT</h3>
                </td>
                <td className={`text-center w-[40px] `}>
                  <img className="m-auto" src={icon_stt} alt="" />
                </td>
                <td className={``}>
                  <div className="justify-center  flex flex-row">
                    <img src={icon_lenxuong} />
                    <span className="font-semibold ">Đợt</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span className="font-semibold ">Tên nhóm</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span className="font-semibold ">Đề tài</span>
                  </div>
                </td>
                <td className={`text-center`}>
                  <div className="flex flex-row justify-center">
                    <img src={icon_lenxuong} alt="" />
                    <span className="font-semibold ">Số thành viên</span>
                  </div>
                </td>
              </tr>
              {/* thanh tim kiem */}

              <SearchBoxNhomSV></SearchBoxNhomSV>
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

                      <div className="child rounded-lg border-2 border-[#c4c4c4]  shadow-md  bg-white z-10">
                        <div
                          onClick={() => {}}
                          className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                        >
                          Sửa
                        </div>
                        <div
                          onClick={() => {}}
                          className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                        >
                          Xóa
                        </div>
                        <div
                          onClick={() => {
                            setVisibleA(false);
                            setVisibleChiTiet(true);
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
                  <td className="border-x-0 border-[#eee] text-center p-3"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {visibleChiTiet && (
        <ChiTietSV
        
        />
      )}
    </div>
  );
};
