import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer flex flex-col h-full">
        <div className="bg-gray-50 rounded-xl p-4 mb-4 flex items-center justify-center h-52">
          <img
            src={product.image}
            alt={product.title}
            className="h-44 w-full object-contain"
          />
        </div>
        <span className="text-xs font-semibold uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded-full w-fit mb-2">
          {product.category}
        </span>
        <h2 className="font-semibold text-gray-800 text-base line-clamp-2 mb-3 flex-1">
          {product.title}
        </h2>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
            Add +
          </button>
        </div>
      </div>
    </Link>
  );
}