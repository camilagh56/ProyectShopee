import { ModalCartDetail } from "../ModalDetailCart/ModalDetailCard";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import "./CardDetail.css";

const CardDetail = () => {
  const context = useContext(ShopiCardContext);
  const dataProduct = context.showProductCard;
  const { image, price, description, title, category } = dataProduct;

  return (
    <ModalCartDetail>
      <aside className="product-detail flex flex-col fixed bg-white border border-black rounded-lg">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl text-black">Detail</h2>
          <div className="relative w-200 h-200">
            <button className="">
              <IoMdCloseCircle
                className="absolute top-[-35px]
               right-[-30px] w-9 h-9 rounded-xl text-green-600 font-semibold"
                onClick={context.changeDetail}
              />
            </button>
          </div>
        </div>
        <figure>
          <img
            className="w-full h-full rounded-lg"
            src={image}
          />
        </figure>
        <p>
        </p>
      </aside>
    </ModalCartDetail>
  );
};

export { CardDetail };
