import home from "../assets/home.svg";
import mayanh from "../assets/mayanh.svg";

const ToChuc = ({}) => {
  return (
    <div className={`flex flex-col h-full  relative`}>
      <div className={`min-h-[46px] w-full shadow-lg`}>
        <span className="p-3 font-semibold text-[#172B4D]">Tổ chức</span>
      </div>
      <div
        className={` h-full mx-6 my-4  bg-[#F9F9F9] absolute  relative  w-full`}
      >
        <form className={`relative w-full`}>
          <div className={`absolute top-8 left-44`}>
            <img src={home} width={"120px"} alt="" />
          </div>
          <div className={`absolute top-24 left-[17rem]`}>
            <img src={mayanh} width={"32px"} alt="" />
          </div>
          <div className={`absolute top-[5rem] left-[25rem]`}>
            <span className={`text-sm font-medium`}>Tên trường</span>
            <div>
              <input
                type="text"
                name=""
                value={"Trường Đại học A"}
                id=""
                className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
              />
            </div>
          </div>

          <div className={`absolute top-[13rem] left-[11rem]`}>
            <div className={`mb-9`}>
              <span className={`font-medium text-xl`}>Thông tin trường</span>
            </div>
            <div className={`grid grid-cols-2 gap-5`}>
              <label htmlFor="mail" className={`text-sm font-medium`}>
                Email
                <div className="pt-4">
                  <input
                    id={"mail"}
                    value={"abc@gmail.com"}
                    type="email"
                    placeholder="Email"
                    className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                  />
                </div>
              </label>
              <label ht className={`text-sm font-medium ml-[19rem]`}>
                Mã số thuế
                <div className="pt-4">
                  <input
                    id={"thue"}
                    value={"PM123"}
                    type="text"
                    placeholder="Mã số thuế"
                    className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                  />
                </div>
              </label>
              <label htmlFor="tel" className={`text-sm font-medium`}>
                Số điện thoại
                <div className="pt-4">
                  <input
                    id={"tel"}
                    value={"0901123657"}
                    type="tel"
                    placeholder="Số điện thoại"
                    className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                  />
                </div>
              </label>
              <label
                htmlFor="web"
                className={`text-sm font-medium ml-[19rem] `}
              >
                Website
                <div className="pt-4">
                  <input
                    id={"web"}
                    value={"http:abc.vn"}
                    type="text"
                    placeholder="Website"
                    className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                  />
                </div>
              </label>
              <label htmlFor="diachi" className={`text-sm font-medium`}>
                Địa chỉ
                <div className="pt-4">
                  <input
                    id={"diachi"}
                    value={"Địa chỉ A"}
                    type="text"
                    placeholder="Địa chỉ"
                    className={`p-2 rounded-[3px] border-[#E2E3E9] border  w-[340px] outline-none`}
                  />
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ToChuc;



