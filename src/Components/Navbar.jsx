import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';



export default function Navbar() {
    const IconRef=useRef();
    const DropRef=useRef();

    const toggleDropdown = () => {
        if (DropRef.current) {
          DropRef.current.classList.toggle('hidden');
        }
      };

  return (
   <>

<div className="container-fluid">
  <header className="sm:fixed left-0 right-0 top-0 z-Cust_NavBarZIndex bg-white shadow-Cust_MyntraLogoShadow">
    <nav className="my-5 flex items-center">
      {/* <!-- Navbar /Logo --> */}
      <div className="lg:ms-11 ms-2 flex-1 lg:flex-none" >
        <NavLink to="/" ><img src="https://raw.githubusercontent.com/KG-Coding-with-Prashant-Sir/React_Complete_YouTube/main/Projects/9-Myntra%20Clone/1-pre-built-bundle/old-clone/images/myntra_logo.webp" className="h-11 w-14" /></NavLink>
      </div>
      {/* <!-- Navbar /Menu --> */}
      <div className="mx-5 flex  list-none  font-Cust_NavbarFont font-bold uppercase text-[#282c3f]">

      <div className="items-center sm:space-x-8 space-x-3 text-Cust_Nav3IconFont sm:flex hidden">
          <li className="hover:border-[#ee5f73] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">Men</li>
          <li className="hover:border-[#fb56c1] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">Women</li>
          <li className="hover:border-[#f26a10] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">Kids</li>
          <li className="hover:border-[#f2c210] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">Home & Living</li>
          <li className="hover:border-[#0db7af] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">Beauty</li>
          <li className="hover:border-[#ff3f6c] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm">
            Studio
              <sup className="text-Cust_StudioNew text-[#ff3f6c]">New</sup>
          </li>
        </div>
        <div className="" onClick={toggleDropdown} >
        <svg viewBox="0 0 24 24" id="menu-icon" ref={IconRef} className="h-8 w-8 mx-auto me-5 cursor-pointer flex sm:hidden" fill="#282c3f" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#282c3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
        </svg>
        </div>

        <div id="dropdown" ref={DropRef} className="rounded-lg sm:hidden hidden flex-col bg-gray-100 z-10 p-4 absolute top-16 left-5 right-5 mx-auto">
  <ul className="flex flex-col space-y-2">
    <li className="hover:border-[#ee5f73] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">Men</li>
    <li className="hover:border-[#fb56c1] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">Women</li>
    <li className="hover:border-[#f26a10] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">Kids</li>
    <li className="hover:border-[#f2c210] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">Home & Living</li>
    <li className="hover:border-[#0db7af] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">Beauty</li>
    <li className="hover:border-[#ff3f6c] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm p-3 inline-block">
      Studio
      <sup className="text-Cust_StudioNew text-[#ff3f6c]">New</sup>
    </li>
  </ul>
</div>

        
      </div>
      
      {/* <!-- Navbar /Search --> */}
      <div className="ms-11 flex-1 hidden lg:inline-block  ">
        <div className="flex focus:border focus:border-slate-200 focus:bg-transparent focus:outline-none  ">
           {/* <!-- /Search Input --> */}
          <input type="text" className="h-11 w-full  text-ellipsis text-[#696e79]  font-Cust_NavbarFont  placeholder:text-[#696e79] rounded-sm bg-[#f5f5f6] p-2 ps-11 transition duration-200 ease-in focus:border focus:border-slate-200 focus:bg-transparent focus:outline-none" placeholder="Search for products, brands and more" />
           {/* <!-- /Search Icon Div --> */}
          <div className="absolute h-11 w-10  p-2 flex  justify-center items-center ">
            <svg fill="#696e79" className="h-[0.875rem] w-[0.875rem]"   version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 488.4 488.4" xmlSpace="preserve" stroke="#ff0">
              <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g><path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path></g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Navbar /Profile,Cart,Whislist XL Screen --> */}
      <div className=" hidden lg:inline-block  flex ms-5 list-none font-Cust_NavbarFont me-5  font-bold uppercase text-[#282c3f] items-center">
        <div className="flex space-x-8 justify-center items-center">
          <NavLink exact to="/Profile" className={ ({isActive})=> isActive?`border-[#ee5f73] hover:border-[#ee5f73] border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`:`hover:border-[#ee5f73] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`  }>
            <svg fill="#5e626e" className="h-4 w-4 mx-auto " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#5e626e" strokeWidth="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"></path></g>
            </svg>
            <label className="text-Cust_Nav3IconFont capitalize ">
              Profile
            </label>
          </NavLink>
          <NavLink exact to="/Whislist" className={ ({isActive})=>isActive?`border-[#fb56c1] hover:border-[#fb56c1] border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`:`hover:border-[#fb56c1] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1` } >
            <svg fill="#5e626e" className="h-4 w-4 mx-auto " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#5e626e" strokeWidth="0.00016">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.37 2.56a3.92 3.92 0 0 0-3-1 4.1 4.1 0 0 0-1.82.52A9.18 9.18 0 0 0 8 3.06a9.35 9.35 0 0 0-1.49-1 3.85 3.85 0 0 0-1.77-.52A4.07 4.07 0 0 0 1.63 2.6 4 4 0 0 0 .35 5.52a3.83 3.83 0 0 0 .88 2.33 33.87 33.87 0 0 0 5.7 6.2l.39-.49-.38.49a1.67 1.67 0 0 0 1.06.42 1.71 1.71 0 0 0 1.08-.42 37.42 37.42 0 0 0 6.06-6.73 3.5 3.5 0 0 0 .47-1.74 4 4 0 0 0-1.24-3.02zm-.26 4.06a37.1 37.1 0 0 1-5.81 6.46.56.56 0 0 1-.28.13.51.51 0 0 1-.29-.14 32.77 32.77 0 0 1-5.49-5.94 2.74 2.74 0 0 1-.64-1.61 2.75 2.75 0 0 1 .88-2 2.79 2.79 0 0 1 2.16-.72h.1a2.73 2.73 0 0 1 1.19.38A10.23 10.23 0 0 1 7.24 4l.76.63.76-.63a9 9 0 0 1 1.34-.86 2.91 2.91 0 0 1 1.26-.39h.1a2.68 2.68 0 0 1 2.07.68 2.78 2.78 0 0 1 .87 2 2.18 2.18 0 0 1-.29 1.19z"></path>
            </g>
            </svg>
             <label className="text-Cust_Nav3IconFont capitalize ">
              Whishlist
            </label>
          </NavLink>
          {/* className={ ({isActive})=>isActive?`border-[#f26a10] hover:border-[#f26a10]   border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`:`hover:border-[#f26a10]   border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`} */}
          <NavLink exact to="/Cart" className={({ isActive }) => isActive ? 'border-[#f26a10] hover:border-[#f26a10]   border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1':'hover:border-[#f26a10]   border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1'}  >
              <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4 mx-auto " xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="#292D32" strokeWidth="1.5"></path> <g opacity="0.4"> <path d="M8.80945 2L5.18945 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.1895 2L18.8095 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.75977 14V17.55" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M14.3594 14V17.55" stroke="#5e626e" strokeWidth="1.5" strokeLinecap="round"></path> </g> <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="#5e626e" strokeWidth="1.5" strokeLinecap="round"></path> </g>
              </svg>
               <label className="text-Cust_Nav3IconFont capitalize  ">
              Cart
            </label>
          </NavLink>
        </div>
      </div>
      

    </nav>
    <div className="flex mb-5 lg:hidden flex-col sm:flex-row ">
      {/* <!-- Navbar /Logo --> */}
      {/* <!-- <div className="ms-11 ">
        <div  className="h-11 w-14" ></div>
      </div> --> */}
          {/* <!-- Navbar /Search --> */}
      <div className="mx-5  flex-1 ">
        <div className="flex focus:border focus:border-slate-200 focus:bg-transparent focus:outline-none  ">
           {/* <!-- /Search Input --> */}
          <input type="text" className="h-11 w-full text-ellipsis text-[#696e79]  font-Cust_NavbarFont  placeholder:text-[#696e79] rounded-sm bg-[#f5f5f6] p-2 ps-11 transition duration-200 ease-in focus:border focus:border-slate-200 focus:bg-transparent focus:outline-none" placeholder="Search for products, brands and more" />
           {/* <!-- /Search Icon Div --> */}
          <div className="absolute h-11 w-10  p-2 flex justify-center items-center ">
            <svg fill="#696e79" className="h-[0.875rem] w-[0.875rem]"   version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 488.4 488.4" xmlSpace="preserve" stroke="#ff0">
              <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g><path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path></g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Navbar /Profile,Cart,Whislist Small Screen --> */}
      <div className=" sm:mt-0 mt-5 flex justify-center ms-5 list-none font-Cust_NavbarFont me-5  font-bold uppercase text-[#282c3f] items-center">
        <div className="flex space-x-8 justify-center items-center">
          <NavLink exact to="/Profile" className={ ({isActive})=> isActive?`border-[#ee5f73] hover:border-[#ee5f73] border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`:`hover:border-[#ee5f73] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`  }>
            <svg fill="#5e626e" className="h-4 w-4 mx-auto " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#5e626e" strokeWidth="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM3,22V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v4a1,1,0,0,1-2,0V18a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v4a1,1,0,0,1-2,0Z"></path></g>
            </svg>
            <label className="text-Cust_Nav3IconFont capitalize ">
              Profile
            </label>
          </NavLink>
          <NavLink exact to="/Whislist" className={ ({isActive})=>isActive?`border-[#fb56c1] hover:border-[#fb56c1] border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1`:`hover:border-[#fb56c1] border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1` }>
            <svg fill="#5e626e" className="h-4 w-4 mx-auto " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#5e626e" strokeWidth="0.00016">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.37 2.56a3.92 3.92 0 0 0-3-1 4.1 4.1 0 0 0-1.82.52A9.18 9.18 0 0 0 8 3.06a9.35 9.35 0 0 0-1.49-1 3.85 3.85 0 0 0-1.77-.52A4.07 4.07 0 0 0 1.63 2.6 4 4 0 0 0 .35 5.52a3.83 3.83 0 0 0 .88 2.33 33.87 33.87 0 0 0 5.7 6.2l.39-.49-.38.49a1.67 1.67 0 0 0 1.06.42 1.71 1.71 0 0 0 1.08-.42 37.42 37.42 0 0 0 6.06-6.73 3.5 3.5 0 0 0 .47-1.74 4 4 0 0 0-1.24-3.02zm-.26 4.06a37.1 37.1 0 0 1-5.81 6.46.56.56 0 0 1-.28.13.51.51 0 0 1-.29-.14 32.77 32.77 0 0 1-5.49-5.94 2.74 2.74 0 0 1-.64-1.61 2.75 2.75 0 0 1 .88-2 2.79 2.79 0 0 1 2.16-.72h.1a2.73 2.73 0 0 1 1.19.38A10.23 10.23 0 0 1 7.24 4l.76.63.76-.63a9 9 0 0 1 1.34-.86 2.91 2.91 0 0 1 1.26-.39h.1a2.68 2.68 0 0 1 2.07.68 2.78 2.78 0 0 1 .87 2 2.18 2.18 0 0 1-.29 1.19z"></path>
            </g>
            </svg>
             <label className="text-Cust_Nav3IconFont capitalize  ">
              Whishlist
            </label>
          </NavLink>
          <NavLink exact to="/Cart" className={({ isActive }) => isActive ? 'border-[#f26a10] hover:border-[#f26a10]   border-b-4  transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1':'hover:border-[#f26a10]   border-b-4 border-transparent transition duration-300 ease-in-out cursor-pointer rounded-sm  pb-1'}>
              <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4 mx-auto " xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="#292D32" strokeWidth="1.5"></path> <g opacity="0.4"> <path d="M8.80945 2L5.18945 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.1895 2L18.8095 5.63" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.75977 14V17.55" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M14.3594 14V17.55" stroke="#5e626e" strokeWidth="1.5" strokeLinecap="round"></path> </g> <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="#5e626e" strokeWidth="1.5" strokeLinecap="round"></path> </g>
              </svg>
               <label className="text-Cust_Nav3IconFont capitalize ">
              Cart
            </label>
          </NavLink>
        </div>
      </div>
    </div>
  </header>

  {/* <!-- Main Content --> */}

</div>

   </>
  )
}
