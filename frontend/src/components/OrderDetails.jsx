import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import CheckMarkArrowIcon from "../assets/Arrow";

const OrderDetails = ({ order }) => {
  const navigate = useNavigate(); 

  if (!order) return <div className="p-5">Select an order to view details</div>;

  const handleClick = () => {
    navigate(`/order/${order.id}`);
  };

  return (
    <div
      className="bg-white rounded-lg m-5 flex flex-col h-[65%] w-[640px] p-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row px-4 justify-between">
        <p className="text-lg font-semibold">Order details</p>
        <CheckMarkArrowIcon size="30px" className="text-black align-middle" />
      </div>
      <div className="flex flex-row gap-2 p-4">
        {order.pics.map((x, index) => (
          <img
            key={index}
            className="w-[300px] h-[200px] shadow-sm rounded-lg"
            src={x}
            alt="Shirt Back"
          />
        ))}
      </div>
      <div className="flex flex-row justify-between px-4">
        <div>
          <p className="font-sans text-gray-400">Number</p>
          <p className="font-sans">{order.id}</p>
        </div>
        <div>
          <p className="font-sans text-gray-400">Type of content</p>
          <p className="font-sans">{order.type}</p>
        </div>
        <div>
          <p className="font-sans text-gray-400">Weight</p>
          <p className="font-sans">{order.weight}</p>
        </div>
        <div>
          <p className="font-sans text-gray-400">Value</p>
          <p className="font-sans">{order.value}</p>
        </div>
        <div>
          <p className="font-sans text-gray-400">Status</p>
          <p className="font-sans">{order.status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
