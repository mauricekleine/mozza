import Image from "next/image";

import Link from "../link";

const NavLogo = () => (
  <Link href="/" type="nav">
    <div className="flex items-center">
      <div className="bg-white p-0.5 rounded-full h-10 w-10">
        <Image
          alt="Maurice Kleine"
          className="object-contain"
          height="40"
          layout="responsive"
          src="/maurice-kleine.png"
          width="40"
        />
      </div>

      <span className="font-bold hidden ml-3 lg:inline-block">
        Maurice Kleine
      </span>
    </div>
  </Link>
);

export default NavLogo;
