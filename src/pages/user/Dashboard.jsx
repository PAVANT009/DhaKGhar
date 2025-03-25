import React, { useState } from 'react';
import OrderStats from '../../components/OrderStats';
import OrderList from '../../components/OrderList';


export default function Dashboard({orders}) {
      const [curror,setCurror] = useState(orders[0])
  return (
    <div>
      <OrderStats />
      <OrderList orders={orders} curror={curror} setCurror={setCurror} />
    </div>
  );
}
