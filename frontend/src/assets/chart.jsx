const ChartIcon = ({ color , className }) => {
  return (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      width="24"   
      height="24"  
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
      className={ `${className} fill-current`}
      fill={color}
    >
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            fill={color}
            d="M51.603,33.865C51.855,34.529,52,35.248,52,36c0,3.314-2.686,6-6,6s-6-2.686-6-6 c0-0.795,0.158-1.553,0.439-2.247l-15.93-9.804C23.41,25.205,21.8,26,20,26c-1.296,0-2.493-0.414-3.474-1.113L0,41.322V60 c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V26.646L51.603,33.865z"
          ></path>
          <circle fill={color} cx="46" cy="36" r="4"></circle>
          <path
            fill={color}
            d="M15.112,23.473C14.414,22.492,14,21.296,14,20c0-3.314,2.686-6,6-6s6,2.686,6,6 c0,0.796-0.158,1.553-0.439,2.248l15.93,9.803C42.59,30.796,44.2,30,46,30c1.844,0,3.49,0.832,4.591,2.141L64,24.244V4 c0-2.211-1.789-4-4-4H4C1.789,0,0,1.789,0,4v34.713L15.112,23.473z"
          ></path>
          <circle fill={color} cx="20" cy="20" r="4"></circle>
        </g>
      </g>
    </svg>
  );
};

export default ChartIcon;