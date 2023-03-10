import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center bg-[#f5f5f5] py-8">
      <p className="font-normal font-Inter text-sm">Members Club Newsletter</p>
      <h2 className="font-Roboto font-normal text-xl py-4">JOIN</h2>
      <p className="font-Inter font-normal text-sm text-center mb-4">
        Subscribe for exclusive offers and new product announcements
      </p>
      <div className="border-b-2 border-solid border-[#A03030] m-0 border-0 rounded-none">
        <form>
          <input
            className="font-Inter outline-none border-none bg-[#f5f5f5] p-3"
            type="email"
            placeholder="Email"
          />
          <button className="cursor-pointer font-Inter px-3">Join</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
