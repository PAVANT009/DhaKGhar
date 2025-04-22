const CheckMarkArrowIcon = ({ size = "20px" ,className }) => {
  return (
    <svg 
      className={`stroke-current ${className}`} 
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 32L33 15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M15 15H33V33" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

export default CheckMarkArrowIcon;
