import Link from "next/link";
import { CodeXml } from "lucide-react";

export const Logo = () => {
  return (
    <Link href="/">
      <h1 className="flex items-center gap-1 text-4xl font-semibold">
        <CodeXml className="text-accent w-8 h-8" />
        Eugensson
      </h1>
    </Link>
  );
};
