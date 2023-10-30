import NavbarItem from "./NavberItem";
import logo from '../../../assets/images/368572024_642047007826578_1321780034725554955_n-removebg-preview.png'
import { FcSearch } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';



export default function Navbar() {

  return (
    <div className="">
      <div className="flex items-center justify-between p-4 shadow-lg bg-slate-200">
        <div>
          <img className="w-40 rounded-2xl" src={logo} alt="" />
        </div>
        <div className="flex items-center">
          {/* <p className="mr-2 text-2xl font-bold">Search</p> */}
          <input type="text" className="h-10 border rounded-md w-96 bg-slate-50" placeholder="serach item"/>
          <button><FcSearch className='text-3xl font-bold'></FcSearch></button>
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