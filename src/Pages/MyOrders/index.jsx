import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { OrdersCard } from "../../components/OrdersCard/index";

function MyOrders() {
  const context = useContext(ShopiCardContext);

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              key={order.id}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export default MyOrders;
