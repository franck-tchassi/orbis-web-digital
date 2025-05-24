import React from "react";
import { Cover } from "@/components/ui/Cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold max-w-5xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-600 dark:from-white dark:to-gray-300">
        Boostez votre business avec <br /> 
        <Cover>des solutions digitales performantes</Cover>
      </h1>
    </div>
  );
}
