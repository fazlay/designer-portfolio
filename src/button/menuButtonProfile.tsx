import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/utils/classNameMerge";

const DropdownProfileMenuButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const signoutFunction = () => {
    signOut();
    router.push("/login");
  };
  return (
    <div className=" flex items-center justify-center text-[#fff]">
      <div className="relative inline-block text-left " ref={dropdownRef}>
        <button className={cn()} onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} color={"#fff"} />
        </button>
        <div
          id="dropdown-menu"
          className={`absolute bottom-0 right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 ${
            isDropdownOpen ? "" : "hidden"
          }`}
        >
          <div
            className="py-2 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            <div
              onClick={() => {
                router.push("/change-password");
              }}
              className=" hover:bg-slate-800 cursor-pointer py-[4px] px-[10px]"
            >
              {" "}
              Change Password
            </div>
            <div
              onClick={() => {
                router.push("/profile-update");
              }}
              className=" hover:bg-slate-800 cursor-pointer py-[4px] px-[10px]"
            >
              {" "}
              Profile
            </div>
            <div
              className=" hover:bg-slate-800 cursor-pointer py-[4px] px-[10px] "
              onClick={() => signoutFunction()}
            >
              {" "}
              Sign out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownProfileMenuButton;
