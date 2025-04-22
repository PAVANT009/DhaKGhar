import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotificationBell from "../assets/Notification";
import PlusIcon from "../assets/Plus";
import NewOrderModal from "./NewOrderModel";

export default function Navbar({ addNewOrder }) {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);  
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetch("http://localhost/DEMO/getUser.php", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>; // Show loading if user data isn't fetched yet

  return (
    <div>
      <div className="flex w-full bg-[#F2F2F2] my-2">
        <div className="flex w-full flex-row justify-between items-center">
          {location.pathname === "/dashboard" ? (
            <p className="text-3xl font-light">
              Welcome Back,<span className="font-bold"> {user.username}</span>
            </p>
          ) : (
            <div className="w-[300px]" />  
          )}
          <div className="flex gap-4 items-center">
            <div className="bg-white p-3 h-fit cursor-pointer rounded-lg">
              <NotificationBell showNotification />
            </div>
            <div
              onClick={() => setShowModal(true)}  
              className="bg-[#282828] p-4 flex gap-1 rounded-xl items-center cursor-pointer"
            >
              <PlusIcon />
              <span className="text-[#C7FF24]">New Order</span>
            </div>
          </div>
        </div>
      </div>

      <NewOrderModal
        showModal={showModal}
        setShowModal={setShowModal}
        addNewOrder={addNewOrder}  
      />
    </div>
  );
}
