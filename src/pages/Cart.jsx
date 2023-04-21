import CartItem from "../components/CartItem";
import { cartProducts } from "../context/CartContext";

const Cart = () => {
const {cart, total, itemAmount} = cartProducts()

  return (
    <div className="py-16 px-8">
      <h1 className="text-2xl text-right">Your Bag ({itemAmount})</h1>
      <div className="flex flex-col gap-y-2 border-b pt-[2rem]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="uppercase font-semibold text-right pt-4">
        <span className="mr-2">Total:</span>$ {total}
      </div>
    </div>
  );
}

export default Cart