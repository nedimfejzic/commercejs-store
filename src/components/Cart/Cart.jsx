import CartItem from "./CartItem";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import Loading from "../Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  let isEmpty = true;

  if (!cart.line_items) return <Loading />;

  if (cart.line_items !== undefined) {
    isEmpty = !cart.line_items.length;
  }

  const EmptyCart = () => {
    return (
      <p className="py-8">
        You have no items in your shoping cart, start adding some!
      </p>
    );
  };

  const FilledCart = () => {
    return (
      <div>
        <table className="table-fixed w-full border-none mt-4">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 text-left">Artikal</th>
              <th className="w-1/4 px-4 py-2">Kolicina</th>
              <th className="w-1/4 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.line_items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            ))}
          </tbody>
        </table>

       
      </div>
    );
  };

  const alert = () =>{
    toast("Wow so easy!");
  }

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl">Cart</h1>

      {isEmpty ? <EmptyCart /> : <FilledCart />}

      <div className="mt-7 text-right text-xl font-bold">
          <p>Total: </p>
          <p>{cart.subtotal.formatted_with_symbol}</p>
        </div>

      <button
      onClick={handleEmptyCart}
        type="button"
        className="py-2 px-4  inline-flex bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Empty cart
        <AiOutlineDelete className="ml-2 text-2xl" />
      </button>

      <Link
        to='/checkout'
        type="button"
        className="ml-2 py-2 px-8 inline-flex  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Checkout
        <IoMdDoneAll className="ml-4 text-2xl" />
      </Link>
    </div>
  );
};

export default Cart;
