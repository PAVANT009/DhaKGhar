
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OrdersPage({orders,loading,err}) {
  const { orderId } = useParams();  
  const [order, setOrder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);  

  

  useEffect(() => {
    if (orders.length > 0 && orderId) {
      const selectedOrder = orders.find((order) => order.id === orderId.trim());  
      setOrder(selectedOrder); 
    }
  }, [orders, orderId]);  

  const handleImageClick = (image) => {
    setSelectedImage(image);  
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  if (!order) {
    return <div>No order found with ID {orderId}</div>;  
  }

  const displayedImage = selectedImage || order.pics[0];

  return (
    <div className="flex flex-col bg-white py-4 mx-9 w-[95%] mt-4 overflow-hidden">
      <p className="font-semibold text-2xl p-4">Order Details</p>
      <div className="w-full bg-black py-[1px]"></div>
      <div>
      <div className="flex flex-row gap-6 p-4 items-start max-h-[80vh] overflow-hidden">
        <div className="w-[20%] flex flex-col items-center gap-4 overflow-y-auto">
          <p className="font-semibold text-xl">Product Images</p>
          <div className="flex flex-col gap-4">
            {order.pics.map((image, index) => (
              <img
                key={index}
                className="w-[80px] h-[80px] shadow-sm rounded-lg cursor-pointer"
                src={image}
                alt={`Order Image ${index + 1}`}
                onClick={() => handleImageClick(image)}  
              />
            ))}
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <img
            className="max-w-[100%] max-h-[400px] shadow-lg rounded-lg object-contain"
            src={displayedImage}
            alt="Selected Order Image"
          />
        </div>

         <div className="w-[30%] flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">From:</p>
            <p className="font-sans">{order.from}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">To:</p>
            <p className="font-sans">{order.to}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Ordered Date:</p>
            <p className="font-sans">{order.ordered_date}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Received Date:</p>
            <p className="font-sans">{order.received_date}</p>
          </div>
        </div>
      </div>

      <div className="w-full p-4 mt-6  rounded-lg">
        <div className="mt-4 flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Order ID:</p>
            <p className="font-sans">{order.id}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Type of content:</p>
            <p className="font-sans">{order.type}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Weight:</p>
            <p className="font-sans">{order.weight}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Value:</p>
            <p className="font-sans">{order.value}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-sans text-gray-400">Status:</p>
            <p className="font-sans">{order.status}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OrdersPage;
