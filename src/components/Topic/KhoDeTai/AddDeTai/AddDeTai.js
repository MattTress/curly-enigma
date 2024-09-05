import icon_plus from "../assets/icon_plus.svg";
import icon_tick from "../assets/icon_tick.svg";
import icon_xx from "../assets/icon_xx.svg";
import icon_bin from "../assets/icon_bin.svg";
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
import { useEffect, useState } from "react";
import request from "../../../../utils/request";
import { requestPost } from "../../../../utils/requestPOST";
import { render } from "@testing-library/react";

export const AddDeTai = (props) => {
  const { handleClose, post, createDeTai, setCreateDeTai, render } = props;

  const [topicGoal, setTopicGoal] = useState({
    content: "",
    id: "",
    topicId: "",
  });
  const [topicGoalShow, setTopicGoalShow] = useState([]);
  // useEffect(()=>{
  //   request()
  // })
  const postGoal = () => {
    requestPost("/api/goal-of-topic", {
      params: {
        topic_id: 1,
        content: topicGoal.content,
      },
    })
      .then((res) => {
        setTopicGoal("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    request("/api/goal-of-topic")
      .then((res) => {
        const responsdata = res.data;
        setTopicGoalShow(responsdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);
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
            </label>
            <label
              htmlFor="tieuChi"
              className="flex flex-col items-start gap-1"
            >
              <h2 className="font-medium text-sm ">Tiêu chí</h2>
              <div className="w-[750px] h-[202px] p-3 border border-[#E2E3E9] relative  rounded">
                <button
                  type="button"
                  className="flex flex-row gap-1 items-center pb-3"
                  onClick={(e) => {
                    postGoal();
                  }}
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
                  value={topicGoal.content}
                  onChange={(e) => {
                    setTopicGoal({ ...topicGoal, content: e.target.value });
                  }}
                />
                {topicGoalShow.map((item, index) => {
                  return (
                    <div className="w-[718px] h-[40px] p-3 border text-[#172B4D] relative left-[3px]  border-[#E2E3E9] rounded">
                      {item.content}
                      <div className="relative">
                        <img
                          src={icon_tick}
                          className="absolute top-[-35px] right-[2.25rem]"
                          alt=""
                          srcset=""
                        />
                        <img
                          src={icon_xx}
                          className="absolute top-[-35px] right-[-0.25rem]"
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  );
                })}
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
