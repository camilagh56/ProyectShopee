import { IoMdCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CartShopping = () => {
  const context = useContext(ShopiCardContext);

  const handleDeleted = (id) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filterProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "07.07.24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null)
  };

  return (
    <div className="flex w-full justify-end p-3 shadow-md ring-2 ring-black-300">
      <aside className="product-detail flex flex-col fixed bg-white border border-grey-300 rounded-lg">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Order</h2>
          <div className="relative w-200 h-200">
            <button className="">
              <IoMdCloseCircle
                className="absolute top-[-32px]
               right-[-32px] w-9 h-9 rounded-xl text-green-600 font-semibold"
                onClick={context.shoppingCartShow}
              />
            </button>
          </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {context.cartProducts.map((product) => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                handleDeleted={handleDeleted}
              />
            );
          })}
        </div>
        <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-3">
            <span className="font-semibold">Total:</span>
            <span className="font-medium text-xl bg-green-600 p-1 rounded-lg">
              ${totalPrice(context.cartProducts)}
            </span>
          </p>
          <Link to='/my-orders/last'>
            <button
              className="w-full bg-black py-3 text-white rounded-lg"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export { CartShopping };
