// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { cartProducts } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = ({ product }) => {
  // console.log(product)

  const { id, image, category, title, price } = product;
  const { addToCart } = cartProducts()

  const add = () => {
    addToCart(product, id);
    toast.success("item added to cart")
  }

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="mx-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={add}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/products/${id}`}
            // to="/"
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link
          to={`/products/${id}`}
          // to="/"
        >
          <h2 className="mb-1 font-semibold">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price * 200}</div>
      </div>
    </div>
  );
};


export default Product;
