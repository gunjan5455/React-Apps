const Pagination = (props) => {
  const { Prevclick, Nextclick, currentPage } = props;

  return (
    <div className="text-white flex bg-gray-400 justify-center items-center mt-8 h-[50px]">
      <div onClick={Prevclick} className="px-8 cursor-pointer">
        PREVIOUS
      </div>
      <div>{currentPage}</div>
      <div onClick={Nextclick} className="px-8 cursor-pointer">
        NEXT
      </div>
    </div>
  );
};
export default Pagination;
