import React, { useRef, useState } from "react";

import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toastify } from "@/config/swealert";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LetterAvatar } from "@/avatar/avatar";
import { QUERY_KEYS } from "@/lib/enums";
import { cn } from "@/utils/classNameMerge";
import httpClient from "@/lib/http-client";
import useUserDetails from "@/hook/userDetails.hook";

interface IMessagingCardProps {
  userId: string | undefined;
  orderId: string;
  messageUnseen: number;
}
const fetchAllMessages = async (orderId: string) => {
  const response = await httpClient.get(
    `/message?orderId=${orderId}&sortBy=desc`
  );
  console.log(response.data);
  return response.data;
};
const MessagingCard: React.FC<IMessagingCardProps> = ({
  userId,
  orderId,
  messageUnseen,
}) => {
  const { userDetails, loading } = useUserDetails();
  const [message, setMessage] = useState<string>("");
  const [viewMessage, setViewMessage] = useState<boolean>(false);

  const toggleViewMessage = () => {
    setViewMessage(!viewMessage);
  };

  const inputRef = useRef<any>(null);
  const { data: fetchedMessages, isLoading } = useQuery<any>({
    queryKey: [QUERY_KEYS.FETCH_ALL_MESSAGE],
    queryFn: () => fetchAllMessages(orderId),
  });

  const updateMessageStatus = (e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log("message status updated", e.target.value);
  };

  const submitMessage = () => {
    const messageObject = {
      orderId: orderId,
      sentBy: userId,
      message: message,
      isSeen: false,
    };
    httpClient.post("/message/create-message", messageObject).then((res) => {
      console.log(res.data);

      if (res.data.success) {
        inputRef.current.value = "";
        toastify({ icon: "success", title: "Message sent successfully" });
      }
    });
  };
  const client = useQueryClient();
  const mutation = useMutation<void, unknown, void, unknown>({
    mutationFn: async () => {
      await submitMessage();
    },
    onSuccess: () => {
      client.invalidateQueries(QUERY_KEYS.FETCH_ALL_MESSAGE as any);
    },
  });
  if (isLoading || loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="bg-[#EFEFEF] px-[40px] py-4 flex flex-row justify-end">
        <div
          className=" relative"
          onClick={() => {
            toggleViewMessage();
            httpClient.patch(`/message/${orderId}?userId=${userId}`);
          }}
        >
          <span
            className={cn(
              "absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-sm text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-[#00CC95] text-white",
              `${messageUnseen <= 0 ? "invisible" : ""}`
            )}
          >
            {messageUnseen}
          </span>
          <div className="flex flex-row items-center">
            <p className="text-[20px] font-normal pr-3 cursor-pointer">
              Message
            </p>
            <FontAwesomeIcon
              icon={viewMessage ? faAngleDown : faAngleRight}
              className="pt-2"
            />
          </div>
        </div>
      </div>
      {viewMessage && (
        <>
          <div className="messages bg-[#F9F9F9] px-[40px]  pt-[20px]">
            <div className="flex flex-col py-2 gap-y-[10px]">
              {fetchedMessages?.data?.map((item: any, index: number) => (
                <div key={index}>
                  {userDetails?.email !== item?.sentBy?.email ? (
                    <div className="flex flex-row items-center">
                      <LetterAvatar>
                        {item?.sentBy?.name?.firstName?.charAt(0)}
                        {item?.sentBy?.name?.lastName?.charAt(0)}
                      </LetterAvatar>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        {item.message}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-start flex-row-reverse">
                      <LetterAvatar>
                        {" "}
                        {item?.sentBy?.name?.firstName?.charAt(0)}
                        {item?.sentBy?.name?.lastName?.charAt(0)}
                      </LetterAvatar>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        {item.message}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <input
              type="text"
              placeholder="Type your message here"
              className="bg-[#F9F9F9] px-[10px] py-[5px]  rounded-lg border-[#E5E5E5] border-[1px] w-full"
              ref={inputRef}
              onBlur={updateMessageStatus}
            />
          </div>

          <div className="flex flex-row justify-end px-[40px] py-[20px]">
            <button
              onClick={() => {
                mutation.mutate();
              }}
              className="bg-black text-white px-[40px] py-[5px] rounded-lg"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MessagingCard;
