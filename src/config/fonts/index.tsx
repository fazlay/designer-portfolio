import { Josefin_Sans, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
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
