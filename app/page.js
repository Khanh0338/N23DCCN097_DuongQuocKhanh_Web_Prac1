import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-14 px-6 text-center">
        <h2 className="text-4xl font-bold mb-3">Discover Our Products</h2>
        <p className="text-blue-100 text-lg">Quality products at unbeatable prices.</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">All Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <footer className="text-center py-8 text-gray-400 text-sm border-t mt-10">
        © 2025 MyStore · Built with Next.js & Tailwind CSS
      </footer>

    </main>
  );
}