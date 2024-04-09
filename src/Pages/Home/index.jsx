import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card/";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { CardDetail } from "../../components/CardDetail/CardDetail";
import { CartShopping } from "../../components/CartShopping";

function Home() {
  const context = useContext(ShopiCardContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Layout className="bg-red-100">
      Home
      <div className="grid gap-10 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
      {context.openDetail && <CardDetail />}
      {context.showCart && <CartShopping />}
    </Layout>
  );
}

export default Home;
