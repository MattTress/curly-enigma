export const AddChoice = (props) => {
  const {
    handleClose,
    modalType,
    icon_X,
    icon_quanly,
    setModalType,
    setVisibleAddManager,
    setVisibleAddTeacher,
    setVisibleAddStudent,
    icon_gv,
    icon_sv,
    createUser,
    setCreateUser,
  } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[10rem]  bg-white "
        title="Thêm thành viên"
        handleClose={() => handleClose()}
      >
        <div className="w-full h-[300px]">
          {/* Header */}
          <header className="flex flex-row justify-between h-1/5 shadow-md ">
            <h2 className="p-4  font-medium ">Thêm thành viên</h2>
            <img
              className="p-4"
              src={icon_X}
              alt=""
              onClick={() => {
                handleClose();
              }}
            />
          </header>
          {/* body  */}
          <div className="flex flex-row justify-around items-center h-3/5 shadow-md ">
            <label htmlFor="quanly" className="flex flex-row gap-4">
              <input
                type="radio"
                name="quanly"
                id="quanly"
                onClick={() => {
                  setModalType(1);
                  setCreateUser("ADMIN");
                }}
              />

              <img src={icon_quanly} alt="" />
              <span>Quản lý</span>
            </label>
            <label htmlFor="giangvien" className="flex flex-row gap-4">
              <input
                type="radio"
                name="giangvien"
                id="giangvien"
                onClick={() => {
                  setModalType(2);
                  setCreateUser("TEACHER");
                }}
              />

              <img src={icon_gv} alt="" />
              <span>Giảng viên</span>
            </label>

            <label htmlFor="sinhvien" className="flex flex-row gap-4">
              <input
                type="radio"
                name="sinhvien"
                id="sinhvien"
                onClick={() => {
                  setModalType(3);
                  setCreateUser("STUDENT");
                }}
              />

              <img src={icon_sv} alt="" />
              <span>Sinh viên</span>
            </label>
          </div>
          {/* footer  */}
          <footer className="h-1/5">
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
                  if (modalType === 1) {
                    setVisibleAddManager(true);
                  } else if (modalType === 2) {
                    setVisibleAddTeacher(true);
                  } else if (modalType === 3) {
                    setVisibleAddStudent(true);
                  }
                }}
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
