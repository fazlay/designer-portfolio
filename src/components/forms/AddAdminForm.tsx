import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { showAlert } from "@/config/swealert";
import { permissionArray } from "@/lib/constats";
import httpClient from "@/lib/http-client";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
//   permissionCheckbox: boolean;
// };

const AddAdminForm: React.FC<any> = ({
  permissionData,
  isModalOpen,
  setIsModalOpen,
}) => {
  console.log("permission", permissionData);

  const { register, handleSubmit, watch } = useForm<any>({});
  const onSubmit: SubmitHandler<any> = (data) => {
    const createAdminPayload = {
      password: data.password,
      email: data.email,

      admin: {
        name: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        email: data.email,
        permissions: permissionArray,
      },
    };

    httpClient.post(`/users/create-admin`, createAdminPayload).then((res) => {
      setIsModalOpen(!isModalOpen);
      if (res?.data?.success) {
        showAlert({
          title: "Admin Created",
          text: `${res.data.message}`,
          icon: "success",
        });
      } else {
        showAlert({
          title: "Admin Created Failed",
          text: `${res.data.message}`,
          icon: "error",
        });
      }
    });
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="font-sans px-[50px] w-full py-[60px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-4 text-[20px] font-semibold text-gray-900">
          Create Admin
        </h2>

        <div className="w-full flex flex-row  ">
          <div className="w-full pr-[20px]">
            <label className="block  text-[16px]  tracking-wide text-gray-700  font-normal mb-[4px]">
              First Name
            </label>
            <input
              className="appearance-none block rounded-lg w-full border-[1px] border-black text-gray-700 py-[12px] px-4 mb-[8px] leading-tight focus:shadow-lg  text-[16px] placeholder:text-[16px]  "
              id="grid-first-name"
              type="text"
              placeholder="First Name"
              // name="firstName"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="w-full">
            <label className="block  text-[16px]  tracking-wide text-gray-700  font-normal mb-[4px]">
              Last Name
            </label>
            <input
              className="appearance-none block rounded-lg w-full border-[1px] border-black text-gray-700 py-[12px] px-4 mb-[8px] leading-tight focus:shadow-lg  text-[16px] placeholder:text-[16px]  "
              id="grid-first-name"
              type="text"
              placeholder="Last Name"
              // name="lastName"
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-full pr-[20px] ">
            <label className="block  text-[16px]   tracking-wide text-gray-700  font-normal mb-[4px]">
              Email
            </label>
            <input
              className="appearance-none block rounded-lg w-full border-[1px] border-black text-gray-700 py-[12px] px-4 mb-[8px] leading-tight focus:shadow-lg  text-[16px] placeholder:text-[16px] "
              id="grid-first-name"
              type="text"
              placeholder="example@example.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="w-full ">
            <label className="block  text-[16px]  tracking-wide text-gray-700  font-normal mb-[4px]">
              Password
            </label>
            <input
              className="appearance-none block rounded-lg w-full border-[1px] border-black text-gray-700 py-[12px] px-4 mb-[5px] leading-tight focus:shadow-lg placeholder:text-[16px] "
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true })}
            />
          </div>
        </div>

        <div className=" w-full  pt-[20px]">
          <input
            className="appearance-none cursor-pointer block rounded-lg w-1/3 border-[1px] border-black  hover:text-[#000] hover:bg-white py-[11px] px-4 mb-3 leading-tight focus:shadow-lg  mt-[21px] bg-[#172554] text-white"
            type="submit"
            value="Submit"
            name="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAdminForm;

// const permissions: any = {
//   make_order: { view: true, add: true, edit: true, delete: true },
//   invoice: { view: true, add: false, edit: false, delete: false },
//   message: { view: true, add: false, edit: false, delete: false },
// };

//  <div className="flex items-center mb-4">
//           <label className="ms-2 text-sm font-medium text-gray-900 ">
//             Default checkbox
//           </label>
//           <input
//             id="default-checkbox"
//             type="checkbox"
//             value=""
//             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
//             {...register("permissionCheckbox")}
//           />
//         </div>

//    <input defaultValue="test" {...register("example")} />

//         <input {...register("exampleRequired", { required: true })} />

//         {errors.exampleRequired && <span>This field is required</span>}
