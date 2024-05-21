import Link from "next/link";

import { socialLinks } from "@/constants";

export const Social = () => {
  return (
    <ul className="flex items-center justify-center gap-8 mb-8 xl:mb-0">
      {socialLinks.map(({ name, path, icon }) => (
        <li key={name} className="flex items-center justify-center">
          <Link
            href={path}
            target="_blank"
            className="flex items-center justify-center rounded-md w-14 h-14 border border-accent text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};
