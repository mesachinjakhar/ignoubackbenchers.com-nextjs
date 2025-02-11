"use client";

import CreateOrder from "@/components/CreateOrder";
import HandwrittenAssignments from "./content";

const Order = () => {
  return (
    <>
      <h1 className="text-center mt-10">Order Handwritten Assignment</h1>
      <CreateOrder />
      <HandwrittenAssignments />
    </>
  );
};

export default Order;
