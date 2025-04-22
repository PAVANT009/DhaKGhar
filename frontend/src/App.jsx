import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/user/Dashboard";
import Transfer from "./pages/user/Chart";
import Shipments from "./pages/user/Shipments";
import Account from "./pages/user/Account";
import History from "./pages/user/History";
import OrderDetailsPage from "./pages/user/OrderDetailsPage";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Packag from "./pages/user/package";
import LoadinModel from "./components/LoadingModel";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  const location = useLocation();
  const [curror, setCurror] = useState(null);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

   useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost/DEMO/orders.php", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Expected JSON, got ${contentType}`);
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(`Failed to fetch orders: ${err.message}`);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0 && curror === null) {
      setCurror(orders[0]);
    }
  }, [orders, curror]);

  const addNewOrder = (newOrder) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    setCurror(orders[0]);
    console.log(orders[0]);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [location]);

   if (err) {
    return <div>{err}</div>;
  }

   if (loading) {
    return <LoadinModel />;
  }

   return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Layout addNewOrder={addNewOrder} />}>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              orders={orders}
              curror={curror}
              setCurror={setCurror}
            />
          }
        />
        <Route path="/order" element={<Packag orders={orders} />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/shipments" element={<Shipments orders={orders} />} />
        <Route path="/account" element={<Account orders={orders} />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/order/:orderId"
          element={<OrderDetailsPage orders={orders} />}
        />
      </Route>
    </Routes>
  );
}
