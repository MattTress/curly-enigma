import icon_prev from "./assets/icon_prev.svg";
import icon_next from "./assets/icon_next.svg";

const Pagination = ({
  currentPage,
  onPageChange,
  onSizeChange,
  pageSize,
  totalRow,
}) => {
  const totalPage = Math.ceil(totalRow / pageSize); // Tổng số trang
  const handlePageChange = (pages) => {
    onPageChange(pages);
  };
  const handleSizeChange = (size) => {
    onSizeChange(size);
  };
  const pages = [];
  var start = 0;
  var end = 0;
  // Math.floor(totalNoOfPages/3)
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
    
  }


  const goNextPage = () => {
    if (currentPage === totalPage) return;
    handlePageChange(currentPage + 1);
  };
  const goPrevPage = () => {
    if (currentPage <= 1) return;
    handlePageChange(currentPage - 1);
  };
  const goFirstPage = () => {
    onPageChange(1);
  };

  const goLastPage = () => {
    onPageChange(totalPage);
  };

  return (
    <>
      {totalPage > 0 && (
        <div className="text-center flex flex-row justify-center  ">
          {/* <button
            className="border px-2 py-1 rounded text-blue-500"
            onClick={() => {
              goFirstPage();
            }}
          >
            first
          </button> */}

          <button
            className="border px-2 py-2  rounded text-blue-500"
            onClick={() => {
              goPrevPage();
            }}
          >
            <img src={icon_prev} alt="" />
          </button>
          {pages.map((num, index) => (
            <button
              onClick={() => {
                handlePageChange(num);
              }}
              key={num}
              className={`border px-2 py-2 w-fit  rounded text-blue-500  ${
                num === currentPage && " border-blue-500 text-blue-500 "
              }`}
            >
              {num}
            </button>
          ))}

          <button
            className="border px-2 py-2 rounded text-blue-500"
            onClick={() => {
              goNextPage();
            }}
          >
            <img src={icon_next} alt="" />
          </button>
          {/* <button
            className="border px-2 py-1 rounded text-blue-500"
            onClick={() => {
              goLastPage();
            }}
          >
            end
          </button> */}

          <div>
            <select
              className="border p-2   rounded bg-transparent"
              onChange={(e) => {
                handleSizeChange(e.target.value);
              }}
              value={pageSize}
            >
              <option value={10}>10 / trang</option>
              <option value={20}>20 / trang</option>
              <option value={30}>30 / trang</option>
              <option value={50}>50 / trang</option>
            </select>
          </div>
          {/* <button className="border px-2 py-1 rounded text-blue-500">
            current: {currentPage}
          </button> */}
        </div>
      )}
    </>
  );
};

export default Pagination;
