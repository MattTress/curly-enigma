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
import { SearchTK } from "./SearchTK.js";

export const ThongKe = (props) => {
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

  return (
    <div className={` w-full h-full p-5 `}>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>Thống kê</div>
      </div>
      <table className="w-full ">
        <thead className={`  relative w-full `}>
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
            {/* Search */}
            <SearchTK />
          </tr>
        </thead>
      </table>
      <div className="grid grid-cols-2 ">
        <table className="w-[680px] h-[478px] font-semibold border border-[#E2E3E9] rounded-[3px]">
          <thead>
            <tr className="font-semibold border border-[#E2E3E9] rounded-[3px]">
              <td>
                <h3 className="text-[#1890FF] text-[18px] ml-4">
                  Đề tài được sử dụng nhiều nhất
                </h3>
              </td>
              <td>
                <div className="flex flex-row gap-2 items-center justify-end mr-4">
                  <h4 className="">Số lượng</h4>
                  <select
                    name="theMost"
                    id=""
                    className="border border-[#E2E3E9] text-[#9EA3A9] rounded-[3px] w-[74px] h-[32px]"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
            </tr>
          </thead>

          <tr className="bg-[#C0C8D1] h-[48px]">
            <td className="">
              <h3 className="text-white ml-4">Tên đề tài</h3>
            </td>
            <td className="">
              <h3 className="text-white text-end  mr-4">Số lượng</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 1</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 2</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 3</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 4</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
        </table>
        <table className="w-[680px] h-[478px] font-semibold border border-[#E2E3E9] rounded-[3px]">
          <thead>
            <tr className="font-semibold border border-[#E2E3E9] rounded-[3px]">
              <td>
                <h3 className="text-[#1890FF] text-[18px] ml-4">
                  Đề tài được sử dụng nhiều nhất
                </h3>
              </td>
              <td>
                <div className="flex flex-row gap-2 items-center justify-end mr-4">
                  <h4 className="">Số lượng</h4>
                  <select
                    name="theMost"
                    id=""
                    className="border border-[#E2E3E9] text-[#9EA3A9] rounded-[3px] w-[74px] h-[32px]"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
            </tr>
          </thead>

          <tr className="bg-[#C0C8D1] h-[48px]">
            <td className="">
              <h3 className="text-white ml-4">Tên đề tài</h3>
            </td>
            <td className="">
              <h3 className="text-white text-end  mr-4">Số lượng</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 1</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 2</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 3</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 4</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
        </table>
        <table className="w-[680px] h-[478px] font-semibold border border-[#E2E3E9] rounded-[3px]">
          <thead>
            <tr className="font-semibold border border-[#E2E3E9] rounded-[3px]">
              <td>
                <h3 className="text-[#1890FF] text-[18px] ml-4">
                  Đề tài được sử dụng nhiều nhất
                </h3>
              </td>
              <td>
                <div className="flex flex-row gap-2 items-center justify-end mr-4">
                  <h4 className="">Số lượng</h4>
                  <select
                    name="theMost"
                    id=""
                    className="border border-[#E2E3E9] text-[#9EA3A9] rounded-[3px] w-[74px] h-[32px]"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
            </tr>
          </thead>

          <tr className="bg-[#C0C8D1] h-[48px]">
            <td className="">
              <h3 className="text-white ml-4">Tên đề tài</h3>
            </td>
            <td className="">
              <h3 className="text-white text-end  mr-4">Số lượng</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 1</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 2</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 3</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 4</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
        </table>
        <table className="w-[680px] h-[478px] font-semibold border border-[#E2E3E9] rounded-[3px]">
          <thead>
            <tr className="font-semibold border border-[#E2E3E9] rounded-[3px]">
              <td>
                <h3 className="text-[#1890FF] text-[18px] ml-4">
                  Đề tài được sử dụng nhiều nhất
                </h3>
              </td>
              <td>
                <div className="flex flex-row gap-2 items-center justify-end mr-4">
                  <h4 className="">Số lượng</h4>
                  <select
                    name="theMost"
                    id=""
                    className="border border-[#E2E3E9] text-[#9EA3A9] rounded-[3px] w-[74px] h-[32px]"
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </td>
            </tr>
          </thead>

          <tr className="bg-[#C0C8D1] h-[48px]">
            <td className="">
              <h3 className="text-white ml-4">Tên đề tài</h3>
            </td>
            <td className="">
              <h3 className="text-white text-end  mr-4">Số lượng</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 1</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 2</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 3</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
          <tr className="">
            <td className="">
              <h3>Đề tài 4</h3>
            </td>
            <td className="">
              <h3>6</h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
