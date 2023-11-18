import React from "react";

interface ItemCardProps {
  cardIcon: any;
  cardTitle: string;
  cardDescription: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  cardIcon,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="group border-[1px] border-[#EAEAEA] hover:border-transparent rounded-md hover:bg-[#1e1e1e] w-[calc(33%-10px)] h-[407px] flex flex-col items-center justify-center px-[45px]">
      <svg className="w-[60px] h-[60px] group-hover:fill-white -mt-[10px] ">
        {cardIcon}
      </svg>

      <h4 className="text-center group-hover:text-white text-md 2xl:text-[23px] font-semibold font-sans pt-[27px] pb-[10px]">
        {cardTitle}
      </h4>
      <p className=" text-center leading-[22px] group-hover:text-white font-normal font-sans text-[#444444] 2xl:text-[17.5px] px-[10px]">
        {cardDescription}
      </p>
    </div>
  );
};

export default ItemCard;
