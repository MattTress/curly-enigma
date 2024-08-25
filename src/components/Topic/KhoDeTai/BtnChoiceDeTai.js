import { useState } from "react";

export const BtnChoiceDeTai = (props) => {
  const {
    isStorage,
    setIsStorage,
    isTopicOfYear,
    setIsTopicOfYear,
    isThongKe,
    setIsThongKe,
  } = props;
  const [isClick, setIsClick] = useState(false);

  const handleClick = (e) => {
    setIsClick(!isClick);
    setIsStorage(!isStorage);
    setIsTopicOfYear(!isTopicOfYear);
    setIsThongKe(!isThongKe);
  };
  return (
    <div className="w-full relative ">
      <div className="flex flex-row justify-start gap-4 border-none absolute top-[-14px] left-[14px]">
        <button
          className={`
            ${
              isStorage
                ? `bg-[#1890FF] text-[#FFFFFF]`
                : "bg-[#F1F1F1]  text-[#9EA3A9]"
            }
               rounded-[12px]  w-[52px] h-[32px]`}
          type="button"
          onClick={() => {
            handleClick();
            setIsStorage(true);
            setIsTopicOfYear(false);
            setIsThongKe(false);
          }}
        >
          Kho
        </button>
        <button
          className={`
            ${
              isTopicOfYear
                ? `bg-[#1890FF] text-[#FFFFFF]`
                : "bg-[#F1F1F1]  text-[#9EA3A9]"
            }
               rounded-[12px]  w-[137px] h-[32px]`}
          type="button"
          onClick={() => {
            handleClick();
            setIsStorage(false);
            setIsTopicOfYear(true);
            setIsThongKe(false);
          }}
        >
          Đề tài theo năm
        </button>
        <button
          className={`
            ${
              isThongKe
                ? `bg-[#1890FF] text-[#FFFFFF]`
                : "bg-[#F1F1F1]  text-[#9EA3A9]"
            }
               rounded-[12px]  w-[90px] h-[32px]`}
          type="button"
          onClick={() => {
            handleClick();
            setIsStorage(false);
            setIsTopicOfYear(false);
            setIsThongKe(true);
          }}
        >
          Thống kê
        </button>
      </div>
    </div>
  );
};
