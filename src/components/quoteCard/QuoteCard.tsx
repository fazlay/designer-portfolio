import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

import "aos/dist/aos.css";

interface QuoteCardProps {
  index?: number;
  image?: boolean;
  title?: string;
  description?: string;
  name?: string;
  designation?: string;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const QuoteCard: React.FC<QuoteCardProps> = ({
  index = 1,
  image = false,
  title = "The Admaze Here To Solve",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi nisl, vestibulum non dolor id, vestibulum semper nisi. Cras sit",
  name = "Jhon Doe",
  designation = "CEO, ABC Media",
}) => {
  return (
    <div className="inner-container  min-h-96 2xl:h-[700px] mb-6 block md:flex  pr-2 text-black bg-background-card 2xl:p-12 p-4">
      <div
        className={`left-section flex flex-col justify-between md:w-1/2 md:pr-4  md:order-${
          index % 2 == 0 ? 2 : 1
        }`}
      >
        <div className="py-16 px-8 flex flex-col h-full justify-between   ">
          <div>
            <h2 className="text-3xl 2xl:text-4xl 2xl:leading-tight font-bold font-primary-heading uppercase text-left">
              {title}
            </h2>
            <p className="text-left 2xl:text-base 2xl:py-8 py-4">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
          </div>
          <div className="text-left 2xl:text-2xl font-semibold ">
            <p>{name}</p>
            <p>{designation}</p>
          </div>
        </div>
      </div>
      <div
        className={`right-section  md:w-1/2 flex    md:order-${
          index % 2 == 0 ? 1 : 2
        }`}
      >
        {image ? (
          <Image
            src="/assets/images/stock_01.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <ReactPlayer
            className="react-player "
            url="https://www.youtube.com/watch?v=h9vETeRiulY"
            width="100%"
            height="100%"
            light={
              <img
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=366&q=80"
                alt="Thumbnail"
                className="block w-full h-full object-cover"
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default QuoteCard;
