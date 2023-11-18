import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { SubmitButton } from "@/button/Button";
import { showAlert } from "@/config/swealert";
import httpClient from "@/lib/http-client";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
//   permissionCheckbox: boolean;
// };   isModalOpen={isModalOpen}

const PermissionForm: React.FC<any> = ({
  permissionData,
  id,
  isModalOpen,
  setIsModalOpen,
}) => {
  console.log("permission", permissionData);

  const convertedObject = permissionData.reduce((result: any, item: any) => {
    const { featureName, view, add, edit, delete: del } = item;
    result[featureName] = { view, add, edit, delete: del };
    return result;
  }, {});
  console.log("convertedObject", convertedObject);
  const { register, handleSubmit, watch } = useForm<any>({
    defaultValues: {
      ...convertedObject,
    },
  });
  const onSubmit: SubmitHandler<any> = (data) => {
    const permissions = Object.entries(data).map(
      ([featureName, permissions]: any) => ({
        featureName,
        view: permissions.view,
        add: permissions.add,
        edit: permissions.edit,
        delete: false, // Assuming "delete" is always false in your desired format
      })
    );
    console.log(permissions);
    httpClient
      .patch(`/userDetails/${id}`, { permissions: permissions })
      .then((res) => {
        setIsModalOpen(!isModalOpen);
        if (res?.data?.success) {
          showAlert({
            title: "Permission Updated Updated",
            text: `${res.data.message}`,
            icon: "success",
          });
        } else {
          showAlert({
            title: "Permission Updated Failed",
            text: `${res.data.message}`,
            icon: "error",
          });
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="font-sans p-8 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-4 font-semibold text-gray-900">Admin Permissions</h3>
        <div className="py-[20px]">
          {permissionData?.map((item: any, index: number) => (
            <ul
              key={index}
              className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex"
            >
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center ps-3">
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                    {item.featureName}
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div className="flex items-center ps-3">
                  <input
                    {...register(`${item.featureName}.view`)}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                    View
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center ps-3">
                  <input
                    {...register(`${item.featureName}.add`)}
                    id="angular-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                    Add
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    {...register(`${item.featureName}.edit`)}
                    id="laravel-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
                    Edit
                  </label>
                </div>
              </li>
            </ul>
          ))}
        </div>

        <SubmitButton>Update Permission</SubmitButton>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default PermissionForm;
