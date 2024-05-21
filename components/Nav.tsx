"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={`${
                path === pathname && "text-accent border-b-2 border-accent"
              } text-xl xl:text-base capitalize font-medium hover:text-accent transition-all`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
