"use client";

import { Button } from "~/components/ui/button";
// removed unused ArrowRight import
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection1() {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Ninong Ry</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              BIBINGKA TIRAMISU? PISTACHIO BIBINGKA? Ninong Ry
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Simbang gabi nanamaaaaaaaann…. Pagtapos ng simbang gabi kasama mo jowa mo siyempre bibilan mo siya ng bibinka. Tapos kakainin mo yung… siyempre bibinka nya. Pero mas maangas kung marunong ka gumawa ng bibinka kaya naman gagawa tayo ng bibinka at susubukan natin lagyan ng ibat ibang flavor. Bisitahin din natin ang legendary na sa malabon pagdating sa bibinka. Simulan na to!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.youtube.com/watch?v=bqoo-MF0uwU&t=1622s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <span>Watch Now</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/ninongry.jpg"
              alt="Hero section visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
