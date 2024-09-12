export const SearchTK = (props) => {
  return (
    <div className="flex flex-row justify-end gap-3">
      <div>
        <select
          className="w-[330px] h-[32px] text-[#9EA3A9] border border-[#E2E3E9] rounded-[3px] "
          name=""
          id=""
        >
          <option value="2022">Năm 2022</option>
          <option value="2023">Năm 2023</option>
          <option value="2024">Năm 2024</option>
        </select>
      </div>
      <div>
        <select
          className="w-[330px] h-[32px] text-[#9EA3A9] border border-[#E2E3E9] rounded-[3px]"
          name=""
          id=""
        >
          <option value="Đợt 1">Đợt 1</option>
          <option value="Đợt 2">Đợt 2</option>
          <option value="Đợt 3">Đợt 3</option>
        </select>
      </div>
      <div>
        <select
          className="w-[330px] h-[32px] text-[#9EA3A9] border border-[#E2E3E9] rounded-[3px]"
          name=""
          id=""
        >
          <option value="Ngành lập trình">Ngành lập trình</option>
          <option value="Ngành marketing">Ngành marketing</option>
          <option value="Ngành test">Ngành test</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          className="w-[330px] h-[32px] text-[#9EA3A9]  border border-[#E2E3E9] rounded-[3px]"
          name=""
          id=""
          placeholder="Tìm kiếm"
        ></input>
      </div>
      <div>
        <button
          type="button"
          className="w-[78px] h-[32px] text-[#9EA3A9]  border border-[#E2E3E9] rounded-[3px]"
          name=""
          id=""
        >
          Làm lại
        </button>
      </div>
      <div>
        <button
          type="button"
          className="w-[90px] h-[32px] text-[#1890FF] border border-[#E2E3E9] rounded-[3px]"
          name=""
          id=""
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};
