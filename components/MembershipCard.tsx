import React from "react";
import { FaCheck } from "react-icons/fa";
import { RiBox3Line } from "react-icons/ri";

interface Props {
  isThisBestOffer: boolean;
  membershipType: string;
  price: number;
  includes: string[];
}

export default function MembershipCard({
  isThisBestOffer,
  membershipType,
  price,
  includes,
}: Props) {
  return (
    <div
      className={`relative h-[550px] rounded bg-slate-800 px-5 py-4 shadow-xl md:h-[650px]  ${isThisBestOffer ? "shadow-yellow-700 ring-2 ring-yellow-600" : "shadow-slate-700"}`}
    >
      <div className="flex justify-end text-3xl text-yellow-600">
        <RiBox3Line />
      </div>
      <p className="py-1 text-sm text-yellow-500">{membershipType}</p>
      <h3 className="py-1 text-3xl font-bold">${price}</h3>
      <p className="py-1 text-sm">Monthly</p>
      <div className="my-4 border border-solid border-yellow-200"></div>
      <p className="py-4">includes:</p>
      <ul className="flex list-inside flex-col gap-3">
        {includes.map((item, idx) => (
          <li key={idx} className="flex text-lg">
            <FaCheck className=" mt-1 text-yellow-500" />
            <span className="pl-3">{item}</span>
          </li>
        ))}
      </ul>
      <button
        className={`absolute bottom-10 left-1/2 w-[80%] -translate-x-1/2 py-4 font-bold duration-150 active:translate-y-1   ${isThisBestOffer ? "bg-yellow-500 text-white" : "text-yellow-500 ring-2 ring-yellow-500"}`}
      >
        Get membership
      </button>
    </div>
  );
}
