"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={`${
                path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
