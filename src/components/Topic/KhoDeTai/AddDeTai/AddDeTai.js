export const AddDeTai = (props) => {
  const {} = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
        handleClose={() => {}}
      >
        <div className="w-full h-[762px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm thành viên</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-row justify-around items-center h-[640px] shadow-md "></div>
          {/* footer  */}
          <footer className="h-[60px]">
            <div className="flex flex-row h-full  gap-3 justify-end items-center pr-3 ">
              <button
                type="button"
                className="border-[#E2E3E9] text-[#172B4D] font-normal w-[57px] h-[32px]  bg-inherit border rounded-[3px]"
                onClick={() => {}}
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
