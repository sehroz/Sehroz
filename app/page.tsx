import Link from "next/link";
import React from "react";
import Particles from "../components/ui/particles";

const navigation = [];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-curved z-0 -left-full -top-full"></div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />{" "}
      <div className=" w-4/12 z-10 relative">
        <h2 className="text-sm text-zinc-100">Hey, I am</h2>{" "}
      </div>
      <h1 className="z-10 text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text relative">
        Sehroz.
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="  animate-fade-in grid h-24 w-5/12 text-center">
        <h1 className=" text-xl text-yellow-500 p-5">View Recent Projects</h1>
        <div className="flex justify-evenly pt-2">
          <Link
            target="_blank"
            href="https://www.alphaappraisals.ca"
            className=" pr-5 hover:font-bold underline duration-500 text-zinc-300"
          >
            Alpha Appraisals
          </Link>{" "}
          <Link
            target="_blank"
            href="https://www.condosx.ca"
            className=" hover:font-bold underline duration-500 text-zinc-300"
          >
            CondosX
          </Link>
        </div>
        <a
          href="mailto:info@sehroz.com"
          className=" text-md font-bold text-blue-500 pt-10"
        >
          info@sehroz.com
        </a>
      </div>
    </div>
  );
}
