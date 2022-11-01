import Image from "next/image";

import Link from "~/ui/link";

export default function NavLogo() {
  return (
    <Link href="/" type="nav">
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-white p-0.5">
          <Image
            alt="Maurice Kleine"
            className="h-9 w-9 object-contain"
            height={256}
            src="/maurice-kleine.png"
            width={256}
          />
        </div>

        <span className="ml-3 hidden font-bold lg:inline-block">
          Maurice Kleine
        </span>
      </div>
    </Link>
  );
}
