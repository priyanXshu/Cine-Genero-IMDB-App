import React from "react";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ pageNum, setPageNum, numOfPages = 20 }) => {
  const handlePageChange = (event, value) => {
    setPageNum(value);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        count={numOfPages}
        page={pageNum}
        color="primary"
        // variant="outlined"
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
          }}}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CustomPagination;
