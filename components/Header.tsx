import Link from "next/link";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button type="button">Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
