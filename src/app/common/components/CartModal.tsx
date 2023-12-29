import { FaCompress, FaTrashAlt } from "react-icons/fa";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: any;
  onRemove: ({ productId }: { productId: number }) => void;
}

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  onRemove,
}: CartModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-4 md:right-10 top-16 bg-white p-4 rounded-lg shadow-lg z-50 w-64">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <button onClick={onClose} className="absolute top-2 right-2">
        <FaCompress />
      </button>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center mb-2 text-black"
          >
            <img src={item.image} alt={item.title} className="w-10 h-10 mr-2" />
            <span>
              {item.title.length > 30
                ? `${item.title.slice(0, 30)}...`
                : item.title}
            </span>
            <span> x{item.quantity}</span>
            <button onClick={() => onRemove({ productId: item.id })}>
              <FaTrashAlt className="ml-2 cursor-pointer" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CartModal;
