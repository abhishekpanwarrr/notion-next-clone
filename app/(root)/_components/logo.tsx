import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600", "400"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"/logo-dark.svg"} width={"40"} height={"40"} alt="Logo" />
      <p className={cn("font-semibold", fonts.className)}>Notion</p>
    </div>
  );
};

export default Logo;
