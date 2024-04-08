import React from "react";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

const TopMenuItem = ({ icon, path, title }: Props) => {

  return (
    <button className="">
      <a
        href={path}
        className={"px-4 py-2 flex items-center space-x-4 text-xs bg-gradient-to-r border-b border-gray-200 text-white"}>
        <span className="group-hover:text-white">{title}</span>
      </a>
    </button>
  );
};

export default TopMenuItem;
