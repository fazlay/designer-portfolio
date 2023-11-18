import Image from "next/image";
import React from "react";

interface StatementMessageProps {}

const StatementMessage: React.FC<StatementMessageProps> = () => {
  return (
    <section>
      <div className="inner-container min-h-96   block md:flex  pr-2 text-black ">
        {/* 2xl:h-[700px] */}
        <div
          className={`left-section flex flex-col justify-between md:w-1/2  md:order-2`}
        >
          <div className="p-6 2xl:p-12 flex flex-col h-full justify-between bg-['#FCFCFC]">
            <div>
              <h2 className="text-2xl 2xl:text-3xl 2xl:leading-tight font-bold text-left">
                “Our commitment to your success goes beyond words; it's in our
                every action”
              </h2>
              <p className="text-left 2xl:text-lg font-montserrat-normal antialiased 2xl:py-8 py-4">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "As the CEO of AdMaze, I'm proud to lead a team of passionate experts dedicated to your success. With years of industry experience, we've honed our skills to deliver unparalleled results. We believe in the potential of every business we partner with. We're the growth catalyst of your business. Our commitment to transparency, trustworthiness, and innovation drives us to create tailor-made strategies that yield tangible outcomes.</br> </br> Our diverse client portfolio, spanning multiple industries, reflects the trust our clients place in us. We don't just follow industry trends; we set them. With us, you're not just a client; you're a valued partner on a journey to success. Admaze invites you to explore the possibilities, and let us be the driving force behind your business's growth story.",
                  }}
                />
              </p>
            </div>
            <div className="text-left 2xl:text-2xl font-semibold ">
              <p>Saiful</p>
              <p>Fonder, AdMaze Media LLC</p>
            </div>
          </div>
        </div>
        <div className={`right-section relative md:w-1/2 flex  md:order-1`}>
          <Image
            src="/assets/images/stock_01.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StatementMessage;
