import icon_plus from "../assets/icon_plus.svg";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Heading,
  Underline,
  Strikethrough,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export const AddDeTai = (props) => {
  const { handleClose, post, createDeTai, setCreateDeTai } = props;
  

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[762px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm đề tài</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col justify-around items-center h-[640px] shadow-md ">
            <label
              htmlFor="nameTopic"
              className="flex flex-col items-start gap-1"
            >
              <h2 className="font-medium text-sm ">Tên đề tài</h2>
              <input
                id="nameTopic"
                type="text"
                value={createDeTai.name}
                placeholder="Nhập tên đề tài"
                className="w-[750px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                onChange={(e) => {
                  setCreateDeTai({ ...createDeTai, name: e.target.value });
                }}
              />
            </label>
            <label
              htmlFor="description"
              className="flex flex-col items-start gap-1"
            >
              <h2 className="font-medium text-sm ">Mô tả</h2>
              <input
                id="description"
                type="text"
                placeholder="Nhập mô tả"
                className="w-[750px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                value={createDeTai.description}
                onChange={(e) => {
                  setCreateDeTai({
                    ...createDeTai,
                    description: e.target.value,
                  });
                }}
              />
            </label>

            <label
              htmlFor="noiDung"
              className="flex flex-col items-start gap-1"
            >
              <h2 className="font-medium text-sm ">Nội dung</h2>
              <CKEditor
                id="noiDung"
                editor={ClassicEditor}
                data={createDeTai.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setCreateDeTai({
                    ...createDeTai,
                    content: data,
                  });
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
                  plugins: [
                    Heading,
                    Bold,
                    Essentials,
                    Italic,
                    Mention,
                    Paragraph,
                    Undo,
                    Underline,
                    Strikethrough,
                  ],
                  licenseKey: "<YOUR_LICENSE_KEY>",
                  mention: {
                    // Mention configuration
                  },

                  initialData: "",
                }}
              />

              {/* <input
                
                type="text"
                placeholder="Nhập tên đợt"
                className="w-[750px] h-[149px] p-3 border border-[#E2E3E9] rounded"
                value={createDeTai.content}
                onChange={(e) => {
                  setCreateDeTai({
                    ...createDeTai,
                    content: e.target.value,
                  });
                }}
              /> 
              */}
            </label>
            <label
              htmlFor="tieuChi"
              className="flex flex-col items-start gap-1"
            >
              <h2 className="font-medium text-sm ">Tiêu chí</h2>
              <div className="w-[750px] h-[202px] p-3 border border-[#E2E3E9] rounded">
                <button
                  type="button"
                  className="flex flex-row gap-1 items-center pb-3"
                >
                  <img src={icon_plus} alt="" />
                  <span className="text-[#1890FF] font-medium">
                    Thêm tiêu chí
                  </span>
                </button>
                <input
                  id="tieuChi"
                  type="text"
                  placeholder="Nhập tiêu chí"
                  className="w-[718px] h-[40px] p-3 border border-[#E2E3E9] rounded"
                  value={createDeTai.content}
                  onChange={(e) => {
                    setCreateDeTai({ ...createDeTai, content: e.target.value });
                  }}
                />
              </div>
            </label>
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
                  // setCreateDeTai({ ...createDeTai, isDraft: true });
                  // setCreateDeTai({ ...createDeTai, isApply: false });
                  post(false, true);
                }}
              >
                Nháp
              </button>
              <button
                type="button"
                className="border-[#E2E3E9] text-[#FFFFFF] font-normal w-[83px] h-[32px]  bg-[#1890FF] border rounded-[3px]"
                onClick={() => {
                  // setCreateDeTai({ isDraft: false, ...createDeTai });
                  // setCreateDeTai({ isApply: false, ...createDeTai });
                  post(false, false);
                }}
              >
                Xét duyệt
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
