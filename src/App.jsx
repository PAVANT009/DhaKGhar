import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/user/Dashboard";
import Packag from "./pages/user/package";
import Transfer from "./pages/user/Chart";
import Shipments from "./pages/user/Shipments";
import Account from "./pages/user/Account";
import History from "./pages/user/History";
import OrderDetailsPage from "./pages/user/OrderDetailsPage";  
import { useEffect, useState } from "react";

export default function App() {
  const [login, setLogin] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://dakghar.ct.ws/orders.php");
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchOrders();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
      <Routes>
        <Route path="/" element={<LoginPage setLogin={setLogin} />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard orders={orders} />} />
          <Route path="/order" element={<Packag orders={orders}/>} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/shipments" element={<Shipments orders={orders} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/history" element={<History />} />
          
          <Route
            path="/order/:orderId"
            element={<OrderDetailsPage orders={orders} />}
          />
        </Route>
      </Routes>
  );
}
