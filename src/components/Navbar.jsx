"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaShoppingCart,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();

  // catch the user
  const userData = authClient.useSession();
  const user = userData.data?.user;

  // logout function
  const handleLogOut = async () =>{
    await authClient.signOut();
  }


  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center animate__animated animate__slideInDown animate__slow">
      
      <div className="w-full rounded-b-2xl px-6 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="text-orange-500 text-2xl flex gap-2 font-bold items-center">
            <FaShoppingCart />
            <h2>Sun<span className="text-gray-500">Cart</span></h2>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            <Link href="/" className={`${
    pathname === "/"
      ? "text-orange-400 border-orange-400 pb-1 border-b-2"
      : "text-black hover:text-orange-400"
  }`}>Home</Link>
            <Link href="/all-products" className={`${
    pathname === "/all-products"
      ? "text-orange-400 border-orange-400 pb-1 border-b-2"
      : "text-black hover:text-orange-400"
  }`}>Products</Link>
            <Link href="/profile" className={`${
    pathname === "/profile"
      ? "text-orange-400 border-orange-400 pb-1 border-b-2"
      : "text-black hover:text-orange-400"
  }`}>My Profile</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="">
            {/* if user is not */}
            {
              !user && <ul className="flex md:flex items-center gap-6">
                <FaSearch />
            <FaShoppingBag />
            <Link href={"/login"} className="px-6 py-2 rounded-full bg-orange-500 text-white w-fit font-semibold">
                Login
              </Link>
              </ul>
            }


            {/* if user have */}
            {
              user && <div className="flex items-center gap-3 font-semibold">
                <Avatar>
        <Avatar.Image alt={user?.name} src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback className="font-bold">{user?.name[0]}</Avatar.Fallback>
      </Avatar>

      {/* sign out */}
      <button onClick={handleLogOut} className="cursor-pointer px-6 py-2 rounded-full bg-orange-500 text-white w-fit">Logout</button>
              </div>
            }


          </div>

          {/* MOBILE MENU TOGGLE (HIDDEN CHECKBOX) */}
          <label className="md:hidden cursor-pointer text-xl">
            <input type="checkbox" className="peer hidden" />
            <FaBars className="peer-checked:hidden" />
            <FaTimes className="hidden peer-checked:block" />

            {/* MOBILE MENU */}
            <div className="
              absolute left-1/2 -translate-x-1/2 top-20
              w-[95%] max-w-7xl
              rounded-2xl
              bg-orange-200
              border border-white/20
              shadow-lg
              flex flex-col gap-4
              p-6
              hidden
              peer-checked:flex
              font-semibold
            ">
              <Link href={"/"} className={`${
                pathname === "/"
                  ? "text-orange-400 border-orange-400"
                  : "text-black hover:text-orange-400"
              }`}>Home</Link>
              <Link href={"/all-products"} className={`${
              pathname === "/all-products"
                ? "text-orange-400 border-orange-400"
                : "text-black hover:text-orange-400"
            }`}>Products</Link>
              <Link href={"/profile"} className={`${
    pathname === "/profile"
      ? "text-orange-400 border-orange-400"
      : "text-black hover:text-orange-400"
  }`}>My Profile</Link>

              <div className="flex gap-5 pt-3">
                <FaSearch />
                <FaShoppingBag />
              </div>
            </div>
          </label>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;