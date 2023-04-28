import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { User } from "../context/UserContext";
import { cartProducts } from "../context/CartContext";
import { useNavigate } from "react-router-dom";





export const Paystack = () => {

    const { user } = User();
    const { total, clearCart } = cartProducts();
    const navigate = useNavigate()

    const config = {
      reference: new Date().getTime().toString(),
      email: user.email,
      amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: "pk_test_d9b49bb9ec64fac5a484cd0a3695b4d520f90684",
    };

    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
        toast.success("Thank you for shopping with us!");
        clearCart();
        navigate("/");
    };

    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("Wait! don't go! compelete your payment");
         console.log("closed");
    };


  const initializePayment = usePaystackPayment(config);

  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        className="bg-blue-600 w-full text-white rounded mb-2 h-[40px] cursor-pointer"
      >
        Pay with Paystack!
      </button>
    </div>
  );
};
