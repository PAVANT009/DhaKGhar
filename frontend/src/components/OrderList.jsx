
import OrderDetails from './OrderDetails';
import ShipmentDetails from './ShipmentsDetails';

import CheckMarkArrowIcon from "../assets/Arrow";
import CircleIcon from "../assets/Dot";
import { useEffect } from 'react';

function Orders({orders,curror,setCurror}) {    
  useEffect(() => {
    if (orders.length > 0) {
      setCurror(orders[0]);
    }
  }, [orders]);
    return (
      <div className='flex flex-row'>
  <div className='flex flex-col w-[25%] max-h-[600px] bg-white rounded-md mt-5 p-5'>
    <div className='flex flex-row w-full justify-between py-3 mb-5'>
      <p className='font-bold text-3xl'>Order Number</p>
      <CheckMarkArrowIcon size='30px' className="text-black align-middle" />
    </div>
    <div className='max-h-[500px] overflow-y-auto'>
      {orders.map((order, index) => (
        <div key={index} className={`flex flex-row gap-1 cursor-pointer`} onClick={() => setCurror(order)}>
          <div className="rounded-md w-2"
        style={{ backgroundColor: order === curror ? order.color : 'white' }}
      ></div>

          <div className={`rounded-md flex flex-col w-full ${order === curror ? 'bg-black' : ''} mr-1 pl-1`}>
            <p className={`flex-row text-black ${order === curror ? 'text-white' : ''} flex items-center gap-2 h-full`}>
              <CircleIcon color={order.color} />
              {order.id}
            </p>
            <p className='font-light p-1 text-gray-400'>{order.type}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className='flex flex-col'>
    <OrderDetails order={curror} />
    <ShipmentDetails order={curror} />
  </div>

  <div className='w-[45%] h-[30%] overflow-y-auto bg-white rounded-lg m-5'>
    <div className='flex flex-row w-full justify-between py-3 mb-5'>
      <p className='px-3 font-bold text-3xl'>Inbox</p>
    </div>
    <div className='overflow-y-auto h-[500px] border border-gray-300'>
      {[...orders]
        .sort(() => 0.5)
        .map((order, index) => (
          ["Delayed", "Delivered"].includes(order.status) ? (
            <div key={index} className="py-1 px-3">
              <p>
                <span>{order.id} is {order.status.toLowerCase()}</span></p>
              <div
                className="h-1 w-[100%] mb-1"
                style={{ backgroundColor: order.color }}
              ></div>
            </div>
          ) : null
        ))}
    </div>
  </div>
</div>

  );
};

export default Orders;