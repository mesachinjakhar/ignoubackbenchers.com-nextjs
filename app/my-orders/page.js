"use client";

import Image from "next/image";
import { fetchOrder, verifyToken } from "@/helpers/apiHelpers";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MyOrder = ({ orders }) => {
  const [fetchedOrders, setFetchedOrders] = useState([]);
  const [isLoading, setILoading] = useState(false);

  const router = useRouter();

  function handleHelpButton() {
    router.push("https://wa.me/918398999896");
  }

  useEffect(() => {
    // check if user logged in
    setILoading(true);
    const verifyUser = async () => {
      const response = await verifyToken();
      if (!response.status) {
        return router.push("/login");
      }
    };

    const fetchData = async () => {
      const response = await fetchOrder();
      if (response.status) {
        console.log("success order fetched");
        console.log(response);
        setFetchedOrders(response.data.orders);
        setILoading(false);
      } else {
        console.log("error fetching orders, ", response);
      }
    };

    verifyUser();
    fetchData();
  }, []);

  if (fetchedOrders.length == 0) {
    return (
      <div className="text-center mt-10">
        <div>
          {isLoading === false ? (
            <div>
              <h1>No Orders found</h1>{" "}
              <h5 className="mt-5">
                👉 <a className="underline cursor-pointer">Click here</a> to
                create your first order
              </h5>
              <h5 className="mt-5">
                🙋‍♂️ Need help?{" "}
                <a className="underline cursor-pointer">Click here</a> to talk
                us on WhatsApp
              </h5>
            </div>
          ) : (
            <h1>Please wait</h1>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-orders-container px-[300px] mx-auto xs:px-[30px]">
      <h1>My Orders</h1>
      {fetchedOrders.map((order) => {
        return (
          <div
            key={order._id}
            className="my-orders border border-gray-300 rounded-[5px] mb-[20px] bg-white"
          >
            <div className="order-status flex items-center justify-between px-[25px] py-2">
              <div className="order-status-icon-date flex items-center gap-[15px] mb-[5px]">
                <i className="bi bi-circle-fill text-teal-500 filter blur-[0.2px] text-[14px]"></i>

                <div>
                  <h5>Order Recieved</h5>
                  <p className="mt-[2px] text-[12px]">{order.createdAt}</p>
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
                  <p className="mt-[2px] text-[14px]">
                    Ouantity: {order.numberOfAssignments}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-footer flex px-[25px] py-[25px] justify-around gap-[10px] xs:px-[15px]">
              <button
                onClick={handleHelpButton}
                className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]"
              >
                Help
              </button>
              <button
                onClick={handleHelpButton}
                className="order-footer-btn px-[50px] py-[10px] text-[16px] border border-gray-500 rounded-[5px] text-black bg-white cursor-pointer hover:text-white xs:px-[45] w-[100%]"
              >
                Track
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrder;
