import icon_action from "./assets/icon_action.svg";
import icon_delflter from "./assets/icon_delfilter.svg";
import icon_lenxuong from "./assets/icon_lenxuong.svg";
import icon_stt from "./assets/icon_stt.svg";
import icon_X from "./assets/icon_X.svg";
import icon_save from "./assets/icon_save.svg";
import icon_up from "./assets/icon_up.svg";

import { useEffect, useState } from "react";
import SearchBoxDeTai from "./SearchBoxDeTai.js";
import { AddDeTai } from "./AddDeTai/AddDeTai.js";
import { BtnChoiceDeTai } from "./BtnChoiceDeTai.js";
import Pagination from "../../layout/paniga/Pagination.js";
import { DeTaiTheoNam } from "./DeTaiTheoNam.js";
import { ThongKe } from "./ThongKe.js";
import { requestDELETE } from "../../../utils/requestDETELE";
import { requestPost } from "../../../utils/requestPOST";
import request from "../../../utils/request";
import { Kho } from "./Kho.js";
import { deleteTopicById } from "../../../services/detai.service.js";

export const KhoDeTai = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  const [data, setData] = useState([]);
  const [dataYear, setDataYear] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [dataYearShow, setDataYearShow] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [render, setRender] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [search, setSearch] = useState({});
  const [isStorage, setIsStorage] = useState(true);
  const [isTopicOfYear, setIsTopicOfYear] = useState(false);
  const [isThongKe, setIsThongKe] = useState(false);
  const [createDeTai, setCreateDeTai] = useState({
    content: "",
    description: "",
    isApply: true,
    isDraft: true,
    name: "",
    timeStart: today,
  });

  return (
    <>
      {isStorage && (
        <Kho
          today={today}
          setRender={setRender}
          data={data}
          setVisibleAdd={setVisibleAdd}
          isStorage={isStorage}
          setIsStorage={setIsStorage}
          isTopicOfYear={isTopicOfYear}
          setIsTopicOfYear={setIsTopicOfYear}
          isThongKe={isThongKe}
          setIsThongKe={setIsThongKe}
          search={search}
          setSearch={setSearch}
          page={page}
          size={size}
          setData={setData}
          render={render}
          dataShow={dataShow}
          totalRow={data.length}
          setPage={setPage}
          setSize={setSize}
          setTotalPage={setTotalPage}
          setDataShow={setDataShow}
          createDeTai={createDeTai}
          setCreateDeTai={setCreateDeTai}
          visibleAdd={visibleAdd}
        />
      )}
      {isTopicOfYear && (
        <DeTaiTheoNam
          today={today}
          data={data}
          dataYear={dataYear}
          setVisibleAdd={setVisibleAdd}
          isStorage={isStorage}
          setIsStorage={setIsStorage}
          isTopicOfYear={isTopicOfYear}
          setIsTopicOfYear={setIsTopicOfYear}
          isThongKe={isThongKe}
          setIsThongKe={setIsThongKe}
          search={search}
          setSearch={setSearch}
          page={page}
          size={size}
          setDataYear={setDataYear}
          render={render}
          dataYearShow={dataYearShow}
          totalRow={dataYear.length}
          setPage={setPage}
          setSize={setSize}
          setRender={setRender}
          visibleAdd={visibleAdd}
          setTotalPage={setTotalPage}
          setDataYearShow={setDataYearShow}
          dataShow={dataShow}
        />
      )}
      {isThongKe && (
        <ThongKe
          today={today}
          setRender={setRender}
          data={data}
          setVisibleAdd={setVisibleAdd}
          isStorage={isStorage}
          setIsStorage={setIsStorage}
          isTopicOfYear={isTopicOfYear}
          setIsTopicOfYear={setIsTopicOfYear}
          isThongKe={isThongKe}
          setIsThongKe={setIsThongKe}
          search={search}
          setSearch={setSearch}
          page={page}
          size={size}
          setData={setData}
          render={render}
          dataShow={dataShow}
          totalRow={data.length}
          setPage={setPage}
          setSize={setSize}
          setTotalPage={setTotalPage}
          setDataShow={setDataShow}
          createDeTai={createDeTai}
          setCreateDeTai={setCreateDeTai}
          visibleAdd={visibleAdd}
        />
      )}
    </>
  );
};
