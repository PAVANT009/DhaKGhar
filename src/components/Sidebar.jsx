import { useNavigate } from "react-router-dom";

export default function Sidebar({ item, active, children }) {
  const navigate = useNavigate();
  
  return (
    <li 
      className={`flex items-center rounded-md px-2 py-4 gap-3 cursor-pointer ${active ? 'bg-[#282828]' : 'bg-[#F2F2F2]'}`}
      onClick={() => navigate(`/${item.id}`)}
    >
      <div className="h-5 w-5">{children}</div>
      <span className={`${active ? 'text-[#C7FF24]' : 'text-black'}`}>{item.label}</span>
    </li>
  );
}
