import React, { useEffect, useRef, useState } from 'react'
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import styles from './CartMainCon.module.css';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoCloseOutline } from "react-icons/io5";
import { BsCurrencyRupee } from 'react-icons/bs';
import { IoMdArrowDropdown } from "react-icons/io";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { useProduct } from '../../Stores/productStore';
import { GoTag } from 'react-icons/go';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartMainCon() {
    const { fetchProducts, Products, isLoading, Coupons, error, Cart, addToCart, delToCart, updateToCartQuantity, EmptyCart, AddToWishList, Wishlist } = useProduct(); // Destructure the state and fetch function
    const [show, setshow] = useState(false);
    const [showModel, setshowModel] = useState(false);
    const [showModelQTY, setShowModelQTY] = useState(null);
    const [Quantity, setQuantity] = useState(1);



    // Check,Coupon,Donation
    const [CouponValue, SetCouponValue] = useState(0);
    const [chk, Setchk] = useState(false);
    const [txtCoupon, settxtCoupon] = useState();
    const DeactiveDonation = `text-[#282c3f] border-slate-200`;
    const [chkDonation, SetchkDonation] = useState(0);
    const ActiveDonation = `border-[#ff3f6c] text-[#ff3f6c]`;


    const totalPrice = Cart.reduce((acc, items) => acc + items.price * items.Quantity, 0)

    const HandleDonationCheckBox = () => {

        Setchk(!chk)
        if (!chk) {
            toast.success('Thanks for Social Work');
            SetchkDonation(10)
        } else {

            SetchkDonation(0);
        }
    }
    const HandleDonationSelection = (amount) => {
        if (chk) {
            toast.success('Thanks for Social Work');
            SetchkDonation(amount)
        }
    }
    const HandleCouponApply = () => {
        const matched = Coupons.some((coupon) =>
            Object.keys(coupon)[0] === txtCoupon
                ? (SetCouponValue(Object.values(coupon)[0]), true, toast.success('Coupon Applied'))
                : false
        );
        if (!matched) {
            toast.error('Coupon not valid!');
            SetCouponValue(0);
        }

    };


    return (
        <>

            <div className='border border-[#eaeaec] w-full border-t-[0.5px] border-x-0 border-y-0 mt-5'>
                <div className="max-w-[980px] mx-auto flex flex-wrap">
                    <div className="md:w-[64%] w-[100%] p-5 ">
                        {/* Available Offers */}
                        <div className="border rounded-sm border-[#eaeaec] w-full  p-5">
                            <div className='flex space-x-2'>
                                <RiDiscountPercentLine className='align-middle my-auto' />
                                <p className='capitalize text-[13px] font-bold text-[#282c3f]'>Available Offers</p>
                            </div>
                            <ul className='list-disc ps-5 marker:text-[#d4d5d9] '>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                            </ul>
                            <ul className={`list-disc ps-5 transition-max-height duration-300 ease-in-out ${show ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                } overflow-hidden marker:text-[#d4d5d9]`}>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                                <li className='capitalize text-[13px] font-normal pt-3 font-Cust_NavbarFont text-[#282c3f] '>
                                    10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of ₹3,500. TCA
                                </li>
                            </ul>
                            <div className='flex cursor-pointer  mt-3' onClick={() => { setshow(!show) }}>
                                <p className='text-[#ff3f6c] text-[14px] font-bold font-Cust_NavbarFont'>Show more</p>
                            </div>
                        </div>

                        {/* Items Selected  */}
                        <div className='flex  my-10 flex-col xs:flex-row '>
                            <div className="flex space-x-1 xs:mx-0 mx-auto">
                                <input
                                    type="checkbox"
                                    className={`w-3 h-3 mx-2 my-auto   ${styles.custom_checkbox} appearance-none default:ring-2 default:ring-[#ff3f6c] border border-gray-400 accent-[#ff3f6c]`} checked={Cart.length > 0} />
                                <label className="text-[#282c3f] uppercase my-auto  font-Cust_NavbarFont text-[14px] font-bold">
                                    {Cart.length} Items in Cart
                                </label>
                            </div>
                            <div className='flex  mx-auto xs:ms-auto xs:me-0  space-x-2 mt-5 xs:mt-0 sm:space-x-10'>
                                <div className=' my-auto cursor-pointer' onClick={() => { EmptyCart(); toast.error('Item removed from cart!'); }}>
                                    <p className='text-[#696b79] uppercase font-bold text-[12px]'>Remove</p>
                                </div>

                                <div className=' my-auto cursor-pointer border-s-[1px] border-[#d4d5d9] ps-2 sm:ps-10' onClick={() => { AddToWishList([...Cart]); toast.success('Items moved to wishlist!') }}>
                                    <p className='text-[#696b79] uppercase font-bold text-[12px]'>Move to Wishlist</p>
                                </div>
                            </div>
                        </div>
                        {/* Product Show */}
                        <div className='space-y-3'>
                            {
                                Cart.map((products) => {
                                    return (
                                        <div key={products.id} className='w-full relative'>
                                            <div className='border-[1px] flex-col xs:flex-row border-[#d4d5d9] flex space-x-2 p-4'>
                                                <img className={` ${styles.ImgDisplay} mx-auto rounded-[1px]`} src={products.image} />
                                                <div className='mt-3 space-y-[7px] flex-1'>
                                                    <p className='text-[#282c3f] text-[14px] font-medium text-ellipsis w-full line-clamp-1'>{products.title}</p>
                                                    <p className='text-[#282c3f] text-[13px] font-normal opacity-60 text-ellipsis w-full line-clamp-1'>{products.description}</p>
                                                    <div className='bg-[#f5f5f6] text-[14px] w-fit px-[9px] py-[2px] rounded-md font-medium flex cursor-pointer' onClick={() => { setShowModelQTY(products.id) }}>Qty: {products.Quantity}<IoMdArrowDropdown className='my-auto' /></div>
                                                    <Dialog as="div" className={`fixed inset-0 flex items-center justify-center ${styles.DialogZIndex}`} open={showModelQTY === products.id} onClose={() => setShowModelQTY(null)}>
                                                        <div className="fixed inset-0 bg-black opacity-50"></div> {/* Overlay background */}
                                                        <DialogPanel className="w-full max-w-md transform  rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                                                            <DialogTitle as="h3" className="flex text-lg font-medium leading-6 p-6 text-gray-900">
                                                                Select Quantity
                                                                <div className='ms-auto cursor-pointer'>
                                                                    <IoCloseOutline
                                                                        size={30}
                                                                        onClick={() => setShowModelQTY(null)} // Close the modal when clicking the button
                                                                    />
                                                                </div>
                                                            </DialogTitle>

                                                            <div className="flex justify-center space-x-2 m-2">
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 1); setShowModelQTY(null) }}>1</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 2); setShowModelQTY(null) }}>2</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 3); setShowModelQTY(null) }}>3</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 4); setShowModelQTY(null) }}>4</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 5); setShowModelQTY(null) }}>5</div>
                                                            </div>
                                                            <div className="flex justify-center space-x-2 m-2 mb-5">
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 6); setShowModelQTY(null) }}>6</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 7); setShowModelQTY(null) }}>7</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 8); setShowModelQTY(null) }}>8</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-5 py-3' onClick={() => { updateToCartQuantity(products.id, 9); setShowModelQTY(null) }}>9</div>
                                                                <div className='cursor-pointer rounded-full border-[1px] hover:border-[#ff3f6c] border-[#535766] px-4 py-3' onClick={() => { updateToCartQuantity(products.id, 10); setShowModelQTY(null) }}>10</div>
                                                            </div>
                                                        </DialogPanel>
                                                    </Dialog>
                                                    <div className='flex '>
                                                        <p className='font-Cust_NavbarFont text-[14px] font-bold flex text-[#282c3f] me-1'>
                                                            <BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f] " />
                                                            {(products.price * products.Quantity).toFixed(2)}</p>
                                                        <p className='font-Cust_NavbarFont line-through text-[14px]  flex text-[#282c3f] ps-0 pe-1 opacity-60'>
                                                            <BsCurrencyRupee size={14} className="font-Cust_NavbarFont  my-auto line-through  text-[#282c3f] pe-0 opacity-60 " />
                                                            {(products.price * 2 * products.Quantity).toFixed(2)}
                                                        </p>
                                                        <p className="font-Cust_NavbarFont ms-1 my-auto text-[14px] text-red-400  mt-auto">50% OFF</p>

                                                    </div>
                                                    <p className="font-Cust_NavbarFont ms-1 my-auto text-[14px]  mt-auto">

                                                        <div className='flex space-x-1 '>
                                                           
                                                            <p className='font-bold font-Cust_NavbarFont flex'> <TbArrowBackUpDouble className='my-auto' />7 Days</p>
                                                            <p className=' opacity-60'> return available</p>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='absolute top-0 right-0 mt-3 me-3 cursor-pointer' onClick={() => delToCart(products.id)}>
                                                <IoCloseOutline size={20} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="md:w-[36%] w-[100%] p-5  mt-4 md:mt-0 border border-[#eaeaec] border-s-[0.5px] border-x-0 border-y-0 ">
                        <p className="uppercase font-Cust_NavbarFont text-[12px] font-bold text-[#535766]">COUPONS</p>
                        <div className='text-[#282c3f] border rounded-sm md:px-1 px-1 py-2  my-3 border-slate-200 flex  items-center'>
                            <GoTag size={18} className='hidden lg:inline-block'/>
                            <input type='text' onChange={(e) => settxtCoupon(e.target.value)} placeholder='Apply Coupon' className='lg:flex-1 md:w-[160px] flex-1  md:ms-0 ms-1  font-Cust_NavbarFont placeholder:ps-1 uppercase font-semibold p-1 placeholder:text-[13px] focus:border-slate-200 focus:bg-transparent focus:outline-none'></input>
                            <p onClick={HandleCouponApply} className='px-3 py-1 text-[12px] font-bold ms-auto text-[#ff3f6c] rounded-sm cursor-pointer active:bg-[#ffebf0] hover:bg-[#ffebf0] transition duration-300 ease-out  border border-[#ff3f6c]'>Apply</p>
                        </div>
                        <p className="uppercase font-Cust_NavbarFont text-[12px]   font-bold text-[#535766] mt-10">Support transformative social work in India</p>

                        {/* Checkbox */}
                        <div className="flex space-x-2 mt-5">
                            <input
                                type="checkbox"
                                onChange={HandleDonationCheckBox}
                                className={`w-4 h-4 mx-2 my-auto  ${styles.custom_checkbox} appearance-none default:ring-2 default:ring-[#ff3f6c] border border-gray-400 accent-[#ff3f6c]`} />
                            <label className="text-[#282c3f] my-auto capitalize font-Cust_NavbarFont text-[14px] font-bold">
                                Donate and make a difference
                            </label>
                        </div>
                        {/* Donation BTN list */}
                        <div className='list-none flex space-x-2 mt-5 cursor-pointer'>
                            <li className={`rounded-2xl border flex space-x-2 text-center  ${chkDonation == 10 ? ActiveDonation : DeactiveDonation} px-3 py-1  my-auto capitalize font-Cust_NavbarFont text-[14px] font-bold`} onClick={() => { HandleDonationSelection(10) }}><LiaRupeeSignSolid className={`my-auto  ${chkDonation == 10 ? ActiveDonation : DeactiveDonation} capitalize font-Cust_NavbarFont  text-[14px] font-bold`} />10</li>
                            <li className={`rounded-2xl border flex space-x-2 text-center  ${chkDonation == 50 ? ActiveDonation : DeactiveDonation} px-3 py-1  my-auto capitalize font-Cust_NavbarFont text-[14px] font-bold`} onClick={() => { HandleDonationSelection(50) }}><LiaRupeeSignSolid className={`my-auto  ${chkDonation == 50 ? ActiveDonation : DeactiveDonation} capitalize font-Cust_NavbarFont  text-[14px] font-bold`} />50</li>
                            <li className={`rounded-2xl border flex space-x-2 text-center  ${chkDonation == 100 ? ActiveDonation : DeactiveDonation} px-3 py-1  my-auto capitalize font-Cust_NavbarFont text-[14px] font-bold`} onClick={() => { HandleDonationSelection(100) }}><LiaRupeeSignSolid className={`my-auto  ${chkDonation == 100 ? ActiveDonation : DeactiveDonation} capitalize font-Cust_NavbarFont  text-[14px] font-bold`} />100</li>
                            <li className={`rounded-2xl border flex space-x-2 text-center  ${chkDonation == 250 ? ActiveDonation : DeactiveDonation} px-3 py-1  my-auto capitalize font-Cust_NavbarFont text-[14px] font-bold`} onClick={() => { HandleDonationSelection(250) }}><LiaRupeeSignSolid className={`my-auto  ${chkDonation == 250 ? ActiveDonation : DeactiveDonation} capitalize font-Cust_NavbarFont  text-[14px] font-bold`} />250</li>
                        </div>

                        {/* Model Dialog Box */}
                        <div className='flex cursor-pointer ps-1 mt-3' onClick={() => { setshowModel(!showModel) }}>
                            <p className='text-[#ff3f6c] text-[14px] font-bold font-Cust_NavbarFont'>Know More</p>
                        </div>
                        <Dialog as="div" className={`fixed inset-0 flex items-center justify-center   ${styles.DialogZIndex} `} open={showModel} onClose={() => setshowModel(false)}>
                            <div className="fixed inset-0 bg-black opacity-50"></div> {/* Overlay background */}
                            <DialogPanel className="w-full max-w-md transform  rounded-lg bg-white  text-left align-middle shadow-xl transition-all">
                                <DialogTitle as="h3" className="flex text-lg font-medium leading-6 p-6 text-gray-900">
                                    Donate and make a difference
                                    <div className='ms-auto cursor-pointer'>
                                        <IoCloseOutline
                                            size={30}
                                            onClick={() => setshowModel(false)} // Close the modal when clicking the button
                                        />
                                    </div>
                                </DialogTitle>

                                <div className="">
                                    <img src='https://constant.myntassets.com/checkout/assets/img/Checkout_Widget_Image_Myntra.webp' />

                                    <div className='m-6 p-6 rounded-sm bg-[#f4f4f5]'>
                                        <ul className="list-disc ps-3 text-sm text-[#282c3f] text-[14px]">
                                            <li className='my-1'>Donation amount is being collected on behalf of Flipkart Foundation</li>
                                            <li className='my-1'>Donation amount is non-refundable</li>
                                            <li className='my-1'>Myntra will share your Name, phone number, Email ID and Address with Flipkart Foundation .</li>
                                            <li className='my-1'>No 80G receipt will be provided for this donation.</li>
                                        </ul>
                                        <div className='flex'><p className='ps-3  text-sm text-[#282c3f] text-[14px]'>Have a question? check </p><p className=' text-sm ps-1  text-[#ff3f6c] font-bold text-[14px] hover:underline cursor-pointer'> FAQs</p></div>
                                    </div>
                                </div>

                            </DialogPanel>
                        </Dialog>

                        {/* Bills Details */}
                        <div className='border border-[#eaeaec] border-y-[0.5px] border-x-0  mt-5 pt-5'>
                            <p className="uppercase font-Cust_NavbarFont text-[12px] font-bold text-[#535766] flex space-x-2">Price Details <p className='ms-1 text-[#ff3f6c]'>({Cart.length} items)</p> </p>
                            <div className=''>
                                <ol>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] ">Total MRP</p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#282c3f]'><BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f] " />{(totalPrice * 2).toFixed(2)}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] ">Discount on MRP</p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#03a685]'>-<BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#03a685] " />{totalPrice.toFixed(2)}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] ">Coupon Discount</p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#03a685]'>-<BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#03a685] " />{CouponValue}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] ">Social Work Donation</p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#282c3f]'><BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f] " />{chkDonation}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] flex ">Platform Fee
                                                <div className='flex cursor-pointer ps-1' >
                                                    <p className='text-[#ff3f6c] text-[14px] font-bold font-Cust_NavbarFont'>Know More</p>
                                                </div>
                                            </p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#03a685]'>FREE</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex my-3'>
                                            <p className="font-Cust_NavbarFont flex-1 text-[14px] font-normal text-[#282c3f] flex ">Shipping Fee
                                                <div className='flex cursor-pointer ps-1 ' >
                                                    <p className='text-[#ff3f6c] text-[14px] font-bold font-Cust_NavbarFont'>Know More</p>
                                                </div>
                                            </p>
                                            <p className='flex  font-Cust_NavbarFont text-[14px] font-normal text-[#03a685]'><p className='line-through flex font-Cust_NavbarFont text-[14px] font-normal text-[#282c3f] pe-1 opacity-60'><BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f]" />79</p>FREE</p>
                                        </div>
                                    </li>

                                </ol>
                            </div>

                        </div>
                        {/* Total Amount */}
                        <div className='flex space-x-2 mt-3'>
                            <p className='capitalize flex-1 text-[14px] font-bold text-[#282c3f]'>Total Amount</p>
                            <p className='capitalize text-[14px] font-bold text-[#282c3f] flex'><BsCurrencyRupee size={14} className="font-Cust_NavbarFont my-auto  text-[#282c3f] " />{totalPrice.toFixed(2)}</p>
                        </div>
                        {/* Place Order BTN */}
                        <div className='w-full uppercase cursor-pointer bg-[#ff3f6c] text-[14px] hover:bg-[#e93d67] transition duration-300 ease-in-out font-Cust_NavbarFont font-bold mt-3 text-white text-center rounded-sm py-2'>
                            place order
                        </div>

                    </div>

                    <div className='flex mt-7 mb-5 w-full md:flex-row flex-col'>
                        <div className='sm:flex space-x-1 flex-1 mx-auto hidden'>
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png' />
                            <img className='md:w-[65px] md:h-[35px] sm:w-[45px] sm:h-[25px] w-[25px] h-[15px]' src='https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png' />
                        </div>
                        <p className='cursor-pointer mb-auto  mt-3 md:mt-auto md:ms-auto mx-auto'>Need Help? Contact Us</p>
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


        </>
    )
}
