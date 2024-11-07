import DarkModeToggle from "~/app/_components/DarkModeToggle";

export default function Navbar() {
    return (
        <div className="navbar bg-base-200 flex justify-between">
            <div className="text-lg font-bold">Spendthrift</div>
            <div>
                <DarkModeToggle />
            </div>
        </div>
    )
}