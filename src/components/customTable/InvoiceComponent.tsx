import React, { useEffect, useState } from "react";

import { showAlert } from "@/config/swealert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ORDER_STATUS, QUERY_KEYS, USER_ROLES } from "@/lib/enums";
import { formatDate } from "@/utils/dateformatter";
import { LetterAvatar } from "@/avatar/avatar";
import { cn } from "@/utils/classNameMerge";
import { StatusButton } from "@/button/Button";
import httpClient from "@/lib/http-client";
import StatusDropdownButton from "@/button/statusDropDown";
import useUserDetails from "@/hook/userDetails.hook";

import MessagingCard from "./MessagingCard";

interface ICustomTableProps {
  serviceTitle?: string;
  orderDetails?: string;
  contactName?: string;
  contactEmail?: string;
  phoneNumber?: string;
  orderDate?: string;
  amountDue?: number;
  downloadUrl?: string;
  accepted?: boolean;
  orderAttachment?: string;
}

const InvoiceCard: React.FC<any> = ({ item }) => {
  const { userDetails, loading } = useUserDetails();
  const {
    serviceTitle,
    orderDetails,
    contactName,
    orderStatus,
    orderBy,
    contactEmail,
    phoneNumber,
    orderDate,
    amountDue,
    downloadUrl,
    accepted,
    createdAt,
    orderAttachment,
  } = item;

  const [invoiceData, setInvoiceData] = useState<ICustomTableProps>({});
  useEffect(() => {
    setInvoiceData({
      serviceTitle,
      orderDetails,
      contactName,
      contactEmail,
      phoneNumber,
      orderDate,
      amountDue,
      downloadUrl,
      accepted,
    });
    setSelectedItem({
      label: `${orderStatus.toUpperCase()}`,
      value: `${orderStatus}`,
    });
  }, []);

  const [selectedItem, setSelectedItem] = useState({
    label: "Requested",
    value: "requested",
  });

  const handleMenuItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const updateInvoiceData = (e: any) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
    console.log(invoiceData);
  };

  const submitInvoiceData = () => {
    const updatedInvoiceData = {
      serviceTitle: invoiceData?.serviceTitle,
      orderDetails: invoiceData?.orderDetails,
      orderBy: orderBy,
      dueDate: invoiceData?.orderDate,
      orderStatus: selectedItem?.value,
      amountDue: invoiceData?.amountDue,
      downloadUrl: invoiceData?.downloadUrl,
      aceepted: `${!accepted}`,
    };
    httpClient.patch(`/orders/${item._id}`, updatedInvoiceData).then((res) => {
      if (res.status === 200) {
        showAlert({
          title: "Order Updated",
          text: `${res.data.message}`,
          icon: "success",
        });
      }
    });
  };

  const acceptOffedPrice = () => {
    const updatedInvoiceData = {
      serviceTitle: invoiceData?.serviceTitle,
      orderDetails: invoiceData?.orderDetails,
      orderBy: orderBy,
      dueDate: invoiceData?.orderDate,
      orderStatus: selectedItem?.value,
      amountDue: invoiceData?.amountDue,
      downloadUrl: invoiceData?.downloadUrl,
      accepted: `${!accepted}`,
    };
    httpClient.patch(`/orders/${item._id}`, updatedInvoiceData).then((res) => {
      if (res.status === 200) {
        showAlert({
          title: "You have accepted the offer",
          text: `${res.data.message}`,
          icon: "success",
        });
      }
    });
  };

  const client = useQueryClient();
  const mutation = useMutation<void, unknown, void, unknown>({
    mutationFn: async () => {
      await submitInvoiceData();
    },
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.FETCH_ALL_MESSAGE as any); // @ts-ignore
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full shadow-[0_0_25px_5px_rgba(0,0,0,0.1)] rounded-b-xl ">
      <div
        className="flex flex-row justify-between items-center
        bg-[#727272] h-[55px] text-white rounded-t-xl px-[40px] w-full"
      >
        <div className=" flex flex-row w-1/2 justify-between text-[18px] font-sans font-light">
          <div className=" flex flex-row items-center">
            {" "}
            <LetterAvatar>
              {item?.orderBy?.name?.firstName?.charAt(0).toUpperCase()}
              {item?.orderBy?.name?.lastName?.charAt(0).toUpperCase()}
            </LetterAvatar>
            {/* <img
              className="w-10 h-10 rounded-full border-[1px] border-white"
              src={imageUrl}
              alt="Jese image"
            /> */}
            <p className="pl-[20px]">
              {item?.orderBy?.companyName || "Not Avialable"}
            </p>
          </div>
          <div className="flex flex-row items-center">{serviceTitle} </div>
          <p className="flex flex-row items-center">{orderDate}</p>
        </div>

        {userDetails?.role === USER_ROLES.ADMIN ? (
          <StatusDropdownButton
            selectedItem={selectedItem}
            handleMenuItemClick={handleMenuItemClick}
          />
        ) : (
          <StatusButton status={item?.orderStatus} />
        )}
      </div>

      <div className="body-section flex flex-row justify-between px-[40px] bg-[#F9F9F9] pt-[40px]">
        <div className="first">
          <p className="font-normal  font-sans text-[20px] text-[#7F7F7F]">
            Order Details
          </p>

          <div className=" mt-[10px] mb-[30px] border-[1px] border-[#EDEDED] bg-white h-[157px] w-[450px] px-[20px]   rounded-xl">
            {/* <p className="text-black pt-[10px] text-[#515151]  text-[20px]">
              {serviceTitle}
            </p> */}

            <p className="text-[#9B9DB0]  pt-[10px] text-[16px]">
              {" "}
              {orderDetails || "Not Available"}
            </p>
          </div>

          <span className=" mt-[20px] font-semibold cursor-point hover:text-[#0000FF] ">
            <a href={`http://localhost:5000/${orderAttachment}`}>
              ATTACHMENT : {orderAttachment || "Not Available"}
            </a>
          </span>
        </div>
        <div className="second w-full pl-[50px]">
          <div className="flex flex-col items-start pb-[15px]">
            <p className="text-[#7F7F7F] text-[20px] font-sans">Contact Name</p>
            <p className="text-[#515151] text-[17px] font-sans leading-none pt-[5px]">
              {item?.orderBy?.name.firstName} {item?.orderBy?.name.lastName}
            </p>
          </div>
          <div className="flex flex-col items-start pb-[15px]">
            <p className="text-[#7F7F7F] text-[20px] font-sans">Contact Name</p>
            <p className="text-[#515151] text-[17px] font-sans leading-none pt-[5px]">
              {item?.orderBy?.email || "Not Available"}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#7F7F7F] text-[20px] font-sans">Phone</p>
            <p className="text-[#515151] text-[17px] font-sans">
              {phoneNumber || "Not Available"}
            </p>
          </div>
        </div>
        <div className="third  w-full pl-[50px]">
          <p className="font-normal font-sans text-[20px] text-[#7F7F7F]">
            Order Date
          </p>
          <p className="text-[#515151] text-[20px] font-sans">
            {formatDate(createdAt) || "21-01-2023"}
          </p>
        </div>
        <div className="fourth  w-full">
          <p className="font-normal font-sans text-[20px] text-[#7F7F7F]">
            Amount Due
          </p>

          <div className=" relative w-full pt-[5px] pb-[15px] ">
            <div className="pointer-events-none absolute  left-0 top-[4px] flex items-center pl-3">
              <span className=" text-[30px] text-[#00008b] font-bold">$</span>
            </div>
            <div>
              <input
                className="block w-full rounded-lg border-[1px]  text-[#00008b] pl-[32px]  pr-4 mb-[8px]  placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-[30px] font-bold 	"
                disabled={!(userDetails?.role === "admin")}
                type="number"
                value={invoiceData.amountDue}
                placeholder="1200"
                name="amountDue"
                onChange={updateInvoiceData}
              />
            </div>
          </div>
          <>
            {orderStatus === ORDER_STATUS.COMPLETED && (
              <button
                disabled={!accepted}
                className="h-[35px] mb-[8px] w-[200px] bg-black text-white font-semibold rounded-lg text-[18px]"
              >
                Pay & Download
              </button>
            )}

            <input
              className={cn(
                "appearance-none block rounded-sm w-full border-[1px] border-black text-gray-700  px-4 mb-[8px] leading-tight focus:shadow-lg  text-[16px] font-semibold text-black placeholder:text-[16px]",
                userDetails?.role === "client" && "invisible"
              )}
              disabled={!(userDetails?.role === "admin")}
              value={invoiceData.downloadUrl}
              type="text"
              placeholder="www.example.com"
              name="downloadUrl"
              onChange={updateInvoiceData}
            />
          </>
        </div>
      </div>
      <div className="text-right px-[40px] pb-[30px]">
        {userDetails?.role === "admin" ? (
          <button
            className="h-[41px] w-[100px] bg-black text-white font-semibold rounded-lg text-[18px]"
            onClick={() => {
              mutation.mutate();
            }}
          >
            Submit
          </button>
        ) : (
          <>
            {!accepted ? (
              <button
                onClick={() => {
                  acceptOffedPrice();
                }}
                className="h-[35px] mb-[8px] w-[100px] bg-black text-white font-semibold rounded-lg text-[18px]"
              >
                Accept
              </button>
            ) : (
              ""
            )}
          </>
        )}
        {/* {userDetails.role == "admin" && accepted === true ? (
          <p className=" text-[16px] pt-4 font-sans font-bold text-[#00CC95]">
            Offer Accepted by client
          </p>
        ) : (
          ""
        )} */}
        {/* <span>
          {" "}
          <a href={`http://localhost:5000/${orderAttachment}`}>
            ORDER ATTACHMENT
          </a>
        </span> */}
      </div>
      <MessagingCard
        messageUnseen={item.messageUnseen}
        userId={userDetails?.userDetails}
        orderId={item._id}
      />
    </div>
  );
};

export default InvoiceCard;
