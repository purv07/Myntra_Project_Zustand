import React, { useEffect, useState } from 'react'
import styles from './MainCon.module.css';
import { CiShoppingBasket } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useProduct } from '../Stores/productStore';
import Swal from 'sweetalert2';
import './Cust_SweetAlerts/demoAlert.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function MainCon() {
  const [countProduct, setcountProduct] = useState(0);
  const { fetchProducts, Products, isLoading, error, Cart, addToCart, delToCart } = useProduct(); // Destructure the state and fetch function
  const isProductInCart = (product) => {
    return product && Cart.some(item => item.id === product.id);
  };

  const ShowAdd_DelCart = (type, message) => {
    let iconType = type === 'add' ? 'success' : 'warning';
    let backgroundColor = type === 'add' ? '#28a745' : '#ffc107';
    let iconColor = type === 'add' ? '#ffffff' : '#ffffff';  // White for add, yellow for delete

    Swal.fire({
      position: "bottom-end",
      icon: iconType,
      title: `<strong>${message}</strong>`,
      showConfirmButton: false,
      timer: 999999,
      backdrop: `rgba(0,0,0,0.0)`,
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        icon: 'custom-swal-icon',
      },
      didOpen: () => {
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.padding = "0px";



        // Apply custom styles
        document.querySelector('.custom-swal-popup').style.backgroundColor = backgroundColor;
        document.querySelector('.custom-swal-icon').style.color = iconColor;
      },
      didClose: () => {
        // Unlock body scroll
        document.body.style.overflow = '';
      }
    });
  };
  useEffect(() => {
    if (Products.length > 0) {
      setcountProduct(Products.length)
      console.log("Fetched Products:", Products); // Log updated products only if not empty

    }
  }, [Products]);
  useEffect(() => {

    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const categories = [
    { name: "electronics", label: "Electronics", count: 3240 },
    { name: "jewelery", label: "Jewelery", count: 3240 },
    { name: "men's clothing", label: "Men's", count: 3240 },
    { name: "women's clothing", label: "Women's", count: 3240 }
  ];



  return (
    <div className={` ${styles.MarginTopMain} w-full max-w-screen-2xl mx-auto relative`}>
      <div className="-z-10  bg-[#ffffff] ">
        <div className="flex mx-5">
          <p className="font-Cust_NavbarFont" >Women's Clothings  - </p><p className="text-[#878b94]"> {countProduct} items</p>
        </div>
        <p className="mx-5 font-Cust_NavbarFont font-extrabold mt-5" > FILTERS</p>
        <hr className={`${styles.HrLine}  w-full h-0 mt-5`} />
        <div className={`${styles.MainConGrid} `}>
          <div className={`${styles.MainConGridSpan1}   pb-5 me-8 `}>

            <p className="font-Cust_NavbarFont font-bold mx-5 mt-5">Categories</p>
            <div className="flex-col flex font-Cust_NavbarFont ms-5 font-normal">
              {categories.map((cat) => (
                <label key={cat.name} className="mt-3 flex items-center">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 mx-2 ${styles.custom_checkbox} appearance-none default:ring-2 default:ring-[#ff3f6c] border border-gray-400 accent-[#ff3f6c]`}

                  />
                  {cat.label}
                  <p className="text-[#878b94]">({cat.count})</p>
                </label>
              ))}
            </div>
          </div>

          <div className={`${styles.MainConGridSpan2}  py-10`}>
            <div className={`${styles.MainGridGallery}`}>
              {
                Products.map((product) => {
                  return (
                    <div key={product.id} className="{`${styles.MainConGridSpan2}  `}">
                      <div className="{`${styles.MainGridGallery}`}">
                        <div className={` border-0 transition rounded-sm duration-100  ${styles.ProductBoxHover}`}>
                          <div className='relative' >
                            <img src={product.image} className={`${styles.product_image} mx-auto`} />
                            {
                              isProductInCart(product) ?
                                (<div onClick={() => { delToCart(product.id);  toast.error('Item removed from cart!'); }} className={` ${styles.DisplayShow}    flex items-center justify-center text-center absolute bottom-0 w-full bg-white`}>
                                  <div className="font-Cust_NavbarFont  border w-full mx-2 py-1 border-slate-200 text-[#282c3f] text-center rounded-sm hover:bg-[#F41CB2] font-medium transition ease-in-out duration-300 hover:text-white hover:font-medium cursor-pointer flex items-center justify-center">
                                    <CiShoppingBasket className="mr-2" />
                                    <p className='text-Cust_ProductAddCart'>Remove from Cart</p>
                                  </div>
                                </div>) :
                                (<div onClick={() => { addToCart(product);  toast.success('Item added to cart!'); }} className={` ${styles.DisplayShow}    flex items-center justify-center text-center absolute bottom-0 w-full bg-white`}>
                                  <div className="font-Cust_NavbarFont  border w-full mx-2 py-1 border-slate-200 text-[#282c3f] text-center rounded-sm hover:bg-[#F41CB2] font-medium transition ease-in-out duration-300 hover:text-white hover:font-medium cursor-pointer flex items-center justify-center">
                                    <CiShoppingBasket className="mr-2" />
                                    <p className='text-Cust_ProductAddCart'>Add to Cart</p>
                                  </div>
                                </div>)
                            }
                            {/* Review Design */}
                            <div className="bg-[#ffffffcc] opacity-80 p-1 rounded-sm mx-auto shadow-lg bottom-0 ms-2 mb-2  flex justify-center space-x-[5px] items-center absolute">
                              <span className="  text-[10px] font-bold contrast-20 items-center text-[#000000]">{product.rating.rate}</span>
                              <FaStar size={11} className='items-center text-[#72BFBC] ' />
                              <span className="  font-bold items-center  py-[5px] border-black border-r-2 rounded-sm"></span>
                              <span className="text-[10px] font-bold items-center text-[#000000]">{product.rating.count}</span>
                            </div>
                          </div>
                          {/* Product Info */}
                          <div className="space-y-1 mt-2 pb-2 px-2">
                            <p className="font-Cust_NavbarFont text-Cust_ProductName font-bold text-[#282c3f] text-ellipsis w-full line-clamp-1">{product.title}</p>
                            <p className="font-Cust_NavbarFont text-Cust_ProductName font-normal text-[#535766] text-ellipsis w-full line-clamp-1">{product.description}</p>
                            <div className="flex space-x-1 ">
                              <p className="font-Cust_NavbarFont text-Cust_ProductName font-bold text-[#282c3f]">RS.{product.price}</p>
                              <p className="font-Cust_NavbarFont text-Cust_StrikeSize font-normal text-[#535766] line-through mt-auto">RS.{product.price + product.price}</p>
                              <p className="font-Cust_NavbarFont text-Cust_StrikeSize  text-red-400  mt-auto">(50%) OFF</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
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
  )
}
