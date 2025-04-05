// /pages/products.js

import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Explore Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 relative"
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-48"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-15%</span>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-gray-700 truncate">{product.title}</h3>
              <p className="text-xs text-gray-500 truncate">{product.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-red-500 font-bold text-lg">${product.price}</span>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-red-500">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="text-gray-500 hover:text-blue-500">
                    <i className="fa fa-cart-plus"></i>
                  </button>
                </div>
              </div>
              <div className="text-yellow-400 text-sm mt-1">★★★★☆</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
