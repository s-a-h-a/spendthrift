import { IconCashRegister } from "@tabler/icons-react";

/** Button that opens ui for creating a purchase */
export default function CreatePurchase({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      title="Add a purchase"
      className={`btn btn-circle btn-lg ${className}`}
    >
      <IconCashRegister size={20} />
    </button>
  );
}
