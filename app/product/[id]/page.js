import Navbar from "@/components/Navbar";
import Link from "next/link";

// Fetch product
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
  // 🔥 FIX QUAN TRỌNG (Next.js 16)
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <span>/</span>
          <span className="capitalize text-gray-600">{product.category}</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="bg-gray-50 flex items-center justify-center p-12 min-h-[300px]">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-10 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase text-blue-500 bg-blue-50 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              <h1 className="text-2xl font-bold text-gray-900 leading-snug">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="text-yellow-400 text-sm">
                {"★".repeat(Math.round(product.rating?.rate || 0))}
                {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
                <span className="text-gray-400 ml-2">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              <p className="text-4xl font-bold text-green-600 mt-2">
                ${product.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap mt-2">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  🛒 Add to Cart
                </button>
                <button className="flex-1 border-2 border-gray-800 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                  ♡ Wishlist
                </button>
              </div>

              {/* Back */}
              <Link
                href="/"
                className="text-center text-blue-500 text-sm hover:underline mt-2"
              >
                ← Back to all products
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}