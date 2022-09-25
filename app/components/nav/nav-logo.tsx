import Link from "~/components/link";

const NavLogo = () => (
  <Link href="/" type="nav">
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-white p-0.5">
        <img
          alt="Maurice Kleine"
          className="h-9 w-9 object-contain"
          src="/maurice-kleine.png"
        />
      </div>

      <span className="ml-3 hidden font-bold lg:inline-block">
        Maurice Kleine
      </span>
    </div>
  </Link>
);

export default NavLogo;
