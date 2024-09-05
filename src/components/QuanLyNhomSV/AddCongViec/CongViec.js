import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Bold, ClassicEditor, Essentials, Heading, Italic } from "ckeditor5";
import { useState } from "react";

export const CongViec = (props) => {

  const { visibleAddCongViec, setAddCongViec } = props;
  const [tt, setTt] = useState('')
  const [ttt, setTtt] = useState('')
  return (
    <div className="fixed top-0 left-0 w-full h-full  z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="relative mx-auto  z-20 w-[850px] bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full min-h-[1000px] relative">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm công việc nhóm</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col  items-center h-[56rem] gap-3  text-start font-medium  shadow-md ">
            <div className="w-[750px] mt-2">
              <label htmlFor="">
                <h3>Tên công việc</h3>
                <input
                  type="text"
                  className="w-[750px] px-2 py-1 border rounded-[3px]"
                  placeholder="Nhập tên"
                  onMouseOver={() => {
                    console.log("sssdadad");
                  }}
                />
              </label>
            </div>
            <div className="flex flex-row gap-[4.4rem] ">
              <label htmlFor="" className="flex flex-col items-start ">
                <h3 className="text-sm font-medium">Thời gian bắt đầu</h3>
                <input
                  type="text"
                  className="w-[340px] px-2 py-1 border rounded-[3px]"
                  placeholder="Chọn thời gian"
                  onMouseOver={() => {
                    console.log("sssdadad");
                  }}
                />
              </label>
              <label htmlFor="" className="flex flex-col items-start ">
                <h3 className="text-sm font-medium">Thời gian kết thúc</h3>
                <input
                  type="text"
                  className="w-[340px] px-2 py-1 border rounded-[3px]"
                  placeholder="Chọn thời gian"
                  onClick={() => {}}
                />
              </label>
            </div>
            <div className=" w-[750px] h-[230px]">
              {" "}
              <div className="w-[750px] h-[159px]">
                <label
                  htmlFor="noiDung"
                  className="flex flex-col items-start gap-1 w-[750px] h-[159px]"
                >
                  <h2 className="font-medium text-sm ">Nội dung</h2>
                  <CKEditor
                    id="noiDung"
                    editor={ClassicEditor}
                    data={[]}
                    onChange={(event, editor) => {
                      // const data = editor.getData();
                      // setCreateDeTai({
                      //   ...createDeTai,
                      //   content: data,
                      // });
                    }}
                    config={{
                      toolbar: {
                        items: [
                          "undo",
                          "redo",
                          "|",
                          "bold",
                          "italic",
                          "underline",
                          "strikethrough",
                          "heading",
                        ],
                      },
                      plugins: [Heading, Bold, Essentials, Italic],
                      licenseKey: "<YOUR_LICENSE_KEY>",
                      mention: {
                        // Mention configuration
                      },

                      initialData: "",
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-[4.4rem] ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn thành viên</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn thành viên"
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  {/* <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav> */}
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn trạng thái</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    value={tt}
                    onChange={(e)=>{

                    }}
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]" onClick={(e)=>{
                        setTt('Mới')
                      }}>
                        Mới
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]"
                      onClick={(e)=>{
                        setTt('Đang làm')
                      }}>
                        Đang làm
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]"
                      onClick={(e)=>{
                        setTt('Hoàn thành')
                      }}>
                        Hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
              <div className="w-[750px] h-[52px]">
                <label htmlFor="" className="flex flex-col items-start ">
                  <h3 className="text-sm font-medium">Nhiệm vụ</h3>
                  <input
                    type="text"
                    className="w-[750px] px-2 py-1 border rounded-[3px]"
                    onClick={() => {}}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-[4.4rem] ">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn thành viên</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn thành viên"
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn trạng thái</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    
                    placeholder="Chọn trạng thái"
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Mới
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Đang làm
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
              <div className="w-[750px] h-[52px]">
                <label htmlFor="" className="flex flex-col items-start ">
                  <h3 className="text-sm font-medium">Nhiệm vụ</h3>
                  <input
                    type="text"
                    className="w-[750px] px-2 py-1 border rounded-[3px]"
                    onClick={() => {}}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-[4.4rem]">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn thành viên</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn thành viên"
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  {/* <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav> */}
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn trạng thái</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Mới
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Đang làm
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
              <div className="w-[750px] h-[52px]">
                <label htmlFor="" className="flex flex-col items-start ">
                  <h3 className="text-sm font-medium">Nhiệm vụ</h3>
                  <input
                    type="text"
                    className="w-[750px] px-2 py-1 border rounded-[3px]"
                    onClick={() => {}}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-[4.4rem]">
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn thành viên</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn thành viên"
                    onMouseOver={() => {
                      console.log("sssdadad");
                    }}
                  />
                  {/* <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Không hoàn thành
                      </li>
                    </ul>
                  </nav> */}
                </label>
                <label
                  htmlFor=""
                  className="flex flex-col items-start relative dropDown "
                >
                  <h3 className="text-sm font-medium">Chọn trạng thái</h3>
                  <input
                    type="text"
                    className="w-[340px] px-2 py-1 border rounded-[3px]"
                    placeholder="Chọn trạng thái"
                    onClick={() => {}}
                  />
                  <nav className="absolute z-40 top-[3.4rem] bg-white child">
                    <ul>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Mới
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Đang làm
                      </li>
                      <li className="border rounded-sm p-1 hover:bg-[#E2E3E9]  w-[316px]">
                        Hoàn thành
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
              <div className="w-[750px] h-[52px]">
                <label htmlFor="" className="flex flex-col items-start ">
                  <h3 className="text-sm font-medium">Nhiệm vụ</h3>
                  <input
                    type="text"
                    className="w-[750px] px-2 py-1 border rounded-[3px]"
                    onClick={() => {}}
                  />
                </label>
              </div>
            </div>
          </div>
          {/* footer  */}
          <footer className="h-[60px] ">
            <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
              <button
                type="button"
                className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
                onClick={() => setAddCongViec(false)}
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
