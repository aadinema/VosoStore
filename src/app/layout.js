'use client'
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/Home/Navigation/Topbar/Topbar";
import Navigation from "@/Home/Navigation/Mainbar/Navigation";
import Footer from "@/Home/Footer/Footer";
import Playstore from "./PlaystoreButton/Playstore";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Topbar />
        <Navigation />
        <Playstore />
        {children}
        <Footer />
      </body>
    </html>
  );
}
