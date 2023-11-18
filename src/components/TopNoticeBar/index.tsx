import React from "react";

const TopNoticeBar = () => {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <a
        className="text-white no-underline hover:text-white hover:no-underline"
        href="#"
      >
        <span className="text-2xl pl-2">
          <i className="em em-grinning"></i> Brand McBrandface
        </span>
      </a>
    </div>
  );
};

export default TopNoticeBar;
