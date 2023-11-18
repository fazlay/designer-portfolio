import EmailMarketing from "@/icons/our_services_homepage_2";
import EmailPageCardFirstIcon from "@/icons/email_1_emailPage";
import EmailPageCardSecIcon from "@/icons/email_2_emailPage";
import EmailPageCardThirdIcon from "@/icons/email_3_emailPage";
import LeadGenerationService from "@/icons/our_services_homepage_1";
import LeadGenServiceCardFirst from "@/icons/leadgen_1_leadpage";
import LeadGenServiceCardSec from "@/icons/leadgen_2_leadpage";
import LeadGenServiceCardThird from "@/icons/leadgen_3_leadpage";
import PowerPointCardIconFirst from "@/icons/power_1_ppPage";
import PowerPointCardIconSec from "@/icons/power_2_ppPage";
import PowerPointCardIconThird from "@/icons/power_3_ppPage";
import PowerPointPresentationService from "@/icons/our_services_homepage_3";

import { FeaturedServicesType } from "./homepage.constants";

export const whyToChooseUsArray = [
  { iconUrl: "/assets/images/homepage/home_page_1.svg" },
  { iconUrl: "/assets/images/homepage/home_page_2.svg" },
  { iconUrl: "/assets/images/homepage/home_page_3.svg" },
];

export const ourServicesArray = [
  {
    title: "B2B Lead Generation",
    description:
      "Elevate your sales strategy with our Targeted Lead Generation service. Convert prospects into loyal customers effortlessly",
    iconUrl: <LeadGenerationService />,
  },
  {
    title: "Appointment Setting",
    description:
      "Maximize your ROI with our Appointment Setting service. Conversions are just a call away make the smart choice for your business",
    iconUrl: <EmailMarketing />,
  },
  {
    title: "Account Based Marketing",
    description:
      "Ready to close bigger deals and grow faster? Account Based Marketing is the key to tailor-made success. Take the first step now! ",
    iconUrl: <PowerPointPresentationService />,
  },
];

export const aboutUsArray = [
  {
    title: "Targeted Lead Generation",
    description:
      "Our strategic approach to targeted lead generation ensures that your business connects with high-potential prospects, driving conversions and revenue growth.",
    iconUrl: <LeadGenServiceCardFirst />,
  },
  {
    title: "Account-Based Marketing",
    description:
      "With our Account-Based Marketing expertise, we craft customized campaigns that engage key accounts, fostering long-term relationships and revenue expansion.",
    iconUrl: <LeadGenServiceCardSec />,
  },
  {
    title: "Qualified Leads",
    description:
      "We specialize in generating highly qualified leads for your sales and marketing efforts. Our strategies ensure you connect with prospects most likely to convert, saving time and maximizing ROI. ",
    iconUrl: <LeadGenServiceCardThird />,
  },
];

export const servicePageFeaturedServices: Array<FeaturedServicesType> = [
  {
    img: "/assets/images/services/service_1_service_page.svg",
    title: "Maximize ROI",
    subTitle:
      "Our strategies ensure your investments yield maximum returns and profitability.",
  },

  {
    img: "/assets/images/services/service_2_service_page.svg",
    title: "Boost Conversions",
    subTitle:
      "We employ conversion-focused tactics to</br> elevate engagement and drive more sales.",
  },

  {
    img: "/assets/images/services/service_3_service_page.svg",
    title: "Accelerate Growth",
    subTitle:
      "Our proven methods propel your business </br> forward, accelerating growth and success",
  },
];

export const homepageServices: Array<FeaturedServicesType> = [
  {
    img: "/assets/images/homepage/about_us_1.svg",
    title: "Delivering Proven Results",
    subTitle: "Leverage our extensive expertise to achieve tangible outcomes",
  },

  {
    img: "/assets/images/homepage/about_us_2.svg",
    title: "Customized Strategies",
    subTitle: "Craft tailored solutions to suit your unique business needs",
  },

  {
    img: "/assets/images/homepage/about_us_3.svg",
    title: "Professional Team",
    subTitle:
      "Rely on our expertise for an unwavering commitment to your success",
  },
];

export const leadGenerationFeaturedServices: Array<FeaturedServicesType> = [
  {
    img: <LeadGenServiceCardFirst />,
    title: "Quality Over Quantity",
    subTitle:
      "Our commitment is to provide you with high-quality leads, ensuring each prospect holds genuine potential, not just numbers.",
  },

  {
    img: <LeadGenServiceCardSec />,
    title: "Data-Driven Results",
    subTitle:
      "Our lead generation strategies are rooted in data analysis, guaranteeing measurable, effective results that drive your business forward.",
  },

  {
    img: <LeadGenServiceCardThird />,
    title: "Rated #1 By Customers",
    subTitle:
      "Our clients have consistently rated us as the top choice for B2B lead generation, showcasing our excellence in service",
  },
];

export const accountBasedMarketingServices: Array<FeaturedServicesType> = [
  {
    img: <LeadGenServiceCardFirst />,
    title: "Tailored Strategy",
    subTitle:
      "Customized ABM tailored to your business ensures messaging resonates with your ideal clients, boosting engagement and conversions",
  },

  {
    img: <LeadGenServiceCardSec />,
    title: "Data-Driven Precision",
    subTitle:
      "Data analytics spotlight high-potential leads in your target accounts, ensuring precision and effectiveness in your outreach strategy",
  },

  {
    img: <LeadGenServiceCardThird />,
    title: "Client Success Stories",
    subTitle:
      "Client testimonials prove our Account-Based Marketing strategies deliver remarkable results, showcasing our commitment to promise fulfillment",
  },
];
export const appointmentSettingServices: Array<FeaturedServicesType> = [
  {
    img: <LeadGenServiceCardFirst />,
    title: "Personalized Approach",
    subTitle:
      "We manually curate each lead, focusing on key decision-makers within your target audience to get more appointments",
  },

  {
    img: <LeadGenServiceCardSec />,
    title: "Consistent Conversion Rates",
    subTitle:
      "Our data-backed approach turns appointments into growth opportunities, not just meetings, securing your business's success",
  },

  {
    img: <LeadGenServiceCardThird />,
    title: "Trusted by Businesses",
    subTitle:
      "Trusted by countless businesses as the top choice for effective, committed appointment-setting services",
  },
];

export const emailFeaturedServices: Array<FeaturedServicesType> = [
  {
    img: <EmailPageCardThirdIcon />,
    title: "Targeted Email Campaigns",
    subTitle:
      "We create tailored email campaigns to engage your ideal audience, delivering messages that resonate for maximum impact.",
  },

  {
    img: <EmailPageCardSecIcon />,
    title: "Conversion-Driven Strategy",
    subTitle:
      "Our data-driven approach ensures your email campaigns are optimized for conversions, boosting your ROI and bottom line",
  },

  {
    img: <EmailPageCardFirstIcon />,
    title: "Top-Rated Email Marketing",
    subTitle:
      "Our clients consistently rate us as the top choice for email marketing, reflecting our commitment to excellence and results.",
  },
];

export const powerPointFeaturedServices: Array<FeaturedServicesType> = [
  {
    img: <PowerPointCardIconFirst />,
    title: "Impactful Presentation Design",
    subTitle:
      "Transform your ideas into compelling visuals that captivate your audience and convey your message with clarity and impact.",
  },

  {
    img: <PowerPointCardIconSec />,
    title: "Tailored to Your Brand",
    subTitle:
      "Our designs align with your brand identity, ensuring cohesive and memorable presentations that leave a lasting impression",
  },

  {
    img: <PowerPointCardIconThird />,
    title: "Professional Excellence",
    subTitle:
      "Our team's expertise and attention to detail guarantee professional, polished presentations that elevate your communication and storytelling.",
  },
];
export const serviceCardData: Array<FeaturedServicesType> = [
  {
    img: "/assets/images/services/pp_1_pp_page.svg",
    title: "B2B Lead Generation",
    subTitle:
      "Transform your ideas into compelling visuals that captivate your audience and convey your message with clarity and impact.",
  },

  {
    img: "/assets/images/services/pp_2_pp_page.svg",
    title: "Email Marketing",
    subTitle:
      "Our designs align with your brand identity, ensuring cohesive and memorable presentations that leave a lasting impression",
  },

  {
    img: "/assets/images/services/pp_3_pp_page.svg",
    title: "PowerPoint Presentation",
    subTitle:
      "Our team's expertise and attention to detail guarantee professional, polished presentations that elevate your communication and storytelling.",
  },
];

export const portfolioData: Array<FeaturedServicesType> = [
  {
    img: "/assets/images/homepage/homepage_asset_01.svg",
    title: "Delivering Proven Results",
    subTitle: "Leverage our extensive expertise to achieve tangible outcomes.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_02.svg",
    title: "Customized Strategies",
    subTitle: "Craft tailored solutions to suit your unique business needs.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_03.svg",
    title: "Professional Team",
    subTitle:
      "Count on our unwavering commitment and expertise to steer your path to success.",
  },
  {
    img: "/assets/images/homepage/homepage_asset_01.svg",
    title: "Delivering Proven Results",
    subTitle: "Leverage our extensive expertise to achieve tangible outcomes.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_02.svg",
    title: "Customized Strategies",
    subTitle: "Craft tailored solutions to suit your unique business needs.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_03.svg",
    title: "Professional Team",
    subTitle:
      "Count on our unwavering commitment and expertise to steer your path to success.",
  },
  {
    img: "/assets/images/homepage/homepage_asset_01.svg",
    title: "Delivering Proven Results",
    subTitle: "Leverage our extensive expertise to achieve tangible outcomes.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_02.svg",
    title: "Customized Strategies",
    subTitle: "Craft tailored solutions to suit your unique business needs.",
  },

  {
    img: "/assets/images/homepage/homepage_asset_03.svg",
    title: "Professional Team",
    subTitle:
      "Count on our unwavering commitment and expertise to steer your path to success.",
  },
];
