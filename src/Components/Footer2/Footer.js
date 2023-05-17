/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import logo from "./images/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-shade-color">
      <div className="container mx-auto">
        <footer className=" footer px-10 pt-7 pb-3 grid justify-items-center  lg:grid-cols-4 lg:justify-items-center ">
          <div className="-mb-6 text-center md:text-left lg:text-left">
            <Link to="/">
              <img
                className="h-8 w-20 ml-20 md:ml-0 lg:ml-0"
                src={logo}
                alt=""
              />
            </Link>
            <p className="w-60">
              KOW Studios delivers superior CGI services to businesses
              worldwide, using advanced technology and a customer-centric
              approach.
            </p>
            <hr className=" mt-5 w-20 ml-10 md:ml-0 lg:ml-0  " />
            <p className="flex ml-10 md:ml-0 lg:ml-0">
              <a href="https://www.facebook.com/cutoutwiz" target="_blank">
                <FaFacebook className="h-6 w-6 mr-2 text-white cursor-pointer"></FaFacebook>
              </a>
              <a
                href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"
                target="_blank"
              >
                <FaYoutube className="h-6 w-6 mr-2 text-white cursor-pointer"></FaYoutube>
              </a>
              <a
                href="https://www.linkedin.com/company/cutoutwiz-ltd/"
                target="_blank"
              >
                <FaLinkedinIn className="h-6 w-6 mr-2 text-white cursor-pointer"></FaLinkedinIn>
              </a>
              <a href="https://twitter.com/cut_wiz?s=09" target="_blank">
                <FaTwitter className="h-6 w-6 mr-2 text-white cursor-pointer"></FaTwitter>
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
              >
                <FaInstagram className="h-6 w-6 mr-2 text-white cursor-pointer"></FaInstagram>
              </a>
            </p>
          </div>
          <div className="text-center">
            <span className="font-bold text-white   text-lg">Menu</span>
            <Link to='/' className="link link-hover ">Home</Link>
            {/* <Link to='/#service' className="link link-hover">Features</Link> */}
            <a href='#service' className="link link-hover">Services</a>
            <Link to='/quote'  className="link link-hover">Pricing</Link>
            {/* <a className="link link-hover">Blogs</a> */}
          </div>
          {/* <div className="text-center ml-10 md:ml-0 lg:ml-0">
            <span className="font-bold text-white  text-lg">Features</span>
            <a className="link link-hover">Shopify App</a>
            <a className="link link-hover">AmazonSpn</a>
            <a className="link link-hover">Cutoutwiz</a>
            <a className="link link-hover">BigCommerce App</a>
            <a className="link link-hover">Shotflow</a>
          </div> */}
          <div className="text-center ml-10 md:ml-0 lg:ml-0">
            <span className="font-bold text-white text-lg">Useful Links</span>
            <Link
              to="privacy-policy "
              target="_blank"
              className="link link-hover"
            >
              Privacy Policy
            </Link>
            <Link
              to="terms-condition"
              target="_blank"
              className="link link-hover"
            >
              Terms & Conditions
            </Link>
            <Link to="contact-form" target="_blank" className="link link-hover">
              Contact Us
            </Link>
            {/* <a
              href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F"
              target="_blank"
              className="link link-hover"
            >
              Sign Up
            </a> */}
          </div>
          <div className="text-center ml-20 md:ml-0 lg:ml-0">
            <span className="font-bold text-white text-lg pb-2 ml-8 lg:ml-5">
              Our Address
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
              width="75%"
              height="75%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </footer>
      </div>
      <footer className=" px-10 py-4 border-t bg-shade-color text-center text-white  border-black">
        <p>
          Designed And Developed By{" "}
          <span className="font-semibold">The KOW Company</span>{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
