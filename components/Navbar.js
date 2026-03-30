export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">🛍️ MyStore</h1>
      <div className="space-x-8 hidden md:flex text-gray-600 font-medium">
        <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Products</a>
      </div>
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        🛒 Cart (0)
      </button>
    </nav>
  );
}