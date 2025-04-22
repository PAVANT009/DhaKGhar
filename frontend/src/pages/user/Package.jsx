import React from 'react';
import { useNavigate } from "react-router-dom"; 
import CheckMarkArrowIcon from '../../assets/Arrow';

function Packag({ orders }) {
  const navigate = useNavigate(); 

  const handleClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
      <div className="p-4">
        <p className="text-lg font-semibold mb-4">Order details</p>
    
        {/* Scrollable container */}
        <div className="h-[80vh] overflow-y-scroll bg-gray-50 rounded-lg">
    
        <div className="flex flex-row justify-between items-center px-4 py-2 bg-white sticky top-0 z-10 border-b">
  <p className="font-sans text-gray-600 w-[20%] text-center">Number</p>
  <p className="font-sans text-gray-600 w-[20%] text-center">Type of content</p>
  <p className="font-sans text-gray-600 w-[15%] text-center">Weight</p>
  <p className="font-sans text-gray-600 w-[15%] text-center">Value</p>
  <p className="font-sans text-gray-600 w-[20%] text-center">Status</p>
  <span className="w-[5%]"></span>
</div>

    
          {orders && orders.map((order, index) => (
          <div
            key={index}
            tabIndex={0}
            onClick={() => handleClick(order.id)}
            className="bg-white rounded-lg my-2 mx-4 p-4 cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg outline-none transition-shadow duration-200"
          >
            <div className="flex flex-row justify-between items-center px-2">
            <p className="font-sans w-[20%] text-center">{order.id}</p>
            <p className="font-sans w-[20%] text-center">{order.type}</p>
            <p className="font-sans w-[15%] text-center">{order.weight}</p>
            <p className="font-sans w-[15%] text-center">{order.value}</p>
            <p className="font-sans w-[20%] text-center">{order.status}</p>
            <CheckMarkArrowIcon size="30px" className="text-black align-middle" />
          </div>



          </div>
        ))}

        </div>
      </div>
    );
  
}

export default Packag;
