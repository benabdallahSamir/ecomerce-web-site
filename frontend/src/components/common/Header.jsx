import React from "react";

import TopBar from "../layout/TopBar";
import Navbar from "../layout/Navbar";
function Header() {
  return (
    <header className="relative">
      {/* top bar */}
      <TopBar />
      <Navbar />
    </header>
  );
}

export default Header;
