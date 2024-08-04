import icon_acc from "./assets/icon_acc.svg";
import icon_camera from "./assets/icon_camera.svg";

export const BodyAdd = (props) => {
  const { createUser, setCreateUser } = props;
  return (
    <div className="  w-full items-center h-[85.5%] relative shadow-md ">
      <div className={`absolute top-8 left-[3rem]`}>
        <img src={icon_acc} width={"120px"} alt="" />
      </div>
      <div className={`absolute top-[7.4rem] left-[8.5rem]`}>
        <img src={icon_camera} width={"32px"} alt="" />
      </div>
      <div className="relative flex flex-col w-fit gap-3 top-8 left-[35.5rem] ">
        {/* account */}
        <label htmlFor="taikhoan" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Tài khoản</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            id="taikhoan"
            placeholder="Nhập tài khoản"
            value={createUser.username}
            onChange={(e) => {
              setCreateUser({ ...createUser, username: e.target.value });
            }}
          />
        </label>
        <label htmlFor="matkhau" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Mật khẩu</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="password"
            id="matkhau"
            placeholder="Nhập mật khẩu"
            value={createUser.password}
            onChange={(e) => {
              setCreateUser({ ...createUser, password: e.target.value });
            }}
          />
        </label>
        {/* Gender */}
        <div className="flex flex-row relative top-[15px]  items-start p-2 gap-14">
          <span className="text-sm font-medium">Giới tính</span>

          <label htmlFor="nam" className="flex flex-row items-center gap-1">
            <input
              type="radio"
              name=""
              id="nam"
              value={1}
              onClick={(e) => {
                setCreateUser({ ...createUser, gender: e.target.value });
              }}
            />
            <span className="text-sm font-medium">Nam</span>
          </label>
          <label htmlFor="nu" className="flex flex-row items-center gap-1">
            <input
              type="radio"
              name=""
              id="nu"
              value={0}
              onClick={(e) => {
                setCreateUser({ ...createUser, gender: e.target.value });
              }}
            />
            <span className="text-sm font-medium">Nữ</span>
          </label>
          <label htmlFor="khac" className="flex flex-row items-center gap-1 ">
            <input
              type="radio"
              name=""
              id="khac"
              value={2}
              onClick={(e) => {
                setCreateUser({ ...createUser, gender: e.target.value });
              }}
            />
            <span className="text-sm font-medium">Khác</span>
          </label>
        </div>
        {/* telecom */}
        <label
          htmlFor="tel"
          className="flex flex-col relative top-[19px]  items-start gap-2 "
        >
          <span className="text-sm font-medium">Số điện thoại</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="tel"
            name=""
            id="tel"
            placeholder="Nhập số điện thoại"
            value={createUser.phone}
            onChange={(e) => {
              setCreateUser({ ...createUser, phone: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="relative flex flex-col w-fit gap-5 top-[-110px] left-[3rem] ">
        {/* fullname */}
        <label
          htmlFor="fullname"
          className="flex flex-col items-start gap-2 pt-5 "
        >
          <span className="text-sm font-medium">Họ và tên</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            id="fullname"
            placeholder="Nhập họ và tên"
            value={createUser.fullName}
            onChange={(e) => {
              setCreateUser({ ...createUser, fullName: e.target.value });
            }}
          />
        </label>
        {/* date */}
        <label htmlFor="date" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Ngày sinh</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            id="date"
            placeholder="Chọn ngày"
            value={createUser.birthday}
            onChange={(e) => {
              setCreateUser({ ...createUser, birthday: e.target.value });
            }}
          />
        </label>
        {/* Mail */}
        <label htmlFor="Email" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Email</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            id="Email"
            placeholder="Nhập email"
            value={createUser.email}
            onChange={(e) => {
              setCreateUser({ ...createUser, email: e.target.value });
            }}
          />
        </label>

        {/* address */}
        <label
          htmlFor="address"
          className="flex flex-col items-start gap-2 relative "
        >
          <span className="text-sm   font-medium">Địa chỉ</span>
          <input
            className="w-[860px] absolute top-[30px]  px-5 py-[3px] border rounded-[3px]"
            type="text"
            name=""
            id="address"
            placeholder="Nhập địa chỉ"
            value={createUser.address}
            onChange={(e) => {
              setCreateUser({ ...createUser, address: e.target.value });
            }}
          />
        </label>
      </div>
      <div className="relative flex flex-col w-fit gap-5 top-[-3rem] left-[3rem]">
        {/* working */}
        <label htmlFor="working" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Học và làm việc tại</span>
          <input
            className="w-[340px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            id="working"
            placeholder="Nhập thông tin"
            // value={workPlace}
            onChange={(e) => {
              //   setWorkPlace(e.target.value);
            }}
          />
        </label>

        {/* notes */}
        <label htmlFor="notes" className="flex flex-col items-start gap-2 ">
          <span className="text-sm font-medium">Ghi chú</span>
          <input
            className="w-[750px] px-5 py-[3px] border rounded-[3px]"
            type="text"
            name=""
            id="notes"
            placeholder="Nhập ghi chú"
            value={createUser.note}
            onChange={(e) => {
              setCreateUser({ ...createUser, note: e.target.value });
            }}
          />
        </label>
      </div>
    </div>
  );
};
