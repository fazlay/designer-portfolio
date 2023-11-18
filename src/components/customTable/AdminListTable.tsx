import React from "react";

import { LetterAvatar } from "@/avatar/avatar";
import { formatDate } from "@/utils/dateformatter";
import CustomModal from "@/components/CustomModal/CustomModal";

import PermissionForm from "../forms/PermissionForm";

interface IClientListTableProps {
  invoice?: boolean;
  tableRowData?: any;
}

const AdminListTable: React.FC<IClientListTableProps> = ({
  invoice = false,
  tableRowData,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  return (
    <>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-[5px]">
        <div className="flex items-center justify-between  bg-white dark:bg-gray-900"></div>
        <table className="w-full text-left rounded-lg ">
          <thead className="rounded-lg text-[18px]  ">
            <tr>
              {[
                { title: "Name", position: "" },
                { title: "Join Data", position: "" },
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
                    <LetterAvatar>
                      {item?.userDetails?.name?.firstName
                        ?.charAt(0)
                        .toUpperCase()}
                      {item?.userDetails?.name?.lastName
                        ?.charAt(0)
                        .toUpperCase()}
                    </LetterAvatar>
                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {item?.userDetails?.name?.firstName} &nbsp;
                        {item?.userDetails?.name?.lastName}
                      </div>
                      <div className="font-normal text-gray-500">
                        {item?.userDetails?.email}
                      </div>
                    </div>
                  </th>
                  <td className="py-4">{formatDate(item.createdAt)}</td>
                  <td className="py-4 text-center">
                    <CustomModal
                      buttonText="View Permission"
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                    >
                      <PermissionForm
                        permissionData={item?.userDetails?.permissions}
                        id={item?.userDetails?._id}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                      />
                    </CustomModal>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminListTable;
