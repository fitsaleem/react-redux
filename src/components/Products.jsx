import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { add } from "../store/cardSlice";
import { useDispatch } from "react-redux";


const Products = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);


  const dispatch=useDispatch();

  function handleAdd(product) {
    dispatch(add(product))
  }

  return (
    <>
      <div className="px-2 my-3">
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div className="relative m-2 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <Link
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                to="#"
              >
                <img
                  className="object-cover"
                  src={product.image}
                  alt={product.title}
                />
                {/* You can adjust this "OFF" span if required */}
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link to="#">
                  <h5 className="tracking-tight text-slate-900">
                    {product.title}
                  </h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                    {/* Adjust if you have old price */}
                    {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                  </p>
                  <div className="flex items-center">
                    {/* Dummy stars - adjust this to use product.rating.rate */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        aria-hidden="true"
                        className={`h-5 w-5 ${
                          index < product.rating.rate
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>
                {/* Link to add product to cart */}
                <button
                  onClick={()=>handleAdd(product)}
                  to="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
