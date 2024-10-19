import Image from "next/image";
import React from "react";

export const RightSidebar = ({ isOpen }) => {
  const sidebarData = {
    notifications: [
      {
        icon: "/images/header/sun.png",
        text: "You have a bug that needs...",
        time: "Just now",
      },
      {
        icon: "/images/header/sun.png",
        text: "New user registered",
        time: "59 minutes ago",
      },
      {
        icon: "/images/header/sun.png",
        text: "You have a bug that needs...",
        time: "12 hours ago",
      },
      {
        icon: "/images/header/sun.png",
        text: "Andi Lane subscribed to you",
        time: "Today, 11:59 AM",
      },
    ],
    activities: [
      {
        icon: "/images/notification/user.png",
        text: "You have a bug that needs...",
        time: "Just now",
      },
      {
        icon: "/images/notification/user.png",
        text: "Released a new version",
        time: "59 minutes ago",
      },
      {
        icon: "/images/notification/user.png",
        text: "Submitted a bug",
        time: "12 hours ago",
      },
      {
        icon: "/images/notification/user.png",
        text: "Modified A data in Page X",
        time: "Today, 11:59 AM",
      },
      {
        icon: "/images/notification/user.png",
        text: "Deleted a page in Project X",
        time: "Feb 2, 2023",
      },
    ],
    contacts: [
      { name: "Natali Craig", icon: "/images/notification/user.png" },
      { name: "Drew Cano", icon: "/images/notification/user.png" },
      { name: "Orlando Diggs", icon: "/images/notification/user.png" },
      { name: "Andi Lane", icon: "/images/notification/user.png" },
      { name: "Kate Morrison", icon: "/images/notification/user.png" },
      { name: "Koray Okumus", icon: "/images/notification/user.png" },
    ],
  };
  return (
    <aside
      className={`hidden w-64 p-4 border-l border-gray-200 lg:block lg:min-w-[280px] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Notifications Section */}
      <section className="mb-8">
        <h2 className="mb-4  ">Notifications</h2>
        <div className="space-y-4">
          {sidebarData.notifications.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <Image
                className=" filter dark:invert dark:brightness-0 dark:contrast-100"
                src={item.icon}
                alt="Icon"
                width={24}
                height={24}
              />
              <div>
                <p>{item.text}</p>
                <p className="text-xs font-lightGreyText">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="mb-8">
        <h2 className="mb-4 ">Activities</h2>
        <div className="space-y-2">
          {sidebarData.activities.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <Image src={item.icon} alt="Icon" width={32} height={32} />
              <div>
                <p >{item.text}</p>
                <p className="text-xs">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts Section */}
      <section>
        <h2 className="mb-4 ">Contacts</h2>
        <div className="space-y-2">
          {sidebarData.contacts.map((contact, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Image
                src={contact.icon}
                alt={contact.name}
                width={32}
                height={32}
              />
              <p >{contact.name}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};
