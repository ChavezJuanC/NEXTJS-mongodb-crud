import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='flex justify-between bg-gray-900 text-white font-bold items-center h-12'>
      <Link href={"/"}>
        <div className='text-xl ml-5'>Tasks</div>
      </Link>
      <Link href={"/new-task"}>
        <button className='text-lg mr-5'>New Task</button>
      </Link>
    </div>
  );
};

export default NavBar;
