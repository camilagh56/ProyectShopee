import { Layout } from "../../components/Layout";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";

function MyOrders() {
  const context = useContext(ShopiCardContext);

  return (
    <Layout>
      Mis ordenes
      <div className="flex flex-col w-90">
        {context.order?.slice(-1)[0].products.map((product) => {
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

export default MyOrders;
