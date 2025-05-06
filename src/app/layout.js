import { Questrial, Rubik } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubik = Rubik({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

export const metadata = {
  title: "Fresh Harvest",
  description: "Fresh foods and vegetables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${questrial.variable}  antialiased `}>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
