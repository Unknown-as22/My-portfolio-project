import React from "react";
import { Link, NavLink } from "react-router";
import Man from "../assets/Man.png";
import figma from "../assets/Picflow Images Mar 9/figma-brands-solid.webp";
import code from "../assets/Picflow Images Mar 9/code-solid.webp";
import light from "../assets/Picflow Images Mar 9/lightbulb-regular.webp";

function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwPoxPiFF"
        crossorigin="anonymous"
      />

      <div className="mt-20 grow bg-[#141414]">
        {/* Upper part of image */}
        <section className="mt-15 mb-30 h-240 w-full lg:flex lg:h-130">
          <div className="mb-5 h-125 w-full lg:flex lg:w-250 lg:flex-col lg:justify-center lg:px-10 lg:pl-20">
            <h1 className="text-6xl font-bold text-[#ffffff]">
              Bridging the gap between{" "}
              <span className="text-[#A78BFA]"> Human-Centered Design</span> &
              <span className="text-[#A78BFA]">Scalable Code</span>.
            </h1>
            <p className="text-2xl leading-20 font-bold text-white">
              Hi,I'm Aung Khant Si. I'm Web Developer.
            </p>

            {/* button  */}

            <div className="ml-8 flex h-14 w-110 justify-between lg:ml-0">
              <NavLink
                to="/About"
                className="ml-4 flex h-14 w-110 justify-between lg:ml-0"
              >
                <button className="bold w-50 transform cursor-pointer rounded-4xl bg-[#A78BFA] text-white shadow-[#A78BFA] duration-500 hover:shadow-sm">
                  View My Work &rarr;
                </button>
              </NavLink>
              <NavLink
                to="/Contact"
                className="ml-5 flex h-14 w-110 justify-between lg:ml-0"
              >
                <button className="w-50 cursor-pointer rounded-4xl bg-white font-bold text-[#A78BFA] shadow-[#A78BFA] duration-500 hover:bg-[#A78BFA] hover:text-white hover:shadow-sm">
                  Get in Touch
                </button>
              </NavLink>
            </div>

            {/* icon  */}

            <div className="ml-3 flex h-14 w-70 items-center justify-evenly text-4xl font-bold text-white lg:my-5">
              <div className="duration-300 hover:text-[#A78BFA]">
                <i className="fa fa-github"></i>
              </div>
              <div className="duration-300 hover:text-[#A78BFA]">
                <i class="fa fa-linkedin"></i>
              </div>
              <div className="duration-300 hover:text-[#A78BFA]">
                <i class="fa fa-envelope"></i>
              </div>
            </div>
          </div>

          {/* Image part */}
          <div className="flex h-120 w-full items-center justify-center lg:h-130 lg:w-150">
            <div className="relative h-110 w-85 rounded-4xl bg-[#A78BFA] blur-md lg:h-120 lg:w-100"></div>
            <div className="absolute">
              <img
                src={Man}
                alt="Man image"
                className="h-100 w-80 rounded-3xl lg:h-120 lg:w-90 lg:rounded-4xl"
              />
            </div>
          </div>
        </section>

        {/* boxed */}

        <section className="my-60 flex h-200 w-full flex-col items-center justify-center gap-10 lg:mx-20 lg:flex lg:h-100 lg:flex-row lg:gap-30">
          <div className="flex h-65 w-75 flex-col justify-center rounded-3xl bg-gray-500 pl-3 shadow-gray-400 duration-500 hover:shadow-2xl">
            <img
              src={figma}
              alt="figma"
              className="h-18 w-18"
            />
            <h1 className="py-4 text-2xl font-bold text-white">
              User-Centric Design
            </h1>
            <p className="text-gray-300">
              Crafting intuitive and aesthetically pleasing interfacesby
              prioritizing user research and wireframing to ensure a seamless
              human- computer interaction
            </p>
          </div>
          <div className="flex h-65 w-75 flex-col justify-center rounded-3xl bg-gray-500 pl-3 shadow-gray-400 duration-500 hover:shadow-2xl">
            <img
              src={code}
              alt="code"
              className="h-15 w-15"
            />
            <h1 className="py-4 text-2xl font-bold text-white">
              Pixel-Perfect Dev
            </h1>
            <p className="text-gray-300">
              Transforming complex designs into high-performance, responsive web
              applications using modern frameworks with a meticulous eye for
              detail.
            </p>
          </div>
          <div className="flex h-65 w-75 flex-col justify-center rounded-3xl bg-gray-500 pl-3 shadow-gray-400 duration-500 hover:shadow-2xl">
            <img
              src={light}
              alt="lightbulb"
              className="h-18 w-18"
            />
            <h1 className="py-4 text-2xl font-bold text-white">
              Seamless Interaction
            </h1>
            <p className="text-gray-300">
              Enhancing user engagement through fluid micro-interactions and
              rigorous performance optimization for a lightning-fast experience.
            </p>
          </div>
        </section>

        {/* Quote  */}

        <section className="flex h-30 w-full flex-col items-center justify-center bg-[#0F0F0F]">
          <p className="font-serif text-2xl text-gray-300 italic">
            "Simplicity is the ultimate sophistication."
          </p>
          <p className="text-2xl text-gray-300">- Leonardo da Vinci</p>
        </section>
      </div>
    </>
  );
}

export default Home;
