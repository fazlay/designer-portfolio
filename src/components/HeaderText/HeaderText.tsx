import React from "react";

interface HeaderTextProps {
  className?: string;
  text: string;
  subTitle?: string;
  titleClassName?: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({
  className = "",
  titleClassName = "text-center",
  text,
  subTitle = false,
}) => {
  return (
    <div className={`${className}`}>
      <h1
        className={` ${titleClassName}  text-4xl leading-none 2xl:text-3xl font-sans font-bold text-heading `}
      >
        {text}
      </h1>
      {subTitle && (
        <p className=" text-heading 2xl:text-[18px] font-sans font-light pt-[20px]">
          <span dangerouslySetInnerHTML={{ __html: subTitle }} />
        </p>
      )}
    </div>
  );
};

export default HeaderText;
