import React from "react";


interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

const SidebarItem = ({ icon, path, title }: Props) => {
  return (
    <li>
      <a
        href={path}
        className={
          "px-4 py-3 flex items-center space-x-4 rounded-md bg-gradient-to-r bg-gray-600 text-white"
        }>
        {icon}
        <span className="group-hover:text-white">{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
