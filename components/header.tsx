import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 shadow">
      <div className="flex items-center justify-center py-6">
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              src="/Logo.svg"
              alt="curiosa logo"
              width={128}
              height={128}
            />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default React.memo(Header);
