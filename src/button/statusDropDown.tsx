import React, { useState } from "react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/utils/classNameMerge";

const StatusDropdownButton: React.FC<any> = ({
  selectedItem,
  handleMenuItemClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item: any) => {
    handleMenuItemClick(item);
    toggleDropdown();
  };

  return (
    <div className=" flex items-center justify-center text-[#000]">
      <div className="relative inline-block text-left">
        <button
          className={cn(
            "text-white font-montserrat-normal flex flex-row items-center justify-center text-[16px] rounded-full px-[25px] h-[30px]",
            // className,
            {
              "bg-[#F6B84B]": selectedItem?.value === "pending",
              "bg-[#00CC95]": selectedItem?.value === "completed",
              "bg-[#3C22F2]": selectedItem?.value === "requested",
              "bg-[#FF4D4D]": selectedItem?.value === "rejected",
              "bg-[#21B3F4]": selectedItem?.value === "processing",
            }
          )}
          onClick={toggleDropdown}
        >
          <div> {selectedItem ? selectedItem.label : "Requested"}</div>
          <FontAwesomeIcon icon={faAngleDown} className="pb-[2px] pl-[8px]" />
        </button>
        <div
          id="dropdown-menu"
          className={`origin-top-right absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
            isDropdownOpen ? "" : "hidden "
          }`}
          // style={{ zIndex: 1000 }}
        >
          <div
            className="py-2 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            {/* Add your menu items here */}
            {[
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
              { label: "Requested", value: "requested" },
              { label: "Rejected", value: "rejected" },
              { label: "Processing", value: "processing" },
            ].map((item) => (
              <a
                key={item.value}
                className="flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusDropdownButton;
