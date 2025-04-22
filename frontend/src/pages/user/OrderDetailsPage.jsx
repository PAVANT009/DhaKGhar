import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OrdersPage({ orders, loading, err }) {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (orders.length > 0 && orderId) {
      const selectedOrder = orders.find((order) => order.id === orderId.trim());
      setOrder(selectedOrder);
    }
  }, [orders, orderId]);

  const handleImageClick = (image) => setSelectedImage(image);

  if (loading) return <div className="text-center py-10 text-xl text-blue-500">Loading orders...</div>;
  if (err) return <div className="text-center py-10 text-red-500">{err}</div>;
  if (!order) return <div className="text-center py-10 text-gray-500">No order found with ID {orderId}</div>;

  const displayedImage = selectedImage || order.pics[0];

  // Helper function for applying status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-orange-100 text-orange-800";
      case "In Transit":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-gray-50 rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Details</h1>
        <div className="w-full h-[1px] bg-gray-300 mb-6" />

        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left: Thumbnails */}
          <div className="w-full md:w-1/5 flex flex-col items-center gap-4">
            <p className="font-medium text-gray-700">Thumbnails</p>
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[300px] p-2">
              {order.pics.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`img-${i}`}
                  onClick={() => handleImageClick(img)}
                  className={`w-20 h-20 object-cover rounded-md border cursor-pointer transition hover:scale-105 ${
                    selectedImage === img ? "border-gray-500" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Center: Main Image */}
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <img
              src={displayedImage}
              alt="Selected"
              className="rounded-md shadow-md max-h-[350px] object-contain border"
            />
          </div>

          {/* Right: From/To/Dates */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="bg-gray-100 p-4 rounded-md border">
              <p className="font-semibold text-gray-700">From/To</p>
              <div className="flex flex-col gap-2 mt-4">
                <Info label="From" value={order.from} />
                <Info label="To" value={order.to} />
                <Info label="Ordered Date" value={order.ordered_date} />
                <Info label="Received Date" value={order.received_date} />
              </div>
            </div>
          </div>
        </div>

        {/* Order Info Row */}
        <div className="mt-10">
          <div className="bg-gray-100 p-4 rounded-md border">
            <p className="font-semibold text-gray-700">Order Information</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center mt-4">
              <Stat label="Order ID" value={order.id} />
              <Stat label="Type" value={order.type} />
              <Stat label="Weight" value={order.weight} />
              <Stat label="Value" value={order.value} />
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-400">Status</p>
                <p
                  className={`font-semibold text-center ${getStatusColor(order.status)} py-2 px-4 rounded-full`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}:</p>
    <p className="text-base font-medium text-gray-700">{value}</p>
  </div>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="font-semibold text-gray-700">{value}</p>
  </div>
);

export default OrdersPage;
