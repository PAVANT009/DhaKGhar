import { useEffect, useState } from "react";

export default function Account({ orders }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost/DEMO/getUser.php", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div className="text-center text-lg mt-10">Loading...</div>;

  const pendingOrders = orders.filter((order) => order.status !== "Delivered");

  return (
    <div className="flex flex-row p-8 gap-10 bg-[#f9f9f9] min-h-screen">
      <div className="bg-white w-[35%] p-6 rounded-2xl shadow-md flex flex-col items-center">
        <div
          className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4"
          style={{ borderColor: "#C7FF24" }}
        >
          <img
            src={`http://localhost/DEMO/uploads/${user.photo}`}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center space-y-3">
          <p className="text-2xl font-bold text-[#282828]">{user.username}</p>
          <p className="text-lg text-gray-600 border-2 px-6 py-2 bg-gray-200 rounded-lg border-white ">{user.phone}</p>
          <p className="text-sm text-gray-500">{user.place}</p>
        </div>
      </div>

      <div className="flex-1 bg-white p-6 rounded-2xl shadow-md overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#282828] mb-4">Pending Orders</h2>
        {pendingOrders.length === 0 ? (
          <p className="text-gray-500">No pending orders 🎉</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {pendingOrders.map((order) => (
              <div
                key={order.id}
                className="bg-[#FFEDD5] border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-lg text-[#282828]">{order.id}</span>
                  <span className="text-sm px-2 py-1 rounded-full bg-black text-white">
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700">To: {order.to}</p>
                <p className="text-sm text-gray-700">From: {order.from}</p>
                <p className="text-sm mt-1 text-[#282828]">📦 {order.type} | {order.weight}kg | {order.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
