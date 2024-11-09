import DarkModeToggle from "~/app/_components/DarkModeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between bg-base-200">
      <Image
        src="/spendthrift.png"
        alt="Spendthrift logo"
        width={50}
        height={50}
      />
      <div>
        <DarkModeToggle />
      </div>
    </div>
  );
}
