import React from "react";

interface SectionDistanceProps {
  distance?: string;
}
interface TitleDistanceProps {
  distance?: string;
}

const SectionDistance: React.FC<SectionDistanceProps> = ({
  distance = "h-[80px]",
}) => {
  return (
    <div>
      <div className={`${distance}`}></div>
    </div>
  );
};
const TitleDistance: React.FC<TitleDistanceProps> = ({
  distance = "h-[70px]",
}) => {
  return <div className={`${distance}`}></div>;
};

export { SectionDistance, TitleDistance };
