export default function Button({ children, variant = "primary" }) {
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-blue-600 text-blue-600 hover:bg-blue-50";

  return (
    <button className={`${styles} px-4 py-2 rounded-md transition-all duration-200 font-medium`}>
      {children}
    </button>
  );
}