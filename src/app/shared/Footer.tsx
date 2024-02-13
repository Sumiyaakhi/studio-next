import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-5 mx-12">
      <footer className="grid gap-8 md:gap-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-4">
        {/*1st div  */}
        <div>
          <img className="" src="https://i.ibb.co/5js7BZv/Logo.png" alt="logo" />
          <p className="my-6">
            Join Us to lead the change Join Us to lead the change Join Us to
            lead the change
          </p>
          <div className="flex gap-3">
            <div className="w-12 h-12 py-3 ps-1 rounded-full bg-white border-2 text-center items-center">
              <FaTwitter
                style={{ color: "black", width: "36px", height: "20px" }}
                className="  rounded-full "
              />
            </div>
            <div className="w-12 h-12 py-3 ps-2 rounded-full bg-primary text-center items-center">
              <FaFacebook
                style={{ color: "white", width: "36px", height: "20px" }}
                className=" text-orange-600 rounded-full "
              />
            </div>
            <div className="w-12 h-12 py-3 ps-1 rounded-full bg-white border-2 text-center items-center">
              <FaInstagram
                style={{ color: "black", width: "36px", height: "20px" }}
                className=" text-orange-600 rounded-full "
              />
            </div>
            <div className="w-12 h-12 py-3 ps-1 rounded-full bg-white border-2 text-center items-center">
              <FaGoogle
                style={{ color: "black", width: "36px", height: "20px" }}
                className=" text-orange-600 rounded-full "
              />
            </div>
          </div>
        </div>
        {/*2nd div  */}
        <div className=""> 
            <h1 className="font-bold text-xl mb-6">COMPANY</h1>
            <p className="mb-2">About</p>
            <p className="mb-2"> Event</p>
            <p className="mb-2">Artwork</p>
            <p className="mb-2">Shop</p>
        </div>
        {/* 3rd div */}
        <div>
        <h1 className="font-bold text-xl mb-6">HELP</h1>
            <p className="mb-2">Customer Support</p>
            <p className="mb-2">Delivery Details</p>
            <p className="mb-2">Terms & Conditions</p>
            <p className="mb-2">Privacy Policy</p>
        </div>
        {/* 4th div */}
        <div>
        <h1 className="font-bold text-xl mb-6">RESOURCES</h1>
            <p className="mb-2">Free eBooks</p>
            <p className="mb-2">Learning Hub</p>
            <p className="mb-2">Blog</p>
            <p className="mb-2">YouTube Playlist</p>  
        </div>
        {/* 5th div */}
        <div>
            <h1 className="font-bold text-xl mb-6">NEWSLETTER</h1>
            <input type="text" placeholder="Enter your Email..." className="input input-bordered rounded-full w-full max-w-xs" />
            <button className="bg-primary text-white hover:bg-hover rounded-full px-28 py-3 my-5">Subscribe</button>
        </div>
      </footer>
      <hr />
      <footer className="footer footer-center p-4 text-base-content">
  <aside>
    <p> © Copyright 2024 - All right reserved by Studio6/6</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
