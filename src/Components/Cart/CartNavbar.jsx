import React, { useState } from 'react'

export default function CartNavbar() {
  const [active,setActive]=useState(0)
  const ActiveCheckout=`uppercase font-bold cursor-pointer text-[#20bd99] tracking-[3px] font-Cust_NavbarFont text-[13px] border-[3px]  border-b-2 border-[#20bd99] border-x-0 border-y-0 `;
  const DeactiveCheckout=`uppercase cursor-pointer text-[#696b79] tracking-[3px]  font-Cust_NavbarFont text-[13px]`;

  return (
    <>
      <ol className="flex space-x-1 xs:space-x-3 justify-center">
        <li className={ active===0?ActiveCheckout:DeactiveCheckout} onClick={()=>setActive(0)}>
          Cart
        </li>
        <li className="border-[2px] border-x-0 border-t-0  w-5 xs:w-10 border-dashed my-auto border-[#696b79] opacity-50"></li>
        <li className={ active===1?ActiveCheckout:DeactiveCheckout} onClick={()=>setActive(1)}>
          Address
        </li>
        <li className="border-[2px] border-x-0 border-t-0 w-5 xs:w-10 border-dashed my-auto  border-[#696b79] opacity-50"></li>
        <li className={ active===2?ActiveCheckout:DeactiveCheckout} onClick={()=>setActive(2)}>
          Payment
        </li>
      </ol>
  </>
  )
}
