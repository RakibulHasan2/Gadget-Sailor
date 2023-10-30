import { Link } from "react-router-dom";
export default function NavbarItem() {

    return (
        <div className="mb-5">
            <div className="">
                <ul>
                    <li className="">
                        <Link to="/home" className="">
                            <button>Home</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}