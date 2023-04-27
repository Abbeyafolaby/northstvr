import { FaStar } from "react-icons/fa";
import { ProductsItems } from "../../context/ProductContext";
import { cartProducts } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading";

const ProductsDetails = () => {
  const { id } = useParams();
  const { products, isLoading } = ProductsItems();
  const { addToCart } = cartProducts();

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <Loading />;
  }

  const { title, description, price, rating, image } = product;

  const add = () => {
    addToCart(product, product.id);
    toast.success("item added to cart");
  };

  return (
    <div className="max-w-md mx-auto pt-16 pb-5 px-4 bg-white overflow-hidden md:max-w-2xl lg:max-w-3xl">
      <div className="md:flex ">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-64"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm text-[#A93030] font-semibold">
            {title}
          </div>
          <div className="mt-2 text-gray-500 text-sm">{description}</div>
          <div className="mt-4 flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-gray-400" />
            <span className="ml-2 text-gray-600">{rating.rate}/5 stars</span>
          </div>
          <div className="mt-4 text-black-600 text-lg font-medium">
            ₦ {price * 200}
          </div>
          <button
            onClick={add}
            className="mt-6 py-2 px-4 bg-red-900 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
