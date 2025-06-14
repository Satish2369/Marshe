"use client";

import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { products } from "@/utils/product";
import ProductContainer from "@/Components/ProductContainer";
import { categories } from "@/utils/constant";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSideBar";

export default function Search() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const filtered = products.filter((product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    return matchesQuery && matchesCategory;
  });

  const totalItems = useSelector((store) =>
    store.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const cartItems = useSelector((store) => store.cart.items);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = cartItems.length > 0 ? 35 : 0;
  const total = subtotal + deliveryFee;

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center w-[762px]">
      <div className="flex flex-col items-center mt-6">
        <div className="m-3 w-full flex justify-end p-3">
          <div
            className="bg-yellow-300 p-1 rounded-full cursor-pointer relative"
            onClick={() => setIsCartOpen(!isCartOpen)} 
          >
            <HiOutlineShoppingCart size={32} className="text-black" />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 text-white bg-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalItems}
              </div>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex"
          style={{ width: "762px", height: "40px" }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow px-4 text-white bg-[#111] border border-gray-100 rounded-l-md"
            style={{ height: "40px" }}
          />
          <button
            type="submit"
            className="px-5 text-black bg-yellow-400 cursor-pointer border border-white rounded-r-md hover:bg-yellow-500"
            style={{ height: "40px" }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(isActive ? null : cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-200 ${
                isActive
                  ? "bg-blue-500 text-white border-blue-500"
                  : "text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <span className={`${isActive ? "text-white" : "text-blue-500"}`}>
                {cat.icon}
              </span>
              <span className="font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>

    
      <div className="flex flex-wrap mt-4">
        {filtered.map((product) => {
          return (
            <ProductContainer
              key={product.name}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product.id}
              image={product.image}
            />
          );
        })}
      </div>

      <div>
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
}
