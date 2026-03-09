import React from "react";
import { Link, NavLink } from "react-router";

function Projects() {
  return (
    <>
      <section className="mt-20 grow bg-[#141414]">
        {/* Introduction  */}

        <section className="flex h-65 w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white lg:text-3xl">
            Featured Projects
          </h1>
          <div className="my-3 h-1 w-30 rounded-2xl bg-[#A78BFA] lg:w-35"></div>
          <p className="text-center text-gray-300">
            A showcase of my journey in bridging the gap between aesthetics and
            functionality—from crafting user-centric UI/UX designs to building
            high-performance web applications.
          </p>

          {/* Button  */}

          <div className="my-3 h-15 w-100 flex-row text-center font-bold lg:mt-10">
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "text-[#A78BFA]"
                  : "transform text-[#ffffff] duration-300 hover:text-[#A78BFA]"
              }
            >
              <button className="mx-10 h-full w-32 cursor-pointer rounded-4xl bg-[#343434] text-gray-300 shadow-blue-900 duration-300 hover:bg-[#A78BFA] hover:shadow-2xs">
                UI/UX Design
              </button>
            </NavLink>
            <NavLink
              to="/Projects2"
              className={({ isActive }) =>
                isActive
                  ? "text-[#A78BFA]"
                  : "transform text-[#ffffff] duration-300 hover:text-[#A78BFA]"
              }
            >
              {" "}
              <button className="h-full w-32 cursor-pointer rounded-4xl bg-[#343434] text-gray-300 shadow-blue-900 duration-300 hover:bg-[#A78BFA] hover:shadow-2xs">
                Web Design
              </button>
            </NavLink>
          </div>
        </section>

        {/* container 1 */}

        <section className="flex h-120 w-full items-center justify-center lg:justify-start lg:pl-40">
          <div className="h-100 w-60 rounded-2xl">
            <div className="relative flex h-50 w-full items-center justify-center rounded-t-2xl bg-white">
              <p>
                <span className="text-[#A78BFA]">Thu Rain</span> creative &
                Dev{" "}
              </p>
            </div>
            <div className="flex h-50 w-full flex-col justify-center rounded-b-2xl bg-neutral-700">
              <h1 className="text-xl font-bold text-white">
                Portfolio UI UX Design
              </h1>
              <p className="py-5 text-gray-300">
                A clean and modern portfolio design focused on minimalism and
                typography.
              </p>
              <button className="h-8 w-20 rounded-2xl border-2 text-[#A78BFA]">
                Figma
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Projects;
