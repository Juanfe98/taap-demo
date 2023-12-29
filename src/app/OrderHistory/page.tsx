"use client";
import React from "react";
import Navbar from "../common/components/NavBar";
import { getOrders } from "../services/orders";

const OrderHistory = () => {
  const [ordersList, setOrdersList] = React.useState<any[]>([]);
  React.useEffect(() => {
    (async () => {
      const ordersList = await getOrders();
      setOrdersList(ordersList);
    })();
  });
  return (
    <>
      <Navbar shouldRenderCart={false} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Order History</h1>
        {ordersList.map((order) => (
          <div key={order.date} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Date: {order.date}</h2>
              <span className="text-lg font-semibold">{`Total Price: ${order.total}`}</span>
            </div>
            {order.products.map((productInvoice) => (
              <div
                key={productInvoice.product.id}
                className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg"
              >
                <img
                  src={productInvoice.product.image}
                  alt={productInvoice.product.title}
                  className="w-16 h-16 mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-md font-semibold">
                    {productInvoice.product.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span>Quantity: {productInvoice.units}</span>
                    <span>Price: {productInvoice.invoicedPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
