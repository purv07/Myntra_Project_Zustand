import React, { useEffect, useRef } from 'react'
import { useProduct } from '../../Stores/productStore';
import { BsCurrencyRupee } from 'react-icons/bs';
import styles from './Whislist.module.css'
import Vivus from 'vivus';
import AnimatedSVG from '../AnimatedSVG/AnimatedSVG';
import { IoIosCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export default function Whislist() {
  const { fetchProducts, Products, isLoading, error, Cart, Wishlist, DelToWishlist, addToCart, delToCart, updateToCartQuantity, EmptyCart, AddToWishList } = useProduct(); // Destructure the state and fetch function
  const NavigateToHome = useNavigate()

  return (
    <>
      {
        Wishlist.length <= 0 ?
        // Code for Empty Wishlist
          <div className='flex justify-center flex-col h-screen '>
            <p className='font-Cust_NavbarFont font-bold mx-auto text-[20px]'>YOUR WISHLIST IS EMPTY</p>
            <p className='font-Cust_NavbarFont font-normal  text-center text-[18px] text-[#94989f] mx-auto mt-5 max-w-[360px]'>Add items that you like to your wishlist.Review them anytime and easily move them to the bag.</p>
            <img src='src\assets\SVG\Add notes-amico.svg ' className='mx-auto w-[200px] h-[200px]' />
            <div onClick={() => { NavigateToHome('/') }} className='cursor-pointer border border-[#1D85FC] px-10 py-3 mx-auto rounded-[3px] mt-5 text-[#1D85FC] font-bold'>CONTINUE SHOPPING</div>
          </div>
          :
          // Main Code For Wishlist
          <div className=' w-full   mt-4 sm:mt-48  lg:mt-32'>
            <div className="max-w-[1280px] mx-auto">
              <div className={`px-10 ${styles.MainConGrid}`}>
                {
                  Wishlist.map((Wishlist) => {
                    return (
                      <div key={Wishlist.id} className="w-[220px] overflow-hidden border mx-auto border-[#eaeaec] relative">
                        {/* IMG */}
                        <div >
                          <img src={Wishlist.image} className={`${styles.ImgRespo} mx-auto`} />
                        </div>
                        {/* Title */}
                        <div className="mt-3">
                          <p className="text-[#282c3f] text-[16px] font-extralight text-center text-ellipsis w-full line-clamp-1">{Wishlist.title}</p>
                        </div>
                        {/* Price */}
                        <div className="flex justify-center my-3">
                          <p className="font-Cust_NavbarFont text-[16px] my-auto font-bold flex text-[#282c3f] me-1">
                            <BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f]" />
                            {Wishlist.price}
                          </p>
                          <p className="font-Cust_NavbarFont line-through my-auto text-[14px]  flex text-[#282c3f] ps-0 pe-1 opacity-60">
                            <BsCurrencyRupee size={14} className="font-Cust_NavbarFont  my-auto line-through  text-[#282c3f] pe-0 opacity-60" />
                            {Wishlist.price + Wishlist.price}
                          </p>
                          <p className="font-Cust_NavbarFont  my-auto text-[14px] text-red-400  mt-auto">(50% OFF)</p>
                        </div>
                        <hr />
                        {/* Move to Cart BTN */}
                        <div onClick={() => { addToCart(Wishlist); DelToWishlist(Wishlist.id); toast.success('Item moved to cart!'); }} className='my-3 cursor-pointer text-center text-[#ff3e6c] font-Cust_NavbarFont font-bold uppercase text-[14px]'>
                          Move to Cart
                        </div>
                        {/* Close btn */}
                        <IoIosCloseCircle
                          className="absolute top-0 right-0 m-[6px] cursor-pointer text-gray-500 text-[24px]  transition duration-300 ease-in-out hover:text-gray-900 "
                          onClick={() => { DelToWishlist(Wishlist.id); toast.error('Item removed from wishlist!'); }}
                        />

                      </div>
                    )
                  })
                }



              </div>
            </div>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
      }

    </>

  )
}
