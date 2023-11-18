import React from "react";

const SingleBlog = () => {
  return (
    <div className=" p-4 2xl:p-8 border-2 hover:shadow-lg hover:scale-10 transform flex flex-col  sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          className=""
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Hollywood Sign on The Hill"
        />
      </a>
      <div className="py-6 px-4 text-left ">
        <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 ">
          Card title
        </h5>
        <p className="text-base font-medium text-neutral-600 pb-1.5">
          This longer.
        </p>
        <p className="mb-4 text-base font-bold text-neutral-600 ">
          August 21st, 2021
        </p>
        <p className="mb-4 text-base text-neutral-600 ">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
