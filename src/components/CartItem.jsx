import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { cartProducts } from "../context/CartContext";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    cartProducts();

  const { id, image, amount, title, price } = item;

  const remove = () => {
    removeFromCart(id);
    toast.success("Item removed from cart")
  }
  return (
    <div className="flex justify-center gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full md:w-[500px] lg:w-[700px] min-h-[150px] flex items-center gap-x-4">
        <Link to={`/products/${id}`}>
          <img src={image} className="max-w-[80px]" alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/products/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={remove} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove className="" />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd onClick={() => increaseAmount(id)} />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              ₦ {price * 200}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`₦ ${
              price * 200 * amount
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartItem;
