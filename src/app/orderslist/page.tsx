'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { OrderDTO } from "@/DTO/order";

function OrdersList() {
  const [orders, setOrders] = useState<OrderDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const getQueryParam = (param: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(param);
  };

  useEffect(() => {
    const password = getQueryParam("password");
    if (password === "frippyAdmin0130") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  const fetchOrders = async () => {
    const url =  process.env.NEXT_PUBLIC_GETALL_ORDERS!;
    try {
      const response = await axios.get(url);
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorized) {
      fetchOrders();
    }
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-red-600">Unauthorized</h2>
        <p>Please provide a valid password to access this page.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="container mx-auto p-4">Loading orders...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Orders List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Product ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Pincode</th>
              <th className="border px-4 py-2">Address Line 1</th>
              <th className="border px-4 py-2">Address Line 2</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order: OrderDTO) => (
                <tr key={order.id} className="text-center border">
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.productId}</td>
                  <td className="border px-4 py-2">{order.name}</td>
                  <td className="border px-4 py-2">{order.contactNumber}</td>
                  <td className="border px-4 py-2">{order.pincode}</td>
                  <td className="border px-4 py-2">{order.addressLine1}</td>
                  <td className="border px-4 py-2">{order.addressLine2}</td>
                  <td
                    className={`border px-4 py-2 font-bold ${
                      order.status === "PENDING"
                        ? "text-yellow-500"
                        : order.status === "SHIPPED"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-4">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
