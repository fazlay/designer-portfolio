import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { StatusButton } from "@/button/Button";
import { LetterAvatar } from "@/avatar/avatar";
import { cn } from "@/utils/classNameMerge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InvoiceCard from "./InvoiceComponent";

interface ICustomTableProps {
  invoice?: boolean;
  tableRowData?: any;
}

const CustomTable: React.FC<ICustomTableProps> = ({
  invoice = false,
  tableRowData,
}) => {
  const [openDetails, setOpenDetails] = useState(new Array(10).fill(false));

  return (
    <>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-[5px]">
        <div className="flex items-center justify-between  bg-white dark:bg-gray-900"></div>
        <table className="w-full text-left rounded-lg ">
          <thead className="rounded-lg text-[18px]  ">
            <tr>
              {[
                { title: "Company", position: "" },
                { title: "Service", position: "" },
                { title: "Due Date", position: "" },
                { title: "Order ID", position: "" },
                { title: "Status", position: "text-center" },
                invoice && { title: "Action", position: "text-center" },
              ].map((item: any, index) => (
                <th
                  scope="col"
                  key={index}
                  className={`${
                    index === 0 ? "pl-28" : ""
                  } py-3  ${item?.position}
                  bg-black text-white
                  font-normal`}
                >
                  {item?.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(tableRowData || [1, 2, 3]).map((item: any, index: number) => (
              <>
                <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {/* <img
                        className="w-10 h-10 rounded-full"
                        src={imageUrl}
                        alt="Jese image"
                      /> */}
                    <LetterAvatar>
                      {item?.orderBy?.name?.firstName?.charAt(0).toUpperCase()}
                      {item?.orderBy?.name?.lastName?.charAt(0).toUpperCase()}
                    </LetterAvatar>
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {item?.orderBy?.name?.firstName}
                      </div>
                      <div className="font-normal text-gray-500">
                        {item?.orderBy?.email}
                      </div>
                    </div>
                  </th>
                  <td className="py-4">{item.serviceTitle}</td>
                  <td className="py-4">{item.dueDate}</td>
                  <td className="py-4 ">{item?.orderId}</td>
                  <td className="py-4">
                    <div className="flex flex-col items-center">
                      <StatusButton status={item?.orderStatus} />
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex flex-col items-center">
                      {invoice && (
                        <button
                          className={cn(
                            "text-white relative font-semibold font-sans bg-black flex flex-col items-center justify-center text-[16px] rounded-full w-[130px] h-[30px]",
                            `${item?.messageUnseen ? "" : ""}`
                          )}
                          onClick={() => {
                            const newOpenDetails = openDetails.map((_, i) =>
                              i === index ? !openDetails[i] : false
                            );
                            setOpenDetails(newOpenDetails);
                          }}
                        >
                          <>
                            <span
                              className={cn(
                                "absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white",
                                `${item?.messageUnseen <= 0 ? "invisible" : ""}`
                              )}
                            >
                              {item.messageUnseen}
                            </span>
                            <div className="flex flex-row items-center justify-center">
                              <span> View</span>
                              {openDetails[index] ? (
                                <FontAwesomeIcon
                                  icon={faAngleDown}
                                  className="pl-[5px]"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faAngleRight}
                                  className="pl-[5px]"
                                />
                              )}
                            </div>
                          </>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                <>
                  {openDetails[index] ? (
                    <tr>
                      <td colSpan={6}>
                        {" "}
                        {/* Set the colspan to the total number of columns */}
                        <InvoiceCard item={item} />
                      </td>
                    </tr>
                  ) : null}
                </>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
