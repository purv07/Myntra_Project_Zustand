import { create } from "zustand";
import { persist } from "zustand/middleware";

const storeProducts = (set) => ({
  Products: [],
  Cart: [],
  Wishlist: [],
  Coupons: [
    { MYNTRA300: 300 },
    { USER100: 100 },
    { JB1X34: 250 },
    { MYTRA800: 800 },
  ],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null }); // Set loading to true and reset error
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      set({ Products: data, isLoading: false }); // Update products and stop loading
    } catch (err) {
      set({ error: err.message, isLoading: false }); // Set error if fetch fails
    }
  },

  addToCart: (product) => {
    set((state) => {
      // Check if the product already exists in the cart
      const productExists = state.Cart.find((item) => item.id === product.id);
      if (productExists) {
        // If the product already exists, increment its quantity
        return {
          Cart: state.Cart.map((item) =>
            item.id === product.id
              ? { ...item, Quantity: item.Quantity + 1 } // Increment quantity
              : item
          ),
        };
      } else {
        // If the product doesn't exist, add it with a default quantity of 1
        return {
          Cart: [...state.Cart, { ...product, Quantity: 1 }], // Add new product with Quantity: 1
        };
      }
    });
  },

  updateToCartQuantity: (productId, NewQuantity) =>
    set((state) => ({
      Cart: state.Cart.map((item) =>
        item.id === productId ? { ...item, Quantity: NewQuantity } : item
      ),
    })),
  delToCart: (id) => {
    set((state) => ({
      Cart: [...state.Cart.filter((item) => item.id !== id)],
    }));
  },
  EmptyCart: () => {
    set((state) => ({
      Cart: [],
    }));
  },
  AddToWishList: (item) => {
    set((state) => {
      const newItem = item.filter(
        (item) =>
          !state.Wishlist.some((WishlistItem) => WishlistItem.id === item.id)
      );
      return {
        Wishlist: [...state.Wishlist, ...newItem],
        Cart: [],
      };
    });
  },
  DelToWishlist: (id) => {
    set((state) => ({
      Wishlist: [...state.Wishlist.filter((item) => item.id !== id)],
    }));
  },
});

// export const useProduct=create(storeProducts);
export const useProduct = create(persist(storeProducts), { name: "API Data" }); // persist use for save this data to localstorage
