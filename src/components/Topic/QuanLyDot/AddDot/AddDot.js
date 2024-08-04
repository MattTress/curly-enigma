import { useEffect } from "react";
import { requestPost } from "../../../../utils/requestPOST";

export const AddDot = (props) => {
  const {
    handleClose,
    createBatch,
    setCreateBatch,
    handleData,
    render,
    setRender,
    setData,
    post
  } = props;

  
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[395px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm đợt</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col items-center gap-8  h-[280px] shadow-md pt-6 ">
            <div className="flex flex-col gap-8">
              {/* year  */}
              <label htmlFor="year" className="flex flex-col items-start gap-1">
                <h2 className="font-medium text-sm ">Áp dụng đề tài của năm</h2>
                <input
                  id="year"
                  type="text"
                  value={createBatch.year}
                  placeholder="Chọn năm"
                  className="w-[750px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                  onChange={(e) => {
                    setCreateBatch({ ...createBatch, year: e.target.value });
                  }}
                />
              </label>
              {/* name batch  */}
              <label
                htmlFor="nameBatch"
                className="flex flex-col items-start gap-1"
              >
                <h2 className="font-medium text-sm ">Tên đợt</h2>
                <input
                  id="nameBatch"
                  type="text"
                  value={createBatch.name}
                  placeholder="Nhập tên đợt"
                  className="w-[750px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                  onChange={(e) => {
                    setCreateBatch({ ...createBatch, name: e.target.value });
                  }}
                />
              </label>
            </div>
            <div className="flex flex-row w-[750px] justify-between">
              <div>
                {/* start year  */}
                <label
                  htmlFor="nameBatch"
                  className="flex flex-col items-start gap-1"
                >
                  <h2 className="font-medium text-sm ">Thời gian bắt đầu</h2>
                  <input
                    id="nameBatch"
                    type="text"
                    value={createBatch.timeStart}
                    placeholder="Chọn thời gian"
                    className="w-[340px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                    onChange={(e) => {
                      setCreateBatch({
                        ...createBatch,
                        timeStart: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
              <div>
                {/* end year */}
                <label
                  htmlFor="nameBatch"
                  className="flex flex-col items-start gap-1"
                >
                  <h2 className="font-medium text-sm ">Thời gian kết thúc</h2>
                  <input
                    id="nameBatch"
                    type="text"
                    value={createBatch.timeEnd}
                    placeholder="Chọn thời gian"
                    className="w-[340px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                    onChange={(e) => {
                      setCreateBatch({
                        ...createBatch,
                        timeEnd: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          {/* footer  */}
          <footer className="h-[60px]">
            <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
              <button
                type="button"
                className="border-[#E2E3E9] text-[#172B4D] font-normal w-[57px] h-[32px]  bg-inherit border rounded-[3px]"
                onClick={() => {
                  handleClose();
                }}
              >
                Hủy
              </button>
              <button
                type="button"
                className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
                onClick={() => {
                  post();
                }}
              >
                Thêm
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
