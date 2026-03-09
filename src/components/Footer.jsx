import React from "react";

function footer() {
  return (
    <>
      <footer className="flex h-16 w-full items-center justify-between bg-[#343434] px-2 text-[#ffffff]">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <p className="">&copy; 2026 Aung Khant Si / Web Developer</p>
        <div className="w-30 h-16  flex justify-center items-center gap-4 font-bold text-2xl lg:w-50 lg:text-3xl lg:gap-8">
        <i className="fa fa-github"></i>
        <i class="fa fa-linkedin"></i>
         <i class="fa fa-envelope"></i> 
         </div>

      </footer>
    </>
  );
}

export default footer;
