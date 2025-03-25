import CheckMarkArrowIcon from "../assets/Arrow";
import CircleIcon from "../assets/Dot";

const ShipmentDetails = ({ order }) => {
    if (!order) return <div className='p-5'>Select an order to view shipment details</div>;
    
    return (
      <div className='bg-white h-[20%] m-5 mt-2 px-2 py-4 rounded-md'>
        <div className='flex flex-row px-4 justify-between'>
          <p className='text-lg font-semibold'>Shipments</p>
          <CheckMarkArrowIcon size='30px' className='text-black align-middle' />
        </div>
        <div className='flex flex-row justify-between px-4'>
          <div>
            <p className='font-sans text-gray-400'>From</p>
            <p className='font-sans'>{order.from}</p>
          </div>
          <div>
            <p className='font-sans text-gray-400'>To</p>
            <p className='font-sans'>{order.to}</p>
          </div>
          <div>
            <p className='font-sans text-gray-400'>Status</p>
            <div className='flex flex-row items-center gap-2'>
              <CircleIcon color={order.color} />
              <p>{order.status}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShipmentDetails ;