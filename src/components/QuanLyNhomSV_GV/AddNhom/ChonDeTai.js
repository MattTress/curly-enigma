export const ChonDeTai = (props)=>{
      return<>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-opacity-40	text-center  bg-black flex justify-center items-center ">
      <div
        className="absolute mx-auto  z-20 w-[50%] top-[4rem]  bg-white "
        title="Thêm thành viên"
      >
        <div className="w-full h-[1001px] flex flex-col ">
          {/* Header */}
          <header className="flex flex-row justify-between h-[60px] shadow-md ">
            <h2 className="p-4  font-medium ">Thêm đề tài theo năm</h2>
            <img className="p-4" src={""} alt="" onClick={() => {}} />
          </header>
          {/* body  */}
          <div className="flex flex-col justify-around items-center h-[900px] shadow-md  gap-10 ">
            <label
              htmlFor="nameTopic"
              className="flex flex-col items-start gap-1 pt-6"
            >
              <h2 className="font-medium text-sm ">Chọn năm</h2>
              <input
                id="nameTopic"
                type="number"
                value={year}
                placeholder="Chọn năm"
                className="w-[750px] h-[32px] p-3 border border-[#E2E3E9] rounded"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </label>
            <div className={` w-[750px] h-full relative`}>
              <div className="flex flex-row justify-between">
                <h4>Danh sách đề tài</h4>
                <button
                  type="button"
                  className="flex flex-row gap-1 items-center pb-3"
                  onClick={() => {
                    setIsOpenClose(true);
                  }}
                >
                  <img src={icon_plus} alt="" />
                  <span className="text-[#1890FF] font-medium">
                    Chọn đề tài
                  </span>
                </button>
              </div>
              <table className="w-full ">
                <thead className={` border border-[#eee] relative w-full `}>
                  <tr>
                    <td className={`text-center w-[40px]  `}>STT</td>
                    <td className={`text-center w-[40px] `}>
                      <img className="m-auto" src={icon_stt} alt="" />
                    </td>
                    <td className={``}>
                      <div className="justify-center  flex flex-row">
                        <img src={icon_lenxuong} />
                        <span>Tên đề tài</span>
                      </div>
                    </td>
                  </tr>
                  {/* thanh tim kiem */}

                  <SearchAddDeTai
                    handleSubmit={handleSubmit}
                    search={search}
                    setSearch={setSearch}
                    page={page}
                    size={size}
                    setData={setData}
                    // handleData={handleData}
                    render={render}
                  ></SearchAddDeTai>
                </thead>

                <tbody>
                  {dataShow?.map((item, index) => (
                    <tr className="border border-[#eee]">
                      <td className="border border-[#eee] text-center p-3">
                        {(page - 1) * size + index + 1}
                      </td>
                      <td className="border border-[#eee] text-center p-3">
                        <div className={`mx-auto relative dropDown`}>
                          <img src={icon_action} className="" alt="" />

                          <div
                            key={item.id}
                            className="child rounded-lg border-2 border-[#c4c4c4]  shadow-md  bg-white z-10"
                          >
                            <div
                              key={item.id}
                              onClick={() => {
                                handleDeleteTopic(item.id);
                              }}
                              className="p-2 bg-white cursor-pointer hover:bg-gray-100 w-20"
                            >
                              Xóa
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-x-0 border-[#eee] text-center p-3">
                        {item.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* footer  */}
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
                  postYear()
                }}
              >
                Thêm
              </button>
            </div>
          </footer>
        </div>
        <Pagination
          currentPage={page}
          pageSize={size}
          totalRow={data.length}
          onPageChange={setPage}
          onSizeChange={setSize}
        />
      </div>

      {isOpenClose && (
        <ChoiceDeTai
          handleDeleteTopic={handleDeleteTopic}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
          page={page}
          size={size}
          setData={setData}
          setTotalPage={setTotalPage}
          render={render}
          dataShow={dataShow}
          data={data}
          setPage={setPage}
          setSize={setSize}
          setDataShow={setDataShow}
          isOpenClose={isOpenClose}
          setIsOpenClose={setIsOpenClose}
          idDeTai={idDeTai}
          setIdDeTai={setIdDeTai}
        />
      )}
    </div>
      </>
}