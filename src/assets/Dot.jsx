const CircleIcon = ({ color = "#000000" }) => {
    return (
      <svg
        className="w-3 h-3 flex-shrink-0 block "
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path fill={color} d="M8 3a5 5 0 100 10A5 5 0 008 3z" />
      </svg>
    );
  };
  
  export default CircleIcon;
  