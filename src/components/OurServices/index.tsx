import styles from "./ourServices.module.css";

const OurServices = () => {
  const serviceData: any = [
    {
      title: "Lead Generation",
      description:
        "Our B2B lead generation service leverages cutting-edge strategies and industry insights to connect you with high-quality, qualified leads, paving the way for sustainable business growth.",
      url: "/leadgen",
      imageUrl: "/assets/images/homepage/lead_gen.webp",
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing expertise empowers your business to reach, engage, and convert your target audience with precision-crafted campaigns that drive results.",
      url: "/email-marketing",
      imageUrl: "/assets/images/homepage/email_marketing.webp",
    },
    {
      title: "PowerPoint Presentation",
      description:
        "Our PowerPoint presentation making service offers expertly crafted, visually captivating slides that convey your message with impact, helping you captivate your audience and deliver memorable presentations.",
      url: "/power-point-presentation",
      imageUrl: "/assets/images/homepage/power_point.webp",
    },
  ];

  return (
    <a className="cursor-pointer " href="/leadgen">
      <div className="flex md:flex-row flex-col mt-6 ">
        {serviceData.map((item: any, index: number) => (
          <div className={styles.container} key={index}>
            <img src={item?.imageUrl} alt="Avatar" className={styles.image} />
            <div className={styles.overlay}></div>
            <div className={styles.titleText}>
              <h4 className="text-3xl 2xl:text-[30px] font-bold tracking-tight px-8 ">
                {item?.title}
              </h4>
              <p className="px-8 pt-4 2xl:text-lg">{item?.description}</p>
            </div>

            <p className={styles.text}>
              More about {item?.title?.toLowerCase()} &#10230;
            </p>
          </div>
        ))}
      </div>
    </a>
  );
};

export default OurServices;
