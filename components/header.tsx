import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 shadow">
      <div className="flex items-center p-5">
        <Image src="/Logo.svg" alt="curiosa logo" width={128} height={128} />
      </div>
    </header>
  );
};

export default Header;
