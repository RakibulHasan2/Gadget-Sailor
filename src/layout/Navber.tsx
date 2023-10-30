import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <div>
        <div className="">
            <ul>
                <li className="bg-gray-400">
                <Link to="/home" className="text-2xl ">
                 <button>Home</button> 
                </Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }