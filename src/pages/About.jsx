import React from "react";

function About() {
  return (
    <>
      <section className="mt-20 flex grow flex-col items-center justify-center bg-[#141414]">
        <section className="lg:h-170 lg:w-350 lg:flex-row">
          {/* First container  */}
          {/* First part before image */}

          <div className="mt-10 mb-30 h-300 w-100 rounded-2xl bg-[#343434] lg:mt-20 lg:mb-0 lg:flex lg:h-130 lg:w-350">
            <div className="ml-5 flex h-160 w-full flex-col justify-center gap-10 lg:ml-10 lg:h-130">
              <h1 className="text-3xl font-bold text-[#A78BFA]">
                Passionate Designer & Developer
              </h1>
              <p className="border-l-4 border-gray-300 px-4 text-xl text-gray-300">
                I’m a Frontend Developer who enjoys transforming ideas into
                clean, user-friendly digital experiences. I focus on simplicity
                and usability.
              </p>
              <p className="border-l-4 border-gray-300 px-4 text-xl text-gray-300">
                I create responsive and engaging interfaces that not only look
                good but also work seamlessly.Make my Website look more modern,
                easier to use and navigate around as well.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="h-3 w-4 rounded-full bg-gray-300 lg:w-3"></div>
                <h1 className="px-4 text-xl font-bold text-white">
                  Bridging creativity and code to build meaningful digital
                  products.
                </h1>
              </div>

              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />

              <div className="flex h-10 w-45 items-center justify-center gap-10 text-3xl text-white lg:h-15">
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

            {/* image part */}
            <div className="flex h-130 w-full flex-col items-center justify-end">
              <img
                src="src/assets/Man.png"
                alt="Man pic"
                className="h-120 w-90"
              />
            </div>
          </div>
        </section>

        {/* second container  */}

        <section className="flex h-220 w-full flex-col items-center justify-center lg:h-140">
          {/* <div className="h-10 w-40 bg-indigo-500 text-center"> */}
          <h1 className="text-4xl font-bold text-white">My Skills</h1>
          <div className="my-2 mb-6 h-1 w-50 rounded-2xl bg-[#A78BFA]"></div>
          {/* </div> */}

          {/* icon box1 */}

          <div className="mb-10 flex h-80 w-100 flex-wrap items-center justify-center gap-10 lg:mb-0 lg:h-50 lg:w-300">
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/Html.webp"
                alt="html"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/CSS.webp"
                alt="css"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/Javascript.webp"
                alt="javascript"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/Bootstrap.webp"
                alt="bootstrap"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
          </div>

          {/* icon box 2 */}

          <div className="flex h-80 w-100 flex-wrap items-center justify-center gap-10 lg:h-50 lg:w-300">
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/Figma.webp"
                alt="figma"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/GitHub.webp"
                alt="github"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/React JS.webp"
                alt="reactjs"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
            <div className="h-30 w-30 rounded-2xl bg-white">
              <img
                src="src\assets\Picflow Images Mar 8/Tailwind.webp"
                alt="tailwind"
                className="h-full w-full rounded-2xl shadow-[#A78BFA] duration-700 hover:shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Experience  */}

        <section className="mb-20 flex h-90 w-full flex-col items-center justify-center lg:h-120">
          <div className="flex h-40 w-110 items-center justify-center border-t border-white text-4xl font-bold text-white lg:w-300 lg:text-5xl">
            <h1>Experience</h1>
          </div>
          <div className="flex h-5 w-87 items-center lg:w-200">
            <div className="mx-2 h-3 w-3 rounded-full bg-[#A78BFA]"></div>
            <p className="text-[#A78BFA]">2026 - Present</p>
          </div>
          <div className="flex h-30 w-full flex-col items-center justify-center lg:h-50">
            <div className="h-30 w-80 border-l-2 border-white px-3 lg:flex lg:h-50 lg:w-193 lg:flex-col lg:justify-center lg:gap-6">
              <h1 className="text-xl font-bold text-white">
                Web Developer (Internship)
              </h1>
              <h1 className="text-xl text-gray-300">Normal Coding</h1>
              <p className="text-gray-300">
                Collaborated with FrontEnd and UI/UX developer.
              </p>
            </div>
          </div>
        </section>

        {/* Explaination  */}

        <section className="flex h-50 w-full flex-col justify-center bg-[#0F0F0F] text-center">
          <h1 className="pb-6 text-2xl font-bold text-white">Why Me?</h1>
          <p className="text-gray-300 lg:text-xl">
            Because I understand development, I can do technical execution and
            modern browser effectively - ensuring <br />
            that my browser isn't just beautiful but it is also functionable.
          </p>
        </section>
      </section>
    </>
  );
}

export default About;
