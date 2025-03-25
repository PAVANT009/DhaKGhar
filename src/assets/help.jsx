const History = ({ size = 24, color = "black" }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="hover:fill-red-500 transition-all"
      >
        <path d="M8.5,3.01C1.326,7.152-1.133,16.326,3.01,23.5c4.142,7.174,13.316,9.633,20.49,5.49 s9.632-13.316,5.49-20.49C24.848,1.326,15.674-1.133,8.5,3.01z M7.644,5.103c0.042-0.305,0.224-0.573,0.49-0.727l1.732-1 c0.266-0.154,0.589-0.177,0.875-0.061c0.285,0.115,0.502,0.355,0.586,0.652l1.134,3.964C12.587,8.372,12.397,8.842,12,9.072 S11.1,9.23,10.781,8.9L7.915,5.936C7.701,5.715,7.601,5.407,7.644,5.103z M8.9,21.219l-2.964,2.866 c-0.059,0.058-0.124,0.107-0.195,0.147c-0.191,0.11-0.416,0.155-0.639,0.124c-0.305-0.042-0.573-0.224-0.727-0.49l-1-1.732 c-0.154-0.266-0.177-0.589-0.061-0.875c0.116-0.286,0.356-0.502,0.652-0.586l3.964-1.134C8.372,19.413,8.842,19.603,9.072,20 S9.23,20.9,8.9,21.219z M23.856,26.031c-0.042,0.305-0.224,0.573-0.49,0.727l-1.732,1c-0.266,0.154-0.589,0.177-0.875,0.061 c-0.285-0.115-0.502-0.355-0.586-0.652l-1.134-3.964c-0.126-0.441,0.063-0.912,0.461-1.141s0.9-0.159,1.219,0.171l2.866,2.964 C23.799,25.419,23.899,25.727,23.856,26.031z M19,21.196c-2.87,1.657-6.539,0.674-8.196-2.196S10.13,12.461,13,10.804 S19.539,10.13,21.196,13S21.87,19.539,19,21.196z M27.819,11.241c-0.085,0.209-0.236,0.381-0.427,0.491 c-0.07,0.041-0.145,0.073-0.225,0.095l-3.964,1.134c-0.441,0.126-0.912-0.063-1.141-0.461s-0.159-0.9,0.171-1.219l2.964-2.866 c0.218-0.215,0.528-0.315,0.833-0.271c0.305,0.042,0.573,0.224,0.727,0.49l1,1.732C27.912,10.632,27.935,10.955,27.819,11.241z"></path>
      </svg>
    );
  };
  
export default History;