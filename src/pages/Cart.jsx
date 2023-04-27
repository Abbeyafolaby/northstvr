import CartIsEmpty from "../components/CartIsEmpty";
import CartItem from "../components/CartItem";
import { cartProducts } from "../context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { User } from "../context/UserContext";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3'
import vector from "../assets/Vector.png"


const Cart = () => {
const {cart, total, itemAmount, clearCart} = cartProducts()

    const { user } = User();

    const config = {
      public_key: "FLWPUBK_TEST-78299c0dfa29e7a97ee7540265c69967-X",
      tx_ref: Date.now(),
      amount: total,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: user.email,
        phone_number: "nil",
        name: user.displayName,
      },
      customizations: {
        title: "NorthSTVR",
        description: "Payment for items in cart",
        logo: vector,
      },
    };

    const fwConfig = {
      ...config,
      text: "Pay with Flutterwave!",
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    };

  const clear = () => {
    clearCart();
    toast.success("All Item removed from cart");
  };

  if (itemAmount === 0) {
    return <CartIsEmpty />
  }

  return (
    <div className="py-16 px-8 ">
      {/* <h1 className="text-2xl text-right">Your Bag ({itemAmount})</h1> */}
      <div className="flex flex-col gap-y-2 border-b pt-[2rem]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex justify-between m-auto md:w-[500px] lg:w-[700px] py-4 mt-4">
        <div className="uppercase font-semibold pt-4">
          <span className="mr-2">Total:</span>₦ {total}
        </div>
        <div
          onClick={clear}
          className="cursor-pointer py-4 flex w-12 h-12 justify-center items-center text-xl"
        >
          <FiTrash2 className="text-[#920701]" />
        </div>
      </div>
      <div className="flex-col justify-center items-center p-6 bg-[#f5f5f5] my-8 md:w-1/2 md:m-auto md:my-8">
        <h1 className="text-center mb-4">ORDER SUMMARY</h1>
        <div className="flex justify-between mb-3">
          <p>Subtotal</p>
          <p>₦ {total}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Shipping Charge</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Shipping Discount</p>
          <p>N/A</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Total Amount</p>
          <p>₦ {total}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-center">Make payment</p>
          <FlutterWaveButton
            {...fwConfig}
            className="bg-[#FF9F0D] w-full text-white rounded mb-2 h-[40px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Cart