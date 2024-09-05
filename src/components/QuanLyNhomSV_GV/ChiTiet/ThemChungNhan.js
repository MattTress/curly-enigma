export const ThemChungNhan = (props) => {
  const { addCN, setAddCN } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full  z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="relative mx-auto  z-20 w-[50%] h-[661px] bg-white "
        title="Thêm thành viên"
      >
        <div className="w-[100%] h-[661px] relative">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm công việc nhóm</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col justify-evenly items-center h-[541px] shadow-md ">
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52 ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown"
                >
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative  dropDown"
                >
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52 ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown"
                >
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative  dropDown"
                >
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Yếu
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Trung bình
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Khá
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Giỏi
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52 ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown"
                >
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative  dropDown"
                >
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Yếu
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Trung bình
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Khá
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Giỏi
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52 ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown"
                >
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative  dropDown"
                >
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Yếu
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Trung bình
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Khá
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Giỏi
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52 ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown"
                >
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative  dropDown"
                >
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    readOnly
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Yếu
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Trung bình
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Khá
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Giỏi
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </div>
            {/* <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52">
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52">
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
              </div>
            </div>
            <div className="text-start font-medium">
              {" "}
              <h3 className=" ">Trần Văn A</h3>
              <div className="flex flex-row gap-52">
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Trạng thái</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
                <label htmlFor="" className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">Kết quả đồ án</h3>
                  <input
                    type="text"
                    className="w-[316px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                  />
                </label>
              </div>
            </div> */}
          </div>
          {/* footer  */}
          <footer className="h-[60px]">
            <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
              <button
                type="button"
                className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
                onClick={() => {
                  setAddCN(false);
                }}
              >
                Hủy
              </button>
              <button
                type="button"
                className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
                onClick={() => {}}
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
