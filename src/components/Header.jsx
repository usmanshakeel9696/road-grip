function Header() {
  return (
    <header className="bg-[#0f172a] shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center text-white">
        <div className="text-2xl font-bold">Road Grip</div>
        <ul className="flex space-x-6">
          {["Home", "Cars", "About", "Contact"].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
            >
              <span className="group-hover:text-blue-400 transition">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
