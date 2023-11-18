import { cn } from "@/utils/classNameMerge";

import styles from "./button.module.css";

type IButtonProps = {
  btnClass?: string;
  children: string;
  animate?: boolean;
  fontSize?: string;
};

const StyledButton = (props: IButtonProps) => {
  const { btnClass, animate = false, fontSize = "text-normal" } = props;
  return (
    <div className={`relative ${btnClass}`}>
      <button
        className={`mr-6 z-10 text-white ${styles.outer_button} ${fontSize}`}
      >
        {props.children}
      </button>
      {animate ? (
        <button
          className={`animate-[ping_2s_ease-in-out_infinite] z-1 ${fontSize} ${styles.outer_button_transparent} bg-blue  mr-6 absolute top-0 left-0 text-transparent`}
        >
          Contact Us
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
interface IStatusButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "pending" | "completed" | "requested" | "rejected" | "processing";
}
const StatusButton: React.FC<IStatusButtonProps> = ({
  className,
  status = "pending",
}) => {
  return (
    <button
      className={cn(
        "text-white font-sans font-semibold flex flex-col items-center justify-center text-[16px] rounded-full w-[135px] h-[30px]",
        className,
        {
          "bg-[#F6B84B]": status === "pending",
          "bg-[#00CC95]": status === "completed",
          "bg-[#3C22F2]": status === "requested",
          "bg-[#FF4D4D]": status === "rejected",
          "bg-[#21B3F4]": status === "processing",
        }
      )}
    >
      {status === "pending"
        ? "Pending"
        : status === "completed"
        ? "Completed"
        : status === "requested"
        ? "Requested"
        : status === "rejected"
        ? "Rejected"
        : "Processing"}
    </button>
  );
};

interface ISubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
}

const SubmitButton = ({
  className,
  children,
  loading = true,
  disabled = false,
}: ISubmitButtonProps) => {
  return (
    <button
      className={cn(
        " relative submit px-4 rounded-lg flex justify-center items-center hover:border-black bg-black  py-2  text-white hover:bg-transparent hover:text-[#000] border-[1px] border-transparent cursor-pointer",
        className,
        `${disabled ? "opacity-50 cursor-not-allowed" : ""}`
      )}
      disabled={disabled}
    >
      <div
        className={cn(" loader absolute flex flex-row items-center", {
          invisible: loading,
        })}
      >
        {" "}
        <svg
          aria-hidden="true"
          role="status"
          className="inline mr-3 w-4 h-4 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          ></path>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div
        className={cn(className, {
          invisible: !loading,
        })}
      >
        {children}
      </div>
    </button>
  );
};

interface IAuthButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  disabled?: boolean;
}

const AuthButton = ({
  className,
  children,
  loading = false,
  disabled = false,
}: IAuthButtonProps) => {
  return (
    <button
      className={cn(
        "relative group appearance-none  cursor-pointer block rounded-full w-full border-[1px] border-black  hover:text-[#000] hover:bg-white py-[11px] px-4 mb-3 leading-tight focus:shadow-lg  mt-[21px] bg-[#172554] text-white overflow-hidden transition-all duration-300 ease-in-out",
        className,
        `${disabled ? "opacity-50 cursor-not-allowed" : ""}`
      )}
      disabled={disabled}
      type="submit"
      name="submit"
    >
      <div
        className={cn(
          "absolute flex flex-row items-center justify-center w-full left-0 ",
          {
            hidden: !loading,
          }
        )}
      >
        {" "}
        <svg
          aria-hidden="true"
          role="status"
          className="inline mr-3 w-4 h-4 text-white group-hover:text-[#000] animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          ></path>
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div
        className={cn(className, {
          invisible: loading,
        })}
      >
        {children}
      </div>
    </button>
  );
};

export { StyledButton, StatusButton, SubmitButton, AuthButton };

// <button
// className="appearance-none  cursor-pointer block rounded-full w-full border-[1px] border-black  hover:text-[#000] hover:bg-white py-[11px] px-4 mb-3 leading-tight focus:shadow-lg  mt-[21px] bg-[#172554] text-white"
// type="submit"
// name="submit"
// >
// Login
// </button>
