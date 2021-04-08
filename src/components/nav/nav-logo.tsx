import Link from "../link";

const NavLogo = () => (
  <Link className="flex items-center mr-3" href="/" type="nav">
    <img
      alt="Maurice Kleine"
      className="bg-white object-contain p-0.5 rounded-full h-10 w-10"
      src="/maurice-kleine.png"
    />

    <span className="font-bold hidden ml-3 lg:inline-block">
      Maurice Kleine
    </span>
  </Link>
);

export default NavLogo;
