import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { MdAdd } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const Card = (data) => {
  const context = useContext(ShopiCardContext);

  const productShow = (productDetail) => {
    context.changeDetail();
    context.setShowProductCard(productDetail);
  };

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-green-600"
        >
          <FaCheck className="text-white"/>
        </div>  
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-white"
          onClick={() => {
            addProductsToCart(data.data);
          }}
        >
          <MdAdd className=""/>
        </div>  
      );
    }
  };

  return (
    <div
      className="bg-gray-200 cursor-pointer w-56 h-60 rounded-lg 
    p-1"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt="headphones"
          onClick={() => productShow(data.data)}
        />
        <div
          className="w-6 h-6 rounded-full m-2 p-1"
          onClick={() => {
            addProductsToCart(data.data);
          }}
        >
          {renderIcon(data.data.id)}
        </div>
      </figure>
      <p
        className="flex justify-between"
        onClick={() => productShow(data.data)}
      >
        <span className="text-sm font-light ">{data.data.title}</span>
        <span className="text-lg font-medium">{data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
