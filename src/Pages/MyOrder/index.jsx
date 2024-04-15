import { Layout } from "../../components/Layout";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShopiCardContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  console.log(index);

  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout className="bg-red-100">
      <div className="flex justify-center items-center relative w-80 mb-5">
        <Link to={"/my-orders"} className="absolute left-0">
          <IoChevronBackSharp className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-90">
        {context.order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrder;
