import Link from "next/link";
import React from "react";
import Particles from "../components/ui/particles";

const navigation = [];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen  overflow-hidden">
      <div className=" absolute inset-0  bg-gradient-curved z-0 "></div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />{" "}
      <div className=" z-10 relative">
        <h2 className="text-xl font-extrabold text-zinc-100">Hey, I am </h2>{" "}
      </div>
      <h1 className="z-10 text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text relative">
        <span className="gradient-animation">Sehroz.</span>
      </h1>
      <h1 className=" text-sm  font-light text-white pt-5">
        Full Stack Web Developer
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="  animate-fade-in grid text-center p-10 ">
        <h1 className=" text-sm  font-bold text-white pt-5">My Recent Work</h1>
        <div className="flex w-screen sm:w-fit align-middle justify-evenly   items-center pt-2 text-xl font-thin">
          <Link
            target="_blank"
            href="https://www.alphaappraisals.ca"
            className=" hover:font-bold  animate-pulse duration-500 text-white px-10"
          >
            Alpha
            <br />
            Appraisals
          </Link>{" "}
          <Link
            target="_blank"
            href="https://www.condosx.ca"
            className=" hover:font-bold  animate-pulse  duration-500 text-white px-10"
          >
            CONDOSX
          </Link>
        </div>

        <a
          href="https://linkedin.com/in/sehroz"
          target="_blank"
          className=" w-full text-md font-bold text-yellow-500 pt-10 text-center align-middle items-center center justify-center"
        >
          linkedin.com/in/sehroz <br />
          <span className="font-light"> Toronto </span>{" "}
         
        </a>
      </div>
    </div>
  );
}
