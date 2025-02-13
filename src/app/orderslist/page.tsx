import React from "react";

function OrdersList() {
  const orders = [
    {
      id: 1,
      productId: 101,
      name: "John Doe",
      contact: 9876543210,
      pincode: 110001,
      addressLineA: "123 Main Street 123",
      addressLineB: "123 Main Street ",
      status: "PENDING",
    },
    {
      id: 2,
      productId: 102,
      name: "Jane Smith",
      contact: 9123456789,
      pincode: 560001,
      addressLineA: "456 Park Avenue",
      addressLineB: "Suite 12C",
      status: "SHIPPED",
    },
    {
      id: 3,
      productId: 103,
      name: "Michael Johnson",
      contact: 9988776655,
      pincode: 400001,
      addressLineA: "789 Elm Street",
      addressLineB: "Building 5, Flat 302",
      status: "DELIVERED",
    },
  ];

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
              <th className="border px-4 py-2">Address Line A</th>
              <th className="border px-4 py-2">Address Line B</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center border">
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.productId}</td>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">{order.contact}</td>
                <td className="border px-4 py-2">{order.pincode}</td>
                <td className="border px-4 py-2">{order.addressLineA}</td>
                <td className="border px-4 py-2">{order.addressLineB}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
