export const CongViec = (props) => {
  const { visibleAddCongViec, setAddCongViec } = props;
  return (
    <div className="fixed top-0 left-0 w-full  z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="relative mx-auto  z-20 w-[50%] bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full min-h-[1000px] relative">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm công việc nhóm</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col justify-around items-center h-[640px] shadow-md "></div>
          {/* footer  */}
          <footer className="h-[60px]">
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
