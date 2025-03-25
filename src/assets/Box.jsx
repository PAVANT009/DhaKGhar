const CustomIcon = ({ color , className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    className={ `${className} fill-current`}
  >
    <g>
      <polygon fill={color} points="2.75,3.815918 8.190918,1.095459 6,0 0.559082,2.720459" />
      <polygon fill={color} points="9.309082,1.654541 3.8681641,4.375 6,5.440918 11.440918,2.720459" />
      <polygon fill={color} points="5.5,6.309082 0,3.559082 0,9.25 5.5,12" />
      <polygon fill={color} points="6.5,6.309082 6.5,12 12,9.25 12,3.559082" />
    </g>
  </svg>
);

export default CustomIcon;
