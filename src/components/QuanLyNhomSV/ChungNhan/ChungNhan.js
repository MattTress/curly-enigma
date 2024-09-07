import icon_x from "./assets/icon_x.svg";
import icon_tron from "./assets/icon_tron.svg";
import icon_hoa from "./assets/icon_hoa.svg";
import header from "./assets/header.svg";

export const ChungNhan = (props) => {
  const { showChungNhan, setShowChungNhan } = props;
  return (
    <div className="fixed top-0 left-0 w-full h-full  z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="relative mx-auto  z-20 w-[1071px] h-[766px] bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[60px ] relative ">
          <button
            type="button"
            className="absolute right-2 top-2"
            onClick={(e) => {
              setShowChungNhan(false);
            }}
          >
            <img src={icon_x} alt="" />
          </button>
          <div className="relative top-[104px] left-[310px]">
            <img src={header} alt="" />
          </div>
          <div className="relative top-[163px] left-[285px]">
            <img src={icon_hoa} alt="" />
          </div>

          <div className="relative flex flex-col gap-6 top-[-16.5rem]">
            <h3 className=" font-semibold text-[#172B4D]">
              Điều này chứng nhận rằng
            </h3>
            <h3 className=" text-[50px] leading-[85px] monteFont montecarlo-regular bg-gradient-to-r bg-clip-text text-transparent ">
              Nguyễn Văn An
            </h3>
            <h3 className="text-[20px] font-semibold text-[#172B4D]">
              Sinh viên trường Đại học A
            </h3>
            <h3 className="text-[#172B4D] font-semibold">
              Đã hoàn thành đồ án khóa K20
            </h3>
            <h3 className="text-[#172B4D] font-semibold">
              Thời gian bắt đầu đồ án: 04/08/2022 - 20/12/2022
            </h3>
            <h3 className="text-[#172B4D] font-semibold">
              Kết quả đồ án: Giỏi
            </h3>
          </div>
          <div className="absolute top-[560px] left-[461px] ">
            <img src={icon_tron} alt="" srcset="" />
          </div>
          <div className="absolute top-[650px] left-[80px] border-t border-black">
            <h3 className="mt-2">Trần Đức K</h3>
            <p>Giáo viên hướng dẫn đồ án</p>
          </div>
          <div className="absolute top-[650px] right-[80px] border-t border-black ">
            <h3 className="mt-2">Nguyễn Văn P</h3>
            <p>Hiệu trưởng trường Đại học A</p>
          </div>
        </div>
      </div>
    </div>
  );
};
