import Link from "~/components/link";

const NavLogo = () => (
  <Link href="/" type="nav">
    <div className="flex items-center">
      <div className="bg-white p-0.5 rounded-full h-10 w-10">
        <img
          alt="Maurice Kleine"
          className="object-contain w-9 h-9"
          src="/maurice-kleine.png"
        />
      </div>

      <span className="font-bold hidden ml-3 lg:inline-block">
        Maurice Kleine
      </span>
    </div>
  </Link>
);

export default NavLogo;
