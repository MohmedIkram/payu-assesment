"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

const Dashboard = () => {
  const cardData = [
    {
      title: "Customers",
      value: "3,781",
      percentage: "+11.01%",
      icon: "/images/dashboard/upArrow.png",
      bgColor: "bg-[#E3F5FF]",
    },

    {
      title: "Orders",
      value: "1,219",
      percentage: "-0.03%",
      icon: "/images/dashboard/upArrow.png",
      bgColor: "bg-[#F7F9FB]",
    },
    {
      title: "Revenue",
      value: "$695",
      percentage: "+15.403%",
      icon: "/images/dashboard/upArrow.png",
      bgColor: "bg-[#F7F9FB]",
    },
    {
      title: "Growth",
      value: "30.1%",
      percentage: "+6.08%",
      icon: "/images/dashboard/upArrow.png",
      bgColor: "bg-[#E5ECF6]",
    },
  ];

  const ChartData = [
    { name: "Jan", actual: 12, projection: 18 },
    { name: "Feb", actual: 15, projection: 20 },
    { name: "Mar", actual: 17, projection: 22 },
    { name: "Apr", actual: 22, projection: 25 },
    { name: "May", actual: 13, projection: 16 },
    { name: "Jun", actual: 18, projection: 21 },
  ];

  const datamap = [
    { month: "Jan", currentWeek: 13000000, previousWeek: 7000000 },
    { month: "Feb", currentWeek: 8000000, previousWeek: 17000000 },
    { month: "Mar", currentWeek: 8000000, previousWeek: 17000000 },
    { month: "Apr", currentWeek: 15000000, previousWeek: 10000000 },
    { month: "May", currentWeek: 20000000, previousWeek: 15000000 },
    { month: "Jun", currentWeek: 20000000, previousWeek: 23000000 },
  ];

  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
    { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
    { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
  ];

  return (
    <>
      <main className="flex-grow p-7 ">
        {/* Section 1 of eCommerce */}
        <section className="w-full rounded-lg pb-7">
          <h2 className="mb-4  text-sm">eCommerce</h2>
          <div className="flex flex-col lg:flex-row w-full">
            {/* Cards Container */}
            <div className="flex flex-wrap w-full lg:w-1/2 gap-6">
              {cardData.map((card, idx) => (
                <div
                  key={idx}
                  className={`w-full lg:w-1/2 max-w-[202px] max-h-28 rounded-2xl p-6 transition-transform duration-200 transform hover:scale-105 ${card.bgColor}`}
                >
                  <h3 className=" text-sm ">{card.title}</h3>
                  <motion.div className="flex justify-between pt-2">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="text-3xl font-bold "
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        {card.value}
                      </motion.span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, scale: [0.9, 1.1, 1] }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center gap-1 text-xs t"
                    >
                      {card.percentage}
                      <span>
                        <Image
                          src={card.icon}
                          alt={`${card.title} Icon`}
                          width={24}
                          height={24}
                        />
                      </span>
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Bar Chart Container */}
            <div className="bg-[#F7F9FB] rounded-lg p-6 w-full lg:w-[432px] lg:h-[252px]">
              <h2 className="text-sm font-bold mb-4">Projections vs Actuals</h2>
              <ResponsiveContainer>
                <BarChart
                  data={ChartData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid vertical={false} horizontal stroke="#e0e0e0" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis
                    domain={[0, 40]}
                    tickFormatter={(value) => `${value}M`}
                    tickLine={false}
                    tick={true}
                    axisLine={false}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="projection"
                    fill="#A8C5DA"
                    stackId="a"
                    barSize={20}
                    radius={0}
                  />
                  <Bar
                    dataKey="actual"
                    fill="#e0f2fe"
                    stackId="a"
                    barSize={20}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
        {/* /* Section 2 of eCommerce  */}
        <section className="w-full rounded-lg pb-7">
          <div className=" bg-[#F7F9FB] rounded-lg">
            <div className="w-full  p-4">
              <div className="flex items-center space-x-4">
                <h2 className="text-sm font-bold">Revenue</h2>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span className="text-sm">
                      Current Week{" "}
                      <span >${"58,211"}</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                    <span className="text-sm ">
                      Previous Week{" "}
                      <span >${"68,768"}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-3/4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={datamap}>
                    <CartesianGrid
                      vertical={false}
                      horizontal
                      stroke="#e0e0e0"
                    />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis
                      tickFormatter={(value) => `${value / 1000000}M`}
                      tickLine={false}
                      tick={true}
                      axisLine={false}
                    />
                    <Tooltip />
                    <Line
                      type="basis"
                      dataKey="currentWeek"
                      stroke="#000000"
                      strokeWidth={2}
                      dot={false}
                    />

                    <Line
                      type="basis"
                      dataKey="previousWeek"
                      stroke="#cccccc"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full rounded-lg pb-7">
          <div className="w-full bg-[#F7F9FB] rounded-lg p-8 shadow-sm">
            <h2 className="text-sm font-semibold mb-6">Top Selling Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4  ">
                      Name
                    </th>
                    <th className="text-right py-3 px-4  ">
                      Price
                    </th>
                    <th className="text-right py-3 px-4  ">
                      Quantity
                    </th>
                    <th className="text-right py-3 px-4  ">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-4 px-4">{product.name}</td>
                      <td className="text-right py-4 px-4">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="text-right py-4 px-4">
                        {product.quantity}
                      </td>
                      <td className="text-right py-4 px-4">
                        ${product.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
