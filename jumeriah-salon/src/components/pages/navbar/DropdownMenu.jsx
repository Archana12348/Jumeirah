import { Link } from "react-router-dom";

export default function DropdownMenu() {
  const dropdownItems = [
    { name: "Makeup", path: "services" },
    { name: "Hair Styling", path: "/services/hair" },
    { name: "Nail Art", path: "/services/nails" },
  ];

  return (
    <ul className="bg-white text-black mt-4.5 mr-20 shadow-lg rounded-md w-40 py-2 flex flex-col z-50">
      {dropdownItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="block px-4 py-2 hover:text-[#00CED1] duration-200"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
