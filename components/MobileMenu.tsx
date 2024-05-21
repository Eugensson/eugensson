"use client";

import { CiMenuFries } from "react-icons/ci";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="my-12">
          <Logo />
        </div>
        <Nav />
      </SheetContent>
    </Sheet>
  );
};
