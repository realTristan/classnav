import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  style: ["normal"],
  weight: ["400", "700", "800"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Home | ClassNav",
  description: "Class Navigation for the University of Guelph",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
