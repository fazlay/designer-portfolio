import { Josefin_Sans, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const dinNextFont = localFont({
  src: [
    {
      path: "../../../public/font/din-next-w10-light.ttf",
      // weight: "300",
    },
  ],
  variable: "--font-dinNext",
});

export const montserrat = Montserrat({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  style: ["normal", "italic"],
  display: "swap",
});

export const josefin_semibold = Josefin_Sans({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-josefin-semibold",
  display: "swap",
  style: ["normal", "italic"],
});
