import Icon from "../assets/icon";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <Icon />

      <ul className="flex justify-center items-center gap-14">
        <li className="w-fit rounded-3xl px-5 py-2 bg-gray-100 text-black cursor-pointer">
          Home
        </li>
        <li className="w-fit rounded-3xl px-5 py-2 text-black/80 hover:bg-gray-100 hover:text-black transition-colors duration-200 cursor-pointer">
          Cash Flow
        </li>
        <li className="w-fit rounded-3xl px-5 py-2 text-black/80 hover:bg-gray-100 hover:text-black transition-colors duration-200 cursor-pointer">
          Net Worth
        </li>
      </ul>

      <div className="w-8 h-8 from-purple-600 to-blue-300 bg-gradient-to-tr rounded-full"></div>
    </nav>
  );
}

export default Navbar;
