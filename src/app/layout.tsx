import "./globals.css";
import React from "react";

import TopUtilityBar from "@/components/layout/TopUtilityBar";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ChinaBazaar - Home",
  description: "E-commerce platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopUtilityBar />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}