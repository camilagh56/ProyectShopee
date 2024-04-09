import { IoMdCloseCircle } from "react-icons/io";

const OrderCard = (props) => {
  const { id, title, image, price, handleDeleted } = props;

  let renderIcon;

  if (handleDeleted) {
    renderIcon = (
      <IoMdCloseCircle
        className="h-6 w-6 text-black cursor-pointer"
        onClick={() => handleDeleted(id)}
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-3 border border-gray-400 p-2 rounded-lg">
      <div className="flex items-center gap-2 ">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="text-lg font-medium">{price}</p>
        {renderIcon}
      </div>
    </div>
  );
};

export { OrderCard };
