import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboardic from "../assets/Dashboard";
import Order from "../assets/order";
import History from "../assets/help";
import UserIcon from "../assets/Usr";
import TruckIcon from "../assets/Logo";
import BoxIcon from "../assets/Box";
import ChartIcon from "../assets/chart";
import Sidebar from "./Sidebar";
import OrderDetails from "./OrderDetails";

export default function Mainmenu() {
  const location = useLocation();  
  const navigate = useNavigate();

   const menuItems = [
    { id: "dashboard", icon: Dashboardic, label: "Dashboard" },
    { id: "order", icon: Order, label: "Orders" },
    { id: "shipments", icon: BoxIcon, label: "Shipments" },
    { id: "transfer", icon: ChartIcon, label: "Statistics" },
  ];

  const bottomItems = [
    { id: "account", icon: UserIcon, label: "Account" },
    { id: "history", icon: History, label: "About Us" },
  ];

  return (
    <div className="flex flex-row">
       <div className="bg-[#F2F2F2] h-screen pt-7 pb-7 pl-10 pr-0 flex flex-col gap-4 justify-between">
         <div className="items-start">
          <div onClick={() => navigate('/dashboard')} className="cursor-pointer flex items-center gap-5 mb-7 ml-[-5px]">
            <TruckIcon />
            <span>Dak Ghar</span>
          </div>

           <ul className="space-y-2 mt-[5rem]">
            {menuItems.map((item) => (
              <Sidebar key={item.id} item={item} active={location.pathname === `/${item.id}`}>
                <item.icon color={location.pathname === `/${item.id}` ? "#C7FF24" : "black"} />
              </Sidebar>
            ))}
          </ul>
        </div>

         <div className="items-end">
          <ul className="flex flex-col gap-4">
            {bottomItems.map((item) => (
              <Sidebar key={item.id} item={item} active={location.pathname === `/${item.id}`}>
                <item.icon color={location.pathname === `/${item.id}` ? "#C7FF24" : "black"} />
              </Sidebar>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
