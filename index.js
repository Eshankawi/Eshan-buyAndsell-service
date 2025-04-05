import Image from 'next/image'; import { Button } from '@/components/ui/button';

export default function HomePage() { return ( <div className="min-h-screen bg-gray-100"> {/* Navbar */} <nav className="bg-white shadow p-4 flex justify-between items-center"> <h1 className="text-xl font-bold text-red-600">Eshan Services</h1> <div className="space-x-4"> <Button variant="outline">Login</Button> <Button>Sign Up</Button> </div> </nav>

{/* Hero Section */}
  <section className="bg-white p-6 shadow mt-2">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Shop Everything You Need</h2>
        <p className="text-gray-600 mb-4">From electronics to fashion, get the best deals now.</p>
        <Button>Start Shopping</Button>
      </div>
      <div>
        <Image
          src="/banner.jpg"
          alt="Shopping Banner"
          width={500}
          height={300}
          className="rounded-xl"
        />
      </div>
    </div>
  </section>

  {/* Categories */}
  <section className="mt-8 px-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Categories</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {['Electronics', 'Fashion', 'Home', 'Toys', 'Beauty'].map((cat) => (
        <div
          key={cat}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer text-center"
        >
          <p className="text-gray-700 font-medium">{cat}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Featured Products */}
  <section className="mt-10 px-6 pb-10">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Featured Deals</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="bg-white p-3 rounded-lg shadow hover:shadow-md">
          <div className="h-40 bg-gray-200 rounded mb-2"></div>
          <p className="text-sm font-semibold text-gray-800 truncate">Product {i + 1}</p>
          <p className="text-red-500 font-bold mt-1">$ {(10 + i * 2).toFixed(2)}</p>
        </div>
      ))}
    </div>
  </section>
</div>

); }


