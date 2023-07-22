import Link from "next/link";
import React from "react";
import Particles from "../components/ui/particles";

const navigation = [];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-slate-900 via-zinc-600/20 to-yellow-500">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Sehroz
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className=" text-center animate-fade-in grid h-24">
        <h2 className="text-sm text-zinc-500 ">
          Hi, my name is Sehroz. Let`s building something.
        </h2>
        <h1>Recent Work</h1>
        <Link
          target="_blank"
          href="https://alphaappraisals.ca"
          className="  text-xl underline duration-500 text-zinc-300"
        >
          Alpha Appraisals
        </Link>
        <Link
          target="_blank"
          href="https://condosx.ca"
          className="  text-xl underline duration-500 text-zinc-300"
        >
          CondosX
        </Link>
      </div>
    </div>
  );
}
