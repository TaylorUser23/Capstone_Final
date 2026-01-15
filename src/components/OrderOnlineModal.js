// Order Online Modal Component
const OrderOnlineModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative max-h-96 overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Online</h2>
        <p className="text-gray-600 mb-6">
          Browse our full menu and place your order for delivery or pickup.
        </p>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-600 transition-colors cursor-pointer">
            <h3 className="font-bold text-gray-800 mb-2">Delivery</h3>
            <p className="text-gray-600 text-sm">Get your favorite dishes delivered to your door</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:border-green-600 transition-colors cursor-pointer">
            <h3 className="font-bold text-gray-800 mb-2">Pickup</h3>
            <p className="text-gray-600 text-sm">Order ahead and pick up at your convenience</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OrderOnlineModal;