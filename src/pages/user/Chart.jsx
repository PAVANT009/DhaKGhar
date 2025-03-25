import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const OrderProgress = () => {
  const [orders, setOrders] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders data
  useEffect(() => {
    fetch('http://localhost/DEMO/orders.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setOrders(data);
        generateMonthlyData(data); // Generate data for chart
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch order data. Please check your connection or try again later.');
        setLoading(false);
      });
  }, []);

  // Generate the monthly data for the chart
  const generateMonthlyData = (orders) => {
    const groupedByMonth = {
      "2024-01": 0,
      "2024-02": 0,
      "2024-03": 0,
      "2024-04": 0,
      "2024-05": 0,
      "2024-06": 0,
      "2024-07": 0,
      "2024-08": 0,
      "2024-09": 0,
      "2024-10": 0,
      "2024-11": 0,
      "2024-12": 0,
      "2025-01": 0,
      "2025-02": 0,
      "2025-03": 0,
      "2025-04": 0,
      "2025-05": 0,
      "2025-06": 0,
      "2025-07": 0,
      "2025-08": 0,
      "2025-09": 0,
      "2025-10": 0,
      "2025-11": 0,
      "2025-12": 0,
    };

    // Count orders for each month
    orders.forEach(order => {
      const orderDate = moment(order.ordered_date);
      const monthKey = orderDate.format('YYYY-MM');
      if (groupedByMonth[monthKey] !== undefined) {
        groupedByMonth[monthKey] += 1;
      }
    });

    // Format the data for the chart
    const formattedData = Object.keys(groupedByMonth)
      .sort() // Sort by date
      .map(month => ({
        month,
        count: groupedByMonth[month],
        label: moment(month, 'YYYY-MM').format('MMM'), // Format as month name
      }));

    setMonthlyData(formattedData);
  };

  console.log(monthlyData)

  // Filter data based on the selected year
  const getFilteredMonthlyData = () => {
    return monthlyData.filter(data => {
      const [year] = data.month.split('-');
      return parseInt(year) === selectedYear;
    });
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  if (loading) {
    return <div>Loading order data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="flex justify-center my-4">
        <select
          className="px-4 py-2 bg-white border rounded-md"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <h1 className="flex justify-center text-[#fb923c] my-4">
        Monthly Order Progress - {selectedYear}
      </h1>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={getFilteredMonthlyData()} 
          margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" padding={{ left: 30, right: 30 }} />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value) => [`${value} orders`, 'Count']} />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#fb923c"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderProgress;
