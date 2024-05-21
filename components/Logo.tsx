import Link from "next/link";
import { CodeXml } from "lucide-react";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="flex items-center gap-1 text-xl xl:text-4xl font-semibold">
        <CodeXml className="text-accent w-4 h-4 xl:w-8 xl:h-8 mr-1" />
        Eugensson
      </h1>
    </Link>
  );
};
