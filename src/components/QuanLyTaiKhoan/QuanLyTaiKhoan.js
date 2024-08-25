import { useState } from "react";

import { Link } from "react-router-dom";

export const QuanLyTaiKhoan = (props) => {
  const [isCollap, setIsCollap] = useState(false);
  const [isCollapDoAn, setIsCollapDoAn] = useState(false);
  const [check, setSheck] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col items-center  gap-8
`}
    >
      {}
    </div>
  );
};
