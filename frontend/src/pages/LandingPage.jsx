import React, { useState, useEffect } from 'react';
import BACK from '../../src/DakGhar.png';
import Demopic from '../../src/Image1.png';
import Problem from '../../src/problem.png'
import BoxGrid from '../components/Box';
import Solution from '../../src/solution.png';
import OrderDet from '../../src/orderdetails.png';
import AllorderDet from '../../src/allorderdet.png';
import Graph from '../../src/graphorder.png';
import Trucksvg from '../../public/truck-svgrepo-com.svg' 
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup"); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-y-auto text-black font-inter">
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'backdrop-blur-md bg-white/30 shadow-sm' : 'bg-transparent'
      } pt-3`}>

        <div className="max-w-6xl mx-28 px-4 py-3  flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={Trucksvg} alt="Dak Ghar Logo" className="h-8 w-auto" />
              <span className="font-bold text-lg">Dak Ghar</span>
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
              <a href="#overview" className="hover:text-black">Overview</a>
              <a href="#enterprise" className="hover:text-black">Enterprise</a>
              <a href="#footer" className="hover:text-black">About</a>
            </nav>
            <div>
            <div className="ml-6">
              <button onClick={handleClick}  className="bg-transparent text-black border-[1px] border-[#E3EEF9] px-2 py-1 rounded-lg text-sm transition-all duration-300 ease-in-out hover:border-transparent hover:bg-[#C4DAEE]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
    </header>

       {/* <div 
        className="w-full min-h-screen absolute top-0 left-0 z-0"
        style={{
          backgroundImage: `url(${BACK})`,
          backgroundSize: '100% auto',  
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'top center',
        }}
      > */}
      <div 
        className="w-full min-h-screen absolute top-0 left-0 z-0"
        style={{
          backgroundImage: `url(${BACK})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
        }}
      >

      
        <div className="relative z-10">
          <div className="h-[30%] mt-36 flex flex-col items-center justify-center text-center pb-24">
            <h1 className="text-5xl md:text-7xl  font-semibold leading-tight mb-6 space-y-3 flex flex-col">
              <p><span>Save time &</span></p>
              <p><span>money on mail</span></p>
            </h1>
            <h3 className="text-xl  font-extralight max-w-xl">
              Savings, visibility, and infrastructure guardrails. <br />
              One automated platform.
            </h3>
          </div>

          <div className="p-2 border-[3px] border-[#E3EEF9] max-w-6xl mx-auto rounded-3xl">
            <img
              className="border-[7px] border-[#E3EEF9] w-full rounded-3xl"
              src={Demopic}
              alt="Demopic"
            />
          </div>

          <div className="h-[30%] w-full text-center mt-12">
    <p className="text-sm md:text-2xl font-medium">
      Simplifying mailing for thousands of <br /> companies.
    </p>

      <div id="enterprise"  className="mt-8 space-y-8 text-sm md:text-base text-gray-700 font-medium">
        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/flipkart.com" alt="Flipkart" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/delhivery.com" alt="Delhivery" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/bluedart.com" alt="Blue Dart" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/zomato.com" alt="Zomato" className="h-6 md:h-8 object-contain" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src="https://logo.clearbit.com/meesho.com" alt="Meesho" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/dtdc.in" alt="DTDC" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/shiprocket.in" alt="Shiprocket" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/shadowfax.in" alt="Shadowfax" className="h-6 md:h-8 object-contain" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src="https://logo.clearbit.com/xpressbees.com" alt="Xpressbees" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/ekartlogistics.com" alt="Ekart" className="h-6 md:h-8 object-contain" />
          <img src="https://logo.clearbit.com/wowexpress.in" alt="Wow Express" className="h-6 md:h-8 object-contain" />
        </div>
      </div>

          </div>

          <div className='mt-[15vh] pr-14 w-full m-auto'>
            <p className='bg-[#FBFBFC] flex flex-row w-fit mx-auto gap-2      rounded-2xl py-1 px-2'>
            <img src={Problem} className='h-5 w-5 self-center' alt="" />
            <p className='font-extralight text-base'>The problem</p></p>
          </div>
          <div className='w-full mt-3 h-fit text-center'>
            <p className='text-5xl font-bold'>Mailing is Complicated</p>
          </div>
          <BoxGrid/>
          <div className='h-32 w-full'></div>
          <div className='mt-[15vh] pr-14 w-full m-auto'>
            <p className='bg-[#FBFBFC] flex flex-row w-fit mx-auto gap-2      rounded-2xl py-1 px-2'>
            <img src={Solution} className='h-5 w-5 self-center' alt="" />
            <p className='font-extralight text-base'>The solution</p></p>
          </div>
          <p className="text-sm mt-5 md:text-2xl font-bold text-center">
              DakGhar is a centralized platform powering next-gen postal <br />
              and courier management.
          </p>
          <p className='font-extralight mt-4 text-center'>Take a look at how DakGhar can save you time and money</p>
          <div className="mt-[15vh] w-full text-center">
            <p id="overview" className="text-4xl md:text-5xl font-bold">See it all in one place</p>
            <p className="text-lg md:text-xl font-light mt-2">
              From order-level tracking to full analytics, it’s all here.
            </p>
          </div>

          <div   className="mt-20 px-4 flex flex-col md:flex-row justify-center items-start gap-10">
            <div className="flex-1 w-[10%] text-center">
              <p className="text-xl md:text-2xl font-normal mb-4">Track a specific order</p>
                <img 
                  className="border-[7px] border-[#E3EEF9] h-[20%] w-full rounded-3xl"
                  src={OrderDet}
                  alt="Single Order"
                />
            </div>

            <div className="flex-1 flex flex-col gap-44 max-w-md text-center">
              <div>
                <p  className="text-xl md:text-2xl font-normal mb-4">View all your shipments</p>
                  <img
                    className="border-[7px] border-[#E3EEF9] w-full rounded-3xl"
                    src={AllorderDet}
                    alt="All Orders"
                  />
              </div>

              <div>
                <p  className="text-xl md:text-2xl font-normal mb-4">Analyze delivery history</p>
                  <img
                    className="border-[7px] border-[#E3EEF9] w-full rounded-3xl"
                    src={Graph}
                    alt="Orders Graph"
                  />
              </div>
            </div>
          </div>

          <div className='h-32 w-full'></div>
        </div>

        <footer id="footer" className="bg-[#F7F9FC] text-gray-600 py-10 mt-20 border-t border-[#E3EEF9]">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

            <div className="flex flex-col items-center md:items-start">
              <div className='flex flex-row gap-5'>
                <img src={Trucksvg} alt="truck " className="h-10 w-auto mb-2" />
                <p className='self-center font-bold text-lg'>Dak Ghar</p>
              </div>
              <p className="text-sm">Powering postal and courier management</p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="hover:underline text-sm">Privacy Policy</a>
              <a href="#" className="hover:underline text-sm">Terms of Service</a>
              <a href="#" className="hover:underline text-sm">Contact Us</a>
            </div>

            <div>
              <p className="text-sm">&copy; {new Date().getFullYear()} DakGhar. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default LandingPage;