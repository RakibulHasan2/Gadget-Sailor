import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navber/Navber";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}