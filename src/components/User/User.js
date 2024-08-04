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

import EditQuanLy from "./Edit/EditQuanLy";
import axios from "axios";
import { AddManager } from "./AddUser/AddManager";
import { AddTeacher } from "./AddUser/AddTeacher";
import { AddStudent } from "./AddUser/AddStudent";
import { SearchBox } from "./SearchBox";
import { AddChoice } from "./AddUser/AddChoice";
import { DetailUser } from "./DetailUser.js/DetailUser";
import { requestPost } from "../../utils/requestPOST";

const User = () => {
  const [modalType, setModalType] = useState();
  const [visibleAddChoice, setVisibleAddChoice] = useState(false);
  const [visibleAddManager, setVisibleAddManager] = useState(false);
  const [visibleAddTeacher, setVisibleAddTeacher] = useState(false);
  const [visibleAddStudent, setVisibleAddStudent] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [idUser, setIdUser] = useState();
  const [data, setData] = useState([]);
  const [dataShow, setDataShow] = useState([]);

  const [dataEdit, setDataEdit] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [render, setRender] = useState(0);
  const [courseId, setCourseId] = useState("");
  const [visible, setVisible] = useState(false);

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [createUser, setCreateUser] = useState({
    address: "",
    avatar: "string",
    birthday: "",
    classId: 0,
    courseId: 0,
    email: "",
    enabled: true,
    fieldId: 0,
    fullName: "",
    gender: 0,
    note: "",
    password: "",
    phone: "",
    studentCode: "string",
    teacherType: true,
    type: "",
    username: "",
  });
  const [search, setSearch] = useState({
    address: "",
    full_name: "",
    email: "",
    gender: "",
    phone: "",
    birthday_start: "",
    birthday_end: "",
    type: "",
  });

  const handleSubmit = () => {
    const params = {
      address: search.address,
      full_name: search.full_name,
      email: search.email,
      gender: search.gender,
      phone: search.phone,
      birthday_start: search.birthday_start,
      birthday_end: search.birthday_end,
      type: search.type,
      page_index: page - 1,
      page_size: size,
    };
    request("/api/admin/user", {
      params,
    }).then((res) => {
      let responseData = res.data;
      setData(responseData);
    });
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  // get user data
  useEffect(() => {
    request("/api/admin/user", {
      params: {
        address: search.address,
        full_name: search.full_name,
        email: search.email,
        gender: search.gender,
        phone: search.phone,
        birthday_start: search.birthday_start,
        birthday_end: search.birthday_end,
        type: "",
        page_index: page - 1,
        page_size: size,
      },
    }).then((res) => {
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
    setVisibleDetail(false);
    setVisibleAdd(false);
    setVisibleAddChoice(false);
    setVisibleAddManager(false);
    setVisibleAddTeacher(false);
    setVisibleAddStudent(false);
    setIdUser("");
    setDataEdit();
  };
  const post = () => {
    requestPost("/api/admin/user", {
      data: {
        address: createUser.address,
        avatar: createUser.avatar,
        birthday: createUser.birthday,
        email: createUser.email,
        enabled: createUser.enabled,
        fullName: createUser.fullName,
        gender: createUser.gender,
        note: createUser.note,
        password: createUser.password,
        phone: createUser.phone,
        teacherType: createUser.teacherType,
        type: "ADMIN",
        username: createUser.username,
        classId: createUser.classId,
        courseId: createUser.courseId,
        fieldId: createUser.fieldId,
        studentCode: createUser.studentCode,
      },
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
      <div className="border-b shadow flex justify-between px-10 py-2 items-center">
        <div>Thành viên ({data.length})</div>
        <div className="flex flex-row gap-2  ">
          <button
            className="px-4 py-2 border h-[32px]  bg-blue-500 text-white flex gap-x-2 items-center rounded-[3px]"
            onClick={() => {
              setVisible(true);
              setVisibleAddChoice(true);
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
            Thêm thành viên
          </button>
          <button>
            <img src={icon_up} alt="" />
          </button>
          <button>
            <img src={icon_save} alt="" />
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
                <span>Họ và tên</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Số điện thoại</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Email</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Địa chỉ</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Giới tính</span>
              </div>
            </td>
            <td className={`text-center`}>
              <div className="flex flex-row justify-center">
                <img src={icon_lenxuong} alt="" />
                <span>Ngày sinh</span>
              </div>
            </td>
          </tr>
          {/* thanh tim kiem */}

          <SearchBox
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
            page={page}
            size={size}
            setData={setData}
            handleData={handleData}
            render={render}
          ></SearchBox>
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
                        setVisibleEdit(true);
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
                      Chi tiết
                    </div>
                  </div>
                </div>
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.fullName}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.phone}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.email}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.address}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.gender === 1 ? "Nam" : "Nữ"}
              </td>
              <td className="border-x-0 border-[#eee] text-center p-3">
                {item.birthday}
              </td>
              {/* <td>{item.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {visibleEdit && (
        <EditQuanLy
          handleClose={handleClose}
          visibleEdit={visibleEdit}
          createUser={createUser}
          setCreateUser={setCreateUser}
        />
      )}
      {visibleDetail && (
        <DetailUser
          icon_X={icon_X}
          handleClose={handleClose}
          idUser={idUser}
          handleData={handleData}
          search={search}
          page={page}
          size={size}
          render={render}
        />
      )}
      {visibleAddChoice && (
        <AddChoice
          handleClose={handleClose}
          modalType={modalType}
          icon_X={icon_X}
          icon_quanly={icon_quanly}
          setModalType={setModalType}
          setVisibleAddManager={setVisibleAddManager}
          setVisibleAddTeacher={setVisibleAddTeacher}
          setVisibleAddStudent={setVisibleAddStudent}
          icon_gv={icon_gv}
          icon_sv={icon_sv}
        ></AddChoice>
      )}

      {/* visible manager add */}
      {visibleAddManager && (
        <AddManager
          setData={setData}
          handleClose={handleClose}
          createUser={createUser}
          setCreateUser={setCreateUser}
          render={render}
          post={post}
          // handleCreateUser={handleCreateUser}
        ></AddManager>
      )}
      {/* visible teacher add */}
      {visibleAddTeacher && (
        <AddTeacher
          handleClose={handleClose}
          createUser={createUser}
          setCreateUser={setCreateUser}
          render={render}
          post={post}

          // handleCreateUser={handleCreateUser}
        ></AddTeacher>
      )}
      {/* visible student add */}
      {visibleAddStudent && (
        <AddStudent
          handleClose={handleClose}
          createUser={createUser}
          setCreateUser={setCreateUser}
          render={render}
          post={post}

          // handleCreateUser={handleCreateUser}
        ></AddStudent>
      )}
    </div>
  );
};

export default User;
