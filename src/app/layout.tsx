import type { Metadata } from "next";
import { Rowdies } from "next/font/google";
import "./globals.css";
// import NavBar from "../components/navbar";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rowdies.className + " font-normal"}>
      <body className="antialiased">
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
