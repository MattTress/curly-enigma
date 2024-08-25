import icon_stt from "../assets/icon_stt.svg";
import icon_lenxuong from "../assets/icon_lenxuong.svg";
import icon_cloud from "../assets/icon_cloud.svg";
import { CongViec } from "../AddCongViec/CongViec";
import { useState } from "react";
export const ChiTietSV = (props) => {
  const [visibleAddCongViec, setAddCongViec] = useState(false);
  return (
    <div>
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>
          <h3 className="font-semibold">Chi tiết nhóm 1</h3>
        </div>
      </div>

      <div className="mt-4 p-6">
        <div className="relative">
          <div className="pl-6 pb-6 flex flex-col gap-2 ">
            <p>Đợt 1 4/8/2022 - 20/12/2022</p>
            <p>Nhóm 1</p>
            <p>Đề tài xây dựng web A</p>
          </div>
          <button
            type="button"
            className="absolute border border-[#1890FF] rounded-[5px] mb-4  text-[#1890FF] top-0 right-1 "
          >
            <h3 className="p-1">Chứng nhận</h3>
          </button>
        </div>

        <table className="w-full ">
          <thead className={` border border-[#eee] relative `}>
            <tr>
              <td className={`text-center w-[40px] font-medium `}>STT</td>

              <td className={``}>
                <div className="justify-center  flex flex-row">
                  <img src={icon_lenxuong} />
                  <span className="font-medium">Mã sinh viên</span>
                </div>
              </td>
              <td className={`text-center`}>
                <div className="flex flex-row justify-center">
                  <img src={icon_lenxuong} alt="" />
                  <span className="font-medium">Họ và tên</span>
                </div>
              </td>
              <td className={`text-center`}>
                <div className="flex flex-row justify-center">
                  <img src={icon_lenxuong} alt="" />
                  <span className="font-medium">Vai trò</span>
                </div>
              </td>
              <td className={`text-center`}>
                <div className="flex flex-row justify-center">
                  <img src={icon_lenxuong} alt="" />
                  <span className="font-medium">Báo cáo</span>
                </div>
              </td>
              <td className={`text-center w-[120px] `}>
                <div className="flex flex-row justify-center">
                  <img src={icon_lenxuong} alt="" />
                  <span className="font-medium">Điểm cá nhân</span>
                </div>
              </td>
              <td className={`text-center w-[120px]`}>
                <div className="flex flex-row justify-center ">
                  <img src={icon_lenxuong} alt="" />
                  <span className="font-medium">Điểm nhóm</span>
                </div>
              </td>
            </tr>
            {/* thanh tim kiem */}
          </thead>

          <tbody>
            <tr className="border border-[#eee]">
              <td className="border border-[#eee] text-center p-3">
                {/* {(page - 1) * size + index + 1} */}1
              </td>
              <td className="border border-[#eee] text-center p-3">{"Mã 4"}</td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trần Văn A"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trường nhóm"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[278px]">
                <div className="relative ">
                  <input
                    type="text"
                    value={"BaocaodoanNHOM1.docx"}
                    className="border rounded-[5px] w-[278px] text-[#1890FF]"
                  />
                  <img
                    src={icon_cloud}
                    alt=""
                    className="absolute top-[3px] right-[12px]"
                  />
                </div>
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
            <tr className="border border-[#eee]">
              <td className="border border-[#eee] text-center p-3">
                {/* {(page - 1) * size + index + 1} */}1
              </td>
              <td className="border border-[#eee] text-center p-3">{"Mã 4"}</td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trần Văn A"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trường nhóm"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[278px]">
                <div className="relative ">
                  <input
                    type="text"
                    value={"BaocaodoanNHOM1.docx"}
                    className="border rounded-[5px] w-[278px] text-[#1890FF]"
                  />
                  <img
                    src={icon_cloud}
                    alt=""
                    className="absolute top-[3px] right-[12px]"
                  />
                </div>
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
            <tr className="border border-[#eee]">
              <td className="border border-[#eee] text-center p-3">
                {/* {(page - 1) * size + index + 1} */}1
              </td>
              <td className="border border-[#eee] text-center p-3">{"Mã 4"}</td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trần Văn A"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trường nhóm"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[278px]">
                <div className="relative ">
                  <input
                    type="text"
                    value={"BaocaodoanNHOM1.docx"}
                    className="border rounded-[5px] w-[278px] text-[#1890FF]"
                  />
                  <img
                    src={icon_cloud}
                    alt=""
                    className="absolute top-[3px] right-[12px]"
                  />
                </div>
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
            <tr className="border border-[#eee]">
              <td className="border border-[#eee] text-center p-3">
                {/* {(page - 1) * size + index + 1} */}1
              </td>
              <td className="border border-[#eee] text-center p-3">{"Mã 4"}</td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trần Văn A"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {"Trường nhóm"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[278px]">
                <div className="relative ">
                  <input
                    type="text"
                    value={"BaocaodoanNHOM1.docx"}
                    className="border rounded-[5px] w-[278px] text-[#1890FF]"
                  />
                  <img
                    src={icon_cloud}
                    alt=""
                    className="absolute top-[3px] right-[12px]"
                  />
                </div>
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3 w-[120px]">
                <input type="text" className="border rounded w-[120px]" />
              </td>

              {/* <td>{item.type}</td> */}
            </tr>
          </tbody>
        </table>
        <div className="w-full h-fit mt-4 px-4  py-4  border rounded-[5px]">
          <button
            type="button"
            className="border border-[#1890FF] rounded-[5px] mb-4  text-[#1890FF] "
            onClick={(e) => {
              setAddCongViec(true);
            }}
          >
            <h3 className="p-1">Thêm công việc nhóm</h3>
          </button>
          <div className="w-full h-[5rem]   border rounded-[5px]">
            <p className="">Chưa có công việc nào của nhóm</p>
          </div>
        </div>
      </div>
      {visibleAddCongViec && (
        <CongViec
          visibleAddCongViec={visibleAddCongViec}
          setAddCongViec={setAddCongViec}
        />
      )}
    </div>
  );
};
