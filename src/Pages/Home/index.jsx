import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card/";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import { CardDetail } from "../../components/CardDetail/CardDetail";
import { CartShopping } from "../../components/CartShopping";
import { CiSearch } from "react-icons/ci";

function Home() {
  const context = useContext(ShopiCardContext);

  const renderView = () => {
    if (context.filterProducts?.length > 0) {
      return context.filterProducts?.map((item) => {
        return <Card key={item.id} data={item} />;
      });
    } else {
      return <div>No hay coincidencias</div>;
    }
  };

  return (
    <Layout className="bg-red-100">
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <div className="flex justify-between gap-3">
        <CiSearch className="h-6 w-6" />
        <input
          type="text"
          placeholder=" Search a product"
          className="mb-6 border border-gray-400 w-80 rounded-lg p-1 focus:outline-none"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
      </div>
      <div className="grid gap-10 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      {context.openDetail && <CardDetail />}
      {context.showCart && <CartShopping />}
    </Layout>
  );
}

export default Home;
