import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-screen bg-slate-900">
      <div className="flex items-center p-5">
        <Image src="/Logo.svg" alt="femin-alg logo" width={128} height={128} />
        <h1 className="text-3xl ml-5 text-white">Femini-Alg</h1>
      </div>
    </header>
  );
};

export default Header;
