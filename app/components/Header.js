import Image from "next/image";
import React from "react";

export const Header = ({ toggleLeftSidebar, toggleRightSidebar }) => {
  return (
    <header className="flex justify-between px-4 py-3  border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button onClick={toggleLeftSidebar}>
          <Image
            className=" filter dark:invert dark:brightness-0 dark:contrast-100"
            src="/images/header/hamburger.png"
            alt="hamburger"
            width={24}
            height={24}
          />
        </button>
        <Image
          className=" filter dark:invert dark:brightness-0 dark:contrast-100"
          src="/images/header/star.png"
          alt="star"
          width={24}
          height={24}
        />
        <div >
          <span >Dashboards</span>
          <span className="mx-2">/</span>
          <span>Default</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            className="absolute transform -translate-y-1/2 left-3 top-1/2 "
            src="/images/nav/search.png"
            alt="search"
            width={24}
            height={24}
          />
          <Image
            className="absolute transform -translate-y-1/2 right-3 top-1/2"
            src="/images/nav/cmd.png"
            alt="search"
            width={24}
            height={24}
          />
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-10 pr-4 border border-gray-300 dark:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          />
        </div>
        <button>
          <Image
            className=" filter dark:invert dark:brightness-0 dark:contrast-100"
            src="/images/header/sun.png"
            alt="sun"
            width={24}
            height={24}
          />
        </button>
        <button>
          <Image
            className=" filter dark:invert dark:brightness-0 dark:contrast-100"
            src="/images/header/history.png"
            alt="history"
            width={24}
            height={24}
          />
        </button>
        <button>
          <Image
            className=" filter dark:invert dark:brightness-0 dark:contrast-100"
            src="/images/header/bell.png"
            alt="bell"
            width={24}
            height={24}
          />
        </button>
        <button onClick={toggleRightSidebar}>
          <Image
            className=" filter dark:invert dark:brightness-0 dark:contrast-100"
            src="/images/header/hamburger.png"
            alt="hamburger"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
};
