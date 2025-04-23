function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <p>Logo</p>

      <ul className="flex justify-center items-center gap-20">
        <li>Home</li>
        <li>Cashflow</li>
        <li>Net Worth</li>
      </ul>

      <p>Profile</p>
    </nav>
  );
}

export default Navbar;
