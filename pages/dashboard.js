// /pages/dashboard.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return router.push('/login');

      // Fetch user data
      const res = await fetch('http://localhost:5000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data.user);

      // Fetch products added by the user
      const productsRes = await fetch('http://localhost:5000/api/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const productsData = await productsRes.json();
      setProducts(productsData);
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Welcome, {user?.name}</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Your Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <div className="mt-4 flex justify-between">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-red-500 hover:text-red-700" onClick={() => deleteProduct(product._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    alert('Product deleted successfully');
    window.location.reload();
  } else {
    alert('Failed to delete product');
  }
};
