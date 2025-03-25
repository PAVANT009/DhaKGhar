import { Outlet } from "react-router-dom";
import Mainmenu from "./Mainmenu";
import Navbar from "./Navbar";

export default function Layout() {
     return (
    <div className="flex overflow-hidden">
      <Mainmenu  /> 
      <div className="p-5 w-full bg-[#F2F2F2]">
        <Navbar/>
        <Outlet /> 
      </div>
    </div>
  );
}
