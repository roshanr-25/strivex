import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import Logo from "../img/logo.png"
import {
  ImInstagram,
  ImLinkedin
} from "react-icons/im"
import MobilNav from './MobilNav';
export default function Header() {
  const navigate = useNavigate();
  

  
  return (
    <div className="shadow-sm sticky z-40">
      <header className="flex justify-between items-center px-3 max-w-8xl mx-auto bg-white">
        <div>
          <img
            src={Logo}
            alt=""
            className="h-24 cursor-pointer pl-1 border-b-4 border-white m-6 hover:border-black"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 pr-8">

          <li onClick={()=> navigate("/home")} className='hidden lg:flex text-x-black transition text-2xl py-3 font-semibold border-b-4  border-white hover:border-black '>
              Home
              
            </li >

            <li onClick={()=> navigate("/about")} className='hidden lg:flex text-x-black transition text-2xl py-3 font-semibold border-b-4  border-white hover:border-black text-whit '>
              About
              
            </li >
            <li
              className="hidden lg:flex text-x-black transition text-2xl mt-3 font-semibold  hover:border-black border-b-4 border-white
                "
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>

            <li>
              <a  className='hidden lg:flex  mt-6'>
                <ImInstagram/>
              </a>

            </li>

            <li>
              <a href="www.youtube.com" className='hidden lg:flex  mt-6'>
                <ImLinkedin/>
              </a>

            </li>

          </ul>

          <MobilNav/>
        </div>
      </header>
    </div>
  );
}
 