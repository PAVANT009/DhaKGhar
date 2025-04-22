import React, { useState } from "react";

export default function NewOrderModal({ showModal, setShowModal, addNewOrder }) {
  const [orderDetails, setOrderDetails] = useState({
    number: "",
    type: "",
    weight: "",
    value: "",
    pics: [],
    from: "",
    to: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "pics") {
      const selectedFiles = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setOrderDetails((prev) => ({
        ...prev,
        pics: selectedFiles,
      }));
    } else {
      setOrderDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const orderedDate = today.toISOString().split("T")[0];
    const receivedDate = new Date(today.setDate(today.getDate() + 14))
      .toISOString()
      .split("T")[0];

    const newOrder = {
      id: Date.now().toString(36),
      color: "#fdba74",
      from: orderDetails.from,
      to: orderDetails.to,
      type: orderDetails.type,
      weight: orderDetails.weight,
      value: `₹${orderDetails.value}`,
      status: orderDetails.status,
      ordered_date: orderedDate,
      received_date: receivedDate,
      pics: orderDetails.pics,
    };

    addNewOrder(newOrder);
    setShowModal(false);

    // Reset form
    setOrderDetails({
      number: "",
      type: "",
      weight: "",
      value: "",
      pics: [],
      from: "",
      to: "",
      status: "Pending",
    });
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-[#282828]">Add New Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="number"
            placeholder="Order Number"
            value={orderDetails.number}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            name="type"
            placeholder="Type of Content"
            value={orderDetails.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            name="weight"
            placeholder="Weight"
            value={orderDetails.weight}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            name="value"
            placeholder="Value (₹)"
            value={orderDetails.value}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            name="from"
            placeholder="From Address"
            value={orderDetails.from}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            name="to"
            placeholder="To Address"
            value={orderDetails.to}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="file"
            name="pics"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="w-full"
            required
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#282828] text-[#C7FF24] px-4 py-2 rounded-xl"
            >
              Add Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
