// import React from 'react'
// import CheckMarkArrowIcon from '../../assets/Arrow';
// import CircleIcon from '../../assets/Dot';

// function Shipments({orders}) {
//   if (!orders) return <div className='p-5'>Select an order to view shipment details</div>;
//   return (
//     <>
//     {orders.map((order,index) => (
//       <div key={index} className='bg-white h-[5%] m-5 mt-2 px-2 py-4 rounded-md'>
//         <div className='flex flex-row px-4 justify-between'>
//           <p className='text-lg font-semibold'>Shipments</p>
//           <CheckMarkArrowIcon size='30px' className='text-black align-middle' />
//         </div>
//         <div className='flex flex-row justify-between px-4'>
//           <div>
//             <p className='font-sans text-gray-400'>From</p>
//             <p className='font-sans'>{order.from}</p>
//           </div>
//           <div>
//             <p className='font-sans text-gray-400'>To</p>
//             <p className='font-sans'>{order.to}</p>
//           </div>
//           <div>
//             <p className='font-sans text-gray-400'>Status</p>
//             <div className='flex flex-row items-center gap-2'>
//               <CircleIcon color={order.color} />
//               <p>{order.status}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       ))
//     }
//     </>
//   )
// }

// export default Shipments



import React from 'react';
import CheckMarkArrowIcon from '../../assets/Arrow';
import CircleIcon from '../../assets/Dot';

const Shipments = ({ orders }) => {
  if (!orders) return <div className="p-5 text-center text-gray-500">Select an order to view shipment details</div>;

  // Helper function for status color
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
    <div className="h-[80vh] overflow-y-scroll"> {/* Scrollable container */}
      {orders.map((order, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm my-4 mx-6 p-4">
          {/* Title Row */}
          <div className="flex flex-row justify-between items-center border-b pb-3 mb-3">
            <p className="text-xl font-semibold text-gray-800">Shipments</p>
          </div>

          {/* Shipment Details */}
          <div className="flex flex-wrap justify-between gap-6">
            {/* From */}
            <div className="w-full sm:w-1/3">
              <p className="font-sans text-gray-400">From</p>
              <p className="font-sans text-gray-700">{order.from}</p>
            </div>

            {/* To */}
            <div className="w-full sm:w-1/3">
              <p className="font-sans text-gray-400">To</p>
              <p className="font-sans text-gray-700">{order.to}</p>
            </div>

            {/* Status */}
            <div className="w-full sm:w-1/3">
              <p className="font-sans text-gray-400">Status</p>
              <div className="flex items-center gap-2">
                <CircleIcon color={order.color} />
                <p className={`font-semibold ${getStatusColor(order.status)} px-3 py-1 rounded-full`}>
                  {order.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shipments;
