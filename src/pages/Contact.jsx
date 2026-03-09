import React from "react";

function Contact() {
  return (
    <>
      <section className="l mt-20 grow bg-[#141414]">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwPoxPiFF"
          crossorigin="anonymous"
        />

        {/* Heading  */}

        <section className="flex h-30 w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <div className="my-3 h-1 w-30 rounded-2xl bg-[#A78BFA]"></div>
        </section>

        <h1 className="h-8 w-full px-8 text-2xl font-bold text-[#A78BFA] lg:my-3 lg:px-14 lg:text-3xl">
          Let's talk
        </h1>

        {/* Text box */}

        <section className="lg:flex">
          <section className="h-140 w-full">
            <p className="h-25 w-full px-8 text-gray-300 lg:w-160 lg:px-14 lg:text-xl">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            {/* contact list*/}

            <div className="mx-5 flex h-30 w-100 items-center justify-center lg:mx-14">
              <div className="flex h-15 w-20 items-center justify-center rounded-full text-3xl text-white duration-300 hover:text-[#A78BFA]">
                <i class="fa fa-envelope"></i>{" "}
              </div>
              <div className="flex h-30 w-100 flex-col justify-center px-4">
                <h1 className="text-xl font-bold text-white">Email</h1>
                <p className="text-gray-300 duration-300 hover:text-[#A78BFA]">
                  aungkhantsi@gmail.com
                </p>
              </div>
            </div>

            <div className="mx-5 flex h-30 w-100 items-center justify-center lg:mx-14">
              <div className="flex h-15 w-20 items-center justify-center rounded-full text-3xl text-white">
                &#128222;
              </div>
              <div className="flex h-30 w-100 flex-col justify-center px-4">
                <h1 className="text-xl font-bold text-white">Phone</h1>
                <p className="text-gray-300 duration-300 hover:text-[#A78BFA]">
                  +95 9967443230
                </p>
              </div>
            </div>

            <div className="mx-5 flex h-30 w-100 items-center justify-center lg:mx-14">
              <div className="flex h-15 w-20 items-center justify-center rounded-full text-3xl text-white duration-300 hover:text-[#A78BFA]">
                <i class="fa fa-map-marker"></i>
              </div>
              <div className="flex h-30 w-100 flex-col justify-center px-4">
                {" "}
                <h1 className="text-xl font-bold text-white">Location</h1>
                <p className="text-gray-300 duration-300 hover:text-[#A78BFA]">
                  Yangon,Myanmar
                </p>
              </div>
            </div>

            {/* icon place  */}

            <div className="mx-8 my-3 px-5 text-xl font-bold lg:mx-8">
              <h1 className="text-xl font-bold text-white">Follow Me</h1>
              <div className="flex text-3xl text-white">
                <div className="duration-300 hover:text-[#A78BFA]">
                  <i className="fa fa-github pr-6"></i>
                </div>
                <div className="duration-300 hover:text-[#A78BFA]">
                  <i class="fa fa-linkedin"></i>
                </div>
              </div>
            </div>
          </section>

          <section className="flex h-190 w-full items-center justify-center lg:mb-20 lg:h-150">
            <section className="h-160 w-100 rounded-2xl bg-[#1E1E1E] lg:h-150 lg:w-140 lg:px-4">
              {/* form  */}

              <form className="px-8 pt-4 leading-14 lg:leading-12">
                <label className="text-2xl font-bold text-white">Name</label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-10 w-85 rounded-xl bg-[#343434] px-2 text-gray-300 lg:w-110"
                />{" "}
                <br />
                <label className="text-2xl font-bold text-white">
                  Email
                </label>{" "}
                <br />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-10 w-85 rounded-xl bg-[#343434] px-2 text-gray-300 lg:w-110"
                />{" "}
                <br />
                <label className="text-2xl font-bold text-white">
                  Subject
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="h-10 w-85 rounded-xl bg-[#343434] px-2 text-gray-300 lg:w-110"
                />{" "}
                <br />
                <label className="text-2xl font-bold text-white">
                  Message
                </label>{" "}
                <br />
                <textarea
                  placeholder="Your message here..."
                  className="h-30 w-80 rounded-xl bg-[#343434] px-2 text-gray-300 lg:w-110"
                ></textarea>{" "}
                <br />
                <input
                  type="submit"
                  value="Send Message"
                  className="shadow-3xl w-80 rounded-2xl border-2 border-[#A78BFA] bg-[#A78BFA] text-white shadow-blue-900 duration-700 hover:border-white hover:bg-white hover:text-[#A78BFA] lg:w-110"
                />
              </form>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
