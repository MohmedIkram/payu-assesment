import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LeftSidebar = ({ isOpen }) => {
  const navItems = [
    {
      title: "Favorites",
      items: [
        { name: "Overview", icon: null, href: "#" },
        { name: "Projects", icon: null, href: "#" },
      ],
    },
    {
      title: "Dashboards",
      items: [
        { name: "Default", icon: "/images/nav/ChartPieSlice.svg", href: "#" },
        {
          name: "eCommerce",
          icon: "/images/nav/ecom.svg",
          href: "#",
          subMenu: [
            { name: "Product List", href: "#" },
            { name: "Add Product", href: "#" },
          ],
        },
        {
          name: "Online Courses",
          icon: "/images/nav/ecom.svg",
          href: "#",
          subMenu: [
            { name: "Course List", href: "#" },
            { name: "Add Course", href: "#" },
          ],
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          name: "User Profile",
          icon: "/images/nav/arrow.png",
          subMenu: [
            { name: "Overview", href: "#" },
            { name: "Projects", href: "#" },
            { name: "Campaigns", href: "#" },
            { name: "Documents", href: "#" },
            { name: "Followers", href: "#" },
          ],
        },
        { name: "Account", icon: "/images/nav/ecom.svg", href: "#" },
        { name: "Corporate", icon: "/images/nav/ecom.svg", href: "#" },
        { name: "Blog", icon: "/images/nav/ecom.svg", href: "#" },
        { name: "Social", icon: "/images/nav/ecom.svg", href: "#" },
      ],
    },
  ];
  return (
    <aside
      className={`hidden w-[212px] p-6  border-r border-gray-200 lg:block ransition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center gap-2 mb-6">
        <Image src="/images/nav/user.png" alt="user" width={24} height={24} />
        <span >ByeWind</span>
      </div>
      <nav>
        {navItems.map((section, sectionIdx) => (
          <div key={sectionIdx} className="pb-7">
            <h3 className="mb-2 ">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx} className="relative overflow-hidden">
                  {item.subMenu ? (
                    <details className="group">
                      <summary className="flex items-center cursor-pointer ">
                        <Image
                          src="/images/nav/arrow.png"
                          alt="Arrow Icon"
                          width={16}
                          height={16}
                          className="mr-2 transition-transform duration-300 group-open:rotate-90"
                        />
                        <Image
                          className="pr-1 filter dark:invert dark:brightness-0 dark:contrast-100"
                          src="/images/nav/ecom.svg"
                          alt="Picture of the author"
                          width={20}
                          height={20}
                        />
                        <span className="ml-2">{item.name}</span>
                      </summary>
                      <ul className="pl-4 mt-2 space-y-1">
                        {item.subMenu.map((subItem, subItemIdx) => (
                          <li className="py-1" key={subItemIdx}>
                            <Link
                              href={subItem.href}
                              className=" dark:text-white"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center py-1 rounded-2xl"
                    >
                      {section.title === "Favorites" && (
                        <span className="w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
                      )}
                      {item.icon && (
                        <Image
                          className="pr-1 filter dark:invert dark:brightness-0 dark:contrast-100"
                          src={item.icon}
                          alt="Icon"
                          width={20}
                          height={20}
                        />
                      )}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
