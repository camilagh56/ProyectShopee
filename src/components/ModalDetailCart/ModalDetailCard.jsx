import ReactDOM from "react-dom";

const ModalCartDetail = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="rounded-md bg-gray-900 bg-opacity-70 p-4 flex justify-center items-center text-white fixed top-0 left-0 right-0 bottom-0">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export { ModalCartDetail };
