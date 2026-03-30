import "./globals.css";

export const metadata = {
  title: "MyStore - Product Listing",
  description: "A product listing page built with Next.js & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}