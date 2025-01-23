import { useState } from "react";

const Pagination = (props) => {
  const { prevclick, nextclik, currentPage } = props;

  return (
    <div className="text-white flex bg-gray-400 justify-center items-center mt-8 h-[50px]">
      <div onClick={prevclick} className="px-8 cursor-pointer">
        prev
      </div>
      <div>{currentPage}</div>
      <div onClick={nextclik} className="px-8 cursor-pointer">
        next
      </div>
    </div>
  );
};
export default Pagination;
