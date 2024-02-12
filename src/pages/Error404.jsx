import React from "react";
import Error from "../assets/error404.svg";

const Error404 = () => {
  return (
    <>
      <section className="bg-primary ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium ">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Siden kunne ikke findes
            </h1>
            <p className="mt-4 ">Vi kunne ikke finde frem til siden.</p>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img className="w-full max-w-lg lg:mx-auto" src={Error} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
