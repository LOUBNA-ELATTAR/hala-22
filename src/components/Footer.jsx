import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-4/5 m-auto py-10">
    <hr></hr>
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold">Hala 22</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"}/>
            <AiFillInstagram size={"1.5rem"}/>
            <AiFillTwitterSquare size={"1.5rem"}/>
            <AiOutlineWhatsApp size={"1.5rem"}/>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>456-455-445</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>333-333-333</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>898-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>212-645-434</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">About us</h1>
          <a className="text-xs text-gray-400" href="/">Iconic Places</a>
          <a className="text-xs text-gray-400" href="/">WC Stadiums</a>
          <a className="text-xs text-gray-400" href="/">Discover Islam</a>
          <a className="text-xs text-gray-400" href="/">Contact Us</a>
          <a className="text-xs text-gray-400" href="/">About Us</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Features</h1>
          <a className="text-xs text-gray-400" href="/">Translation</a>
          <a className="text-xs text-gray-400" href="/">Weather</a>
          <a className="text-xs text-gray-400" href="/">Restaurants</a>
          <a className="text-xs text-gray-400" href="/">Hotels</a>
          <a className="text-xs text-gray-400" href="/">Metro</a>
          <a className="text-xs text-gray-400" href="/">WC Matches</a>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">Download</h1>
          <p className="text-xs text-gray-400">From App Store and Google Play</p>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaAppStore size={'1.5rem'}/>
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button  className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaGooglePlay  size={'1.5rem'}/>
            <h1>
              <p className="text-xs font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
