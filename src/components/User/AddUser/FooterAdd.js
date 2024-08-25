import icon_acc from "./assets/icon_acc.svg";
import icon_camera from "./assets/icon_camera.svg";

export const FooterAdd = (props) => {
  const { handleClose, handleCreateNhom, blueBtn, post } = props;
  return (
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
          {blueBtn}
        </button>
      </div>
    </footer>
  );
};
