import { Questrial, Rubik } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ToastContainer } from "react-toastify";

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
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="top-center" autoClose={3000} />
        </ReduxProvider>
      </body>
    </html>
  );
}
