import { FiDownload } from "react-icons/fi";

import { Stats } from "@/components/Stats";
import { Photo } from "@/components/Photo";
import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span>Software Developer</span>
          <h1 className="h1 mb-6">
            Hello! I&apos;m <br />
            <span className="text-accent">Serhii Kulbashnyi</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
            asperiores qui laboriosam? Ullam, deleniti.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              type="button"
              className="flex items-center gap-4 uppercase"
            >
              Download CV
              <FiDownload className="w-6 h-6" />
            </Button>
            <Social />
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
}
