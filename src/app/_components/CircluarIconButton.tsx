/** Generic, circluar button. Pass an icon and a onClick function */
export default function CircularIconButton({
  className = "",
  children
}: {
  className?: string;
  children: React.ReactNode
}) {
  return (
    <button
      title="Add a purchase"
      className={`btn btn-circle btn-lg ${className}`}
    >
      {children}
    </button>
  );
}
