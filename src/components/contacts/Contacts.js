import React from "react";

const Contacts = () => {
  return (
    <div
      name="contacts"
      className="w-full h-screen sm:h-auto bg-zinc-100 dark:bg-[#0a1928] dark:text-white flex justify-center items-center py-20"
    >
      <form
        method="POST"
        action="https://getform.io/f/9dad51fe-f408-48a8-867f-074815c2cd25"
        className="flex flex-col max-w-[600px] w-full px-4"
      >
        <div className="pb-2">
          <p className=" border-b-4 text-4xl md:text-5xl font-semibold border-pink-600 w-[215px] md:w-[285px]">
            Contact Me
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg pt-1">
            * Fill the form below and Submit it to send me a message obout your
            opinion of this portfolio.
          </p>
        </div>
        <input
          className="m-2 text-lg p-2 border-2 border-gray-500 rounded-md focus:outline-pink-600"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="m-2 text-lg p-2 rounded-md border-2 border-gray-500 focus:outline-pink-600"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="m-2 text-lg p-2 rounded-md border-2 border-gray-500 focus:outline-pink-600"
          name="message"
          rows="7"
          placeholder="Message"
          required
        ></textarea>
        <button className="dark:text-white text-lg border-2 hover:bg-pink-600 hover:text-white duration-300 border-pink-600 px-4 py-2 mt-3 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
