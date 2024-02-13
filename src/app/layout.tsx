"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { ThemeProvider } from "next-themes";


 const metadata: Metadata = {
  title: "Studio 6/6 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </ThemeProvider>
        </body>
        
    </html>
  );
}
