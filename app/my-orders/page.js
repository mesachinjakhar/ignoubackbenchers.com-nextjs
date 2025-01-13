import Image from "next/image";

const MyOrder = ({ orders }) => {
  return (
    <div className="my-orders-container px-[300px] mx-auto xs:px-[30px]">
      <h1>My Orders</h1>
      <div className="my-orders border border-gray-300 rounded-[5px] mb-[20px] bg-white">
        <div className="order-status flex items-center justify-between px-[25px] py-2">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <i className="bi bi-circle-fill text-teal-500 filter blur-[0.2px] text-[14px]"></i>

            <div>
              <h5>Order Recieved</h5>
              <p className="mt-[2px] text-[12px]">28 May 2024</p>
            </div>
          </div>
          <h2>
            <i className="bi bi-arrow-right-square text-2xl hover:cursor-pointer"></i>
          </h2>
        </div>
        <div className="order-details border-t border-b border-gray-500 px-[25px] py-[25px]">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <Image
              src="/images/assignment-icon.png"
              width={60}
              height={0}
              alt=""
            />
            <div>
              <h4>Handwritten Assignment</h4>
              <p className="mt-[2px] text-[14px]">Ouantity: 1</p>
            </div>
          </div>
        </div>

        <div className="order-footer flex px-[25px] py-[25px] justify-around gap-[10px] xs:px-[15px]">
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Help
          </button>
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Track
          </button>
        </div>
      </div>
      <div className="my-orders border border-gray-300 rounded-[5px] mb-[20px] bg-white">
        <div className="order-status flex items-center justify-between px-[25px] py-2">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <i className="bi bi-circle-fill text-amber-700 filter blur-[0.2px] text-[14px]"></i>

            <div>
              <h5>Order Recieved</h5>
              <p className="mt-[2px] text-[12px]">28 May 2024</p>
            </div>
          </div>
          <h2>
            <i className="bi bi-arrow-right-square text-2xl hover:cursor-pointer"></i>
          </h2>
        </div>
        <div className="order-details border-t border-b border-gray-500 px-[25px] py-[25px]">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <Image
              src="/images/assignment-icon.png"
              width={60}
              height={0}
              alt=""
            />
            <div>
              <h4>Handwritten Assignment</h4>
              <p className="mt-[2px] text-[14px]">Ouantity: 1</p>
            </div>
          </div>
        </div>

        <div className="order-footer flex px-[25px] py-[25px] justify-around gap-[10px] xs:px-[15px]">
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Help
          </button>
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Track
          </button>
        </div>
      </div>

      <div className="my-orders border border-gray-300 rounded-[5px] mb-[20px] bg-white">
        <div className="order-status flex items-center justify-between px-[25px] py-2">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <i className="bi bi-circle-fill text-green-500 filter blur-[0.2px] text-[14px]"></i>

            <div>
              <h5>Order Recieved</h5>
              <p className="mt-[2px] text-[12px]">28 May 2024</p>
            </div>
          </div>
          <h2>
            <i className="bi bi-arrow-right-square text-2xl hover:cursor-pointer"></i>
          </h2>
        </div>
        <div className="order-details border-t border-b border-gray-500 px-[25px] py-[25px]">
          <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
            <Image
              src="/images/assignment-icon.png"
              width={60}
              height={0}
              alt=""
            />
            <div>
              <h4>Handwritten Assignment</h4>
              <p className="mt-[2px] text-[14px]">Ouantity: 1</p>
            </div>
          </div>
        </div>

        <div className="order-footer flex px-[25px] py-[25px] justify-around gap-[10px] xs:px-[15px]">
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Help
          </button>
          <button className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]">
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
