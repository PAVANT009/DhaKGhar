import React from 'react';
import { useNavigate } from "react-router-dom"; 

function Packag({ orders }) {
  const navigate = useNavigate(); 

  const handleClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div>
      {orders && orders.map((order, index) => (
        <div
          key={index} 
          className="bg-white rounded-lg m-5 flex flex-col h-[65%] w-[100%] p-4 cursor-pointer overflow-hidden"
          onClick={() => handleClick(order.id)} 
        >
          <div className="flex flex-row px-4 justify-between">
            <p className="text-lg font-semibold">Order details</p>
          </div>
          <div className="flex flex-row gap-2 p-4">
            {order.pics.map((pic, index) => (
              <img
                key={index}
                className="w-[300px] m-auto h-[200px] shadow-sm rounded-lg"
                src={pic}
                alt="Order Image"
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
      ))}
    </div>
  );
}

export default Packag;
