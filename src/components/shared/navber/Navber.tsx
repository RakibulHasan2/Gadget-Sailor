import NavbarItem from "./NavberItem";
import logo from '../../../assets/images/368572024_642047007826578_1321780034725554955_n-removebg-preview.png'
import { FcSearch } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from "react";



export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="">
      <div className="flex items-center justify-between p-4 shadow-lg bg-slate-200">
        <div className="flex">
          <div>
            <img className="w-40 rounded-2xl" src={logo} alt="" />
          </div>
          <div className="flex items-center">

            <div className="relative">
              <input
                type="text"
                className={`h-10 border rounded-md bg-slate-50 ${isFocused ? "w-96" : "w-32"
                  } transition-width duration-500 ease-in-out`}
                placeholder="Search item"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
            <button><FcSearch className='text-3xl font-bold'></FcSearch></button>
          </div>
        </div>

        <div>
          <div className="text-3xl">
            <FaUserCircle></FaUserCircle>
          </div>
        </div>
      </div>

      <div className="">
        <NavbarItem></NavbarItem>
      </div>

    </div>
  );
}