import Navbar from "./components/navbar";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: "From Figma to Next JS",
  description: "Developed by Francis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Navbar/>
          {children}
      </body>
    </html>
  );
}
