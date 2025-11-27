import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const dropdownItems = [
    { name: "Makeup", path: "/services/makeup" },
    { name: "Hair Styling", path: "/services/hair" },
    { name: "Nail Art", path: "/services/nails" },
  ];

  return (
    <ul className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      {dropdownItems.map((item) => (
        <li key={item.name}>
          <Link to={item.path} className="block px-4 py-2 hover:bg-yellow-100">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
