import Image from "next/image";
import React from "react";

export const DashboardTwo = () => {
  const orders = [
    {
      id: "#CM9801",
      user: { name: "Natali Craig", image: "/images/notification/user.png" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", image: "/images/notification/user.png" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", image: "/images/notification/user.png" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", image: "/images/notification/user.png" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", image: "/images/notification/user.png" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-xs">Order List</h1>
      <div className="mb-3 flex items-center justify-between rounded-lg bg-tableBg p-2">
        <div className="flex space-x-2">
          <button>
            <Image
              className="filter dark:brightness-0 dark:contrast-100 dark:invert"
              src="/images/orderList/plus.png"
              alt="hamburger"
              width={28}
              height={28}
            />
          </button>
          <button>
            <Image
              className="filter dark:brightness-0 dark:contrast-100 dark:invert"
              src="/images/orderList/filter.png"
              alt="hamburger"
              width={28}
              height={28}
            />
          </button>
          <button>
            <Image
              className="filter dark:brightness-0 dark:contrast-100 dark:invert"
              src="/images/orderList/sort.png"
              alt="hamburger"
              width={28}
              height={28}
            />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full border py-2 pl-10 pr-4"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 text-xs">
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="mr-2" />
                Order ID
              </th>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Project</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left"></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`border-b border-gray-100 hover:bg-gray-50`}
              >
                <td className="px-6 py-4 text-left">
                  <input type="checkbox" className="mr-2" />
                  <span>{order.id}</span>
                </td>
                <td className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <Image
                        className="rounded-full"
                        src={order.user.image}
                        alt={order.user.name}
                        width={32}
                        height={32}
                      />
                    </div>
                    <span>{order.user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-left">{order.project}</td>
                <td className="px-6 py-4 text-left">{order.address}</td>
                <td className="px-6 py-4 text-left">
                  <Image
                    className="mr-1 inline filter dark:brightness-0 dark:contrast-100 dark:invert"
                    src="/images/orderList/date.png"
                    alt="Callender"
                    width={16}
                    height={16}
                  />
                  {order.date}
                </td>
                <td className="flex items-center px-6 py-4">
                  <span
                    class={`block h-2 w-2 rounded-full ${
                      order.status === "Complete"
                        ? "bg-green-800"
                        : order.status === "In Progress"
                          ? "bg-blue-800"
                          : order.status === "Pending"
                            ? "bg-yellow-800"
                            : order.status === "Approved"
                              ? "bg-purple-800"
                              : "bg-red-800"
                    }`}
                  ></span>
                  <p
                    className={`rounded-full px-3 py-1 text-xs ${
                      order.status === "Complete"
                        ? "text-green-800"
                        : order.status === "In Progress"
                          ? "text-blue-800"
                          : order.status === "Pending"
                            ? "text-yellow-800"
                            : order.status === "Approved"
                              ? "text-purple-800"
                              : "text-red-800"
                    }`}
                  >
                    {order.status}
                  </p>
                </td>
                <td className="px-6 py-4 text-left">
                  <button>
                    <Image
                      className="filter dark:brightness-0 dark:contrast-100 dark:invert"
                      src="/images/orderList/dots.png"
                      alt="hamburger"
                      width={28}
                      height={28}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
