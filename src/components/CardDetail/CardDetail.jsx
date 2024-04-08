import { ModalCartDetail } from "../ModalDetailCart/ModalDetailCard";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import "./CardDetail.css";

const CardDetail = () => {
  const context = useContext(ShopiCardContext);
  console.log("PRODUCT TO SHOW: ", context.showProductCard);

  return (
    <ModalCartDetail>
      <aside className="product-detail flex flex-col fixed bg-white border border-black rounded-lg">
        <div className="flex justify-between items-center p-6">
          <div className="relative w-200 h-200">
            <button className="">
              <IoMdCloseCircle
                className="absolute top-[-30px]
               right-[-335px] w-9 h-9 rounded-xl text-green-600 font-semibold"
                onClick={context.changeDetail}
              />
            </button>
          </div>
        </div>
        <div></div>
        <figure className="conteiner-img">
          <img
            className="img-product w-full h-2/3 rounded-lg"
            src={context.showProductCard.image}
            alt={context.showProductCard.image}
          />
        </figure>
        <div className="conteiner-span">
          <p className="flex flex-col p-6">
            <span className="text-black font-medium text-2xl mb-3 bg-green-300 w-2/6 flex justify-center rounded-lg">
              ${context.showProductCard.price}
            </span>
            <span className="text-black text-lg font-semibold underline underline-offset-2 mb-2">
              {context.showProductCard.title}
            </span>
            <span className="text-black font-light text-md">
              {context.showProductCard.description}
            </span>
          </p>
        </div>
      </aside>
    </ModalCartDetail>
  );
};

export { CardDetail };
