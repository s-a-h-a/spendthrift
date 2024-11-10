import DarkModeToggle from "~/app/_components/DarkModeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between bg-base-200">
      <Link href="/">
        <Image
          src="/spendthrift.png"
          alt="Spendthrift logo"
          width={50}
          height={50}
        />
      </Link>
      <div>
        <DarkModeToggle />
      </div>
    </div>
  );
}
