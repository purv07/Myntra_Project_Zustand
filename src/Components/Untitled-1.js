            {
              products.map((product) => {
                return ( // Use return statement or wrap with parentheses
                  <div key={product.id} className={`${styles.MainConGridSpan2} py-10`}>
                    <div className={`${styles.MainGridGallery}`}>
                      <div className={`border-0 transition rounded-sm duration-100 ${styles.ProductBoxHover}`}>
                        <div className={`h-17 w-13 relative`}>
                          <img src={product.image} alt={product.title} />
                          <div className={`${styles.DisplayShow} flex items-center justify-center text-center absolute bottom-0 w-full bg-white`}>
                            <div className="font-Cust_NavbarFont border w-full mx-2 py-1 border-slate-200 text-[#282c3f] text-center rounded-sm hover:bg-[#F41CB2] font-medium transition ease-in-out duration-300 hover:text-white hover:font-medium cursor-pointer flex items-center justify-center">
                              <CiShoppingBasket className="mr-2" />
                              <p className='text-Cust_ProductAddCart'>Add to Cart</p>
                            </div>
                          </div>
                          {/* Review Design */}
                          <div className="bg-[#ffffffcc] opacity-80 p-1 rounded-sm mx-auto shadow-lg bottom-0 ms-2 mb-2 flex justify-center space-x-[5px] items-center">
                            <span className="text-[10px] font-bold contrast-20 items-center text-[#000000]">{product.rating.rate}</span>
                            <FaStar size={11} className='items-center text-[#72BFBC]' />
                            <span className="font-bold items-center py-[5px] border-black border-r-2 rounded-sm"></span>
                            <span className="text-[10px] font-bold items-center text-[#000000]">{product.rating.count}</span>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="space-y-1 mt-2 pb-2 px-2">
                          <p className="font-Cust_NavbarFont text-Cust_ProductName font-bold text-[#282c3f] text-ellipsis w-full line-clamp-1">{product.title}</p>
                          <p className="font-Cust_NavbarFont text-Cust_ProductName font-normal text-[#535766] text-ellipsis w-full line-clamp-1">{product.description}</p>
                          <div className="flex space-x-1">
                            <p className="font-Cust_NavbarFont text-Cust_ProductName font-bold text-[#282c3f]">RS.{product.price}</p>
                            <p className="font-Cust_NavbarFont text-Cust_StrikeSize font-normal text-[#535766] line-through mt-auto">RS.{product.price + product.price}</p>
                            <p className="font-Cust_NavbarFont text-Cust_StrikeSize text-red-400 mt-auto">(50%) OFF</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }