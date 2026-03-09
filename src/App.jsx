import CategoryProducts from "./components/categoryProducts/CategoryProducts"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/navbar/Navbar"
import ShopByCategory from "./components/shopbycategory/ShopByCategory"
import Topcategory from "./components/topCategory/TopCategory"
import TrendingProducts from "./components/trendingProducts/TrendingProducts"
import { useCart } from './hook/useCart.js';

function App() {
  const { cartItems, isCartOpen, addToCart, updateQty, removeItem, setIsCartOpen } = useCart();

  return (
    <>
      <Navbar
        cartItems={cartItems}
        onUpdateQty={updateQty}
        onRemoveItem={removeItem}
        cartOpen={isCartOpen}
        setCartOpen={setIsCartOpen}
      />

      <HeroSection />
      <TrendingProducts onAddToCart={addToCart} />
      <Topcategory />
      <CategoryProducts onAddToCart={addToCart} />
      <ShopByCategory />
      <Footer />
    </>
  )
}

export default App;