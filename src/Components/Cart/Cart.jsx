import React from "react";
import CartNavbar from "./CartNavbar"
import CartMainCon from "./CartMainCon";
import { useProduct } from "../../Stores/productStore";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { fetchProducts, Products, isLoading, Coupons, error, Cart, addToCart, delToCart, updateToCartQuantity, EmptyCart, AddToWishList, Wishlist } = useProduct(); // Destructure the state and fetch function
  const NavigateToHome = useNavigate();
  return (
    <>
      {
        Cart.length <= 0 ?
          <div className='flex justify-center flex-col h-screen '>
            <p className='font-Cust_NavbarFont font-bold mx-auto text-[20px] uppercase'>YOUR Cart IS EMPTY</p>
            <p className='font-Cust_NavbarFont font-normal  text-center text-[18px] text-[#94989f] mx-auto mt-5 max-w-[360px]'>Add items that you like to Buy.Review them anytime and easily move them to the Wishlist.</p>
            <img src='https://raw.githubusercontent.com/purv07/Myntra_Project_Zustand/refs/heads/main/src/assets/SVG/Add%20notes-pana.svg' className='mx-auto w-[200px] h-[200px]' />
            <div onClick={() => { NavigateToHome('/') }} className='cursor-pointer border border-[#1D85FC] px-10 py-3 mx-auto rounded-[3px] mt-5 text-[#1D85FC] font-bold'>CONTINUE SHOPPING</div>
          </div>
          :
          <div className="  mt-4 sm:mt-48  lg:mt-32">

            <CartNavbar />
            <CartMainCon />


          </div>
      }

    </>
  );
}
