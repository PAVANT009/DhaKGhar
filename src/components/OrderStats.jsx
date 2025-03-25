import React from 'react';
import Order from '../assets/order';
import CheckMarkArrowIcon from '../assets/Arrow';
import CustomIcon from '../assets/Box';
import ChartIcon from "../assets/chart";
import { useNavigate } from 'react-router-dom';

const OrderStats = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-row gap-5 mt-4'>
      {[
        { title: "All orders", Icon: Order, value: 125, to: `/order` },
        { title: "Shipments", Icon: CustomIcon, value: 78, to:`/shipments` },
        { title: "Statistics", Icon: ChartIcon, value: 47, to: `/transfer` },
      ].map((item, index) => (
        <div key={index} onClick={() =>navigate(item.to) }  className=' cursor-pointer rounded-xl bg-white flex hover:bg-black flex-col gap-3 flex-1 p-3 group'>
          <div className='flex justify-between'>
            <p className='text-black text-xl font-light group-hover:text-white'>{item.title}</p>
            <CheckMarkArrowIcon className="text-black group-hover:text-white" />
          </div>
          <div className='flex flex-row gap-3'>
            <div className='bg-black w-fit p-3 rounded-full group-hover:bg-[#C7FF24]'>
              <item.Icon className="text-[#C7FF24] group-hover:text-black" />
            </div>
            <p className='text-black text-4xl font-semibold group-hover:text-white'>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;
