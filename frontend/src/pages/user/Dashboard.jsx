import React from 'react';
import OrderStats from '../../components/OrderStats';
import OrderList from '../../components/OrderList';


export default function Dashboard({orders,curror,setCurror}) {
  return (
    <div>
      <OrderStats />
      <OrderList orders={orders} curror={curror} setCurror={setCurror} />
    </div>
  );
}
