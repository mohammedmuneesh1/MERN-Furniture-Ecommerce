import "./App.css";
import { MyData } from "./Main-Component/MyData";
import Header from "./Header/Header";
import Register from "./Login-Register/Register";
import Footer from "./Footer/Footer";
import { product } from "./Main-Component/Product";
import { UserData } from "./Main-Component/UserData";
import Main from "../src/Main-Component/Main";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Sofa from "./Main-Component/Category Page/Sofa";
import ProductPage from "./Body/ProductPage";
import Bowl from "./Main-Component/Category Page/Bowl";
import Mattresses from "./Main-Component/Category Page/Mattresses";
import Lamps from "./Main-Component/Category Page/Lamps";
import Appliances from './Main-Component/Category Page/Appliances'
import Plants from "./Main-Component/Category Page/Plants";
import Cart from "./Body/Cart";
import AdminHome from "./Admin/AdminHome";
import Auser from "./Admin/Auser";
import AallProduct from "./Admin/AallProduct";
import AdminRevenue from "./Admin/adminRevenue";
import AdminOrders from "./Admin/adminOrders"
import Wishlist from "./Body/wishlist";

// P-TYPE importing 
import Asofa from "./Admin/P-TYPE/Asofa";
import ABowls from "./Admin/P-TYPE/ABowls";
import ALamps from "./Admin/P-TYPE/ALamps";
import Aplants from './Admin/P-TYPE/Aplants';
import Amattress from "./Admin/P-TYPE/Amattress";
import Aappliances from "./Admin/P-TYPE/Aappliances";
import ProductEditPage from "./Admin/ProductEditPage";
import ProductAddPage from "./Admin/ProductAddPage";
import OrderDetails from "./Admin/OrderDetails";
import axiosInstance from "./Admin/Axios/axiosInstance";
function App() {

  
  const [item, setItem] = useState(product);
  const [user, setUser] = useState(UserData);
  const [lstatus, setLstatus] = useState(true);
  const [logname, setLogname] = useState("");
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState([]);
  const [displayname,setDisplayname]=useState(null);
  const [productfetch,setProductfetch] = useState([]);
  //code to remove header and footer admin dashboard
  const location = useLocation();
  const HeadFoot = location.pathname.startsWith("/Admin");
  //code for admin to delete the product(admin page)
  const removeItem=(ItemIndex)=>{
    const UpdateProduct=[...item];
    UpdateProduct.splice(ItemIndex,1);
    setItem(UpdateProduct);
  }
  
  const token = localStorage.getItem('jwtToken')
  const userId = localStorage.getItem('id');
//  ALL THE PRODUCTS FETCHING   
  const [products,setProducts] =useState();
  const displayProducts = async () => {
    try {
      const response = await axiosInstance.get('/api/admin/products');
     
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  


//ALL THE PRODUCTS FETCHING END




  //CODE FOR WISHLIST 
  const [wishlist,setWishlist]=useState([]);
  const wishlistFn =async ()=>{
    if(token){
      const id = userId
      try{
        const response = await axiosInstance.get(`/api/users/${id}/wishlist`);
        if(response.status === 200){
          return setWishlist(response.data.wishlist)
        }
      }
      catch(error){
        console.log(error)
      }
    }
  }




const addToWishlist = async(pId)=>{
  if(token){
    const id = userId
    const payload = {productId:pId}
    try{
   const response = await axiosInstance.post(`/api/users/${id}/wishlist`,payload)
   if(response.status === 200){
    wishlistFn();
   }
    }
    catch(error){
      if(error.response.status === 409){
        alert("The Product Already in your cart. ")
      }
    }
  }
  else{
    setClose(!close)
  }
  
  }
  
const removeToWishlist = async(pId)=>{
  if(token){
    const id = userId
    try{
   const response = await axiosInstance.delete(`/api/users/${id}/wishlist/${pId}`)
   if(response.status === 200){
    wishlistFn();
   }
    }
    catch(error){
      if(error.response.status === 409){
        alert(error.response.message);
      }
    }
  }
  else{
    setClose(!close)
  }
  
  }




//CODE FOR HANDLING PRICE SYMBOLS [,]


const handlePrice = (price) => {
  const formattedPrice = Number(price).toLocaleString("en-IN"); // 'en-IN' for the Indian numbering system (e.g., 1,23,456.00)
  return "₹" + formattedPrice;
};


//CODE FOR HANDLING PRICE END HERE





useEffect(() => {
  displayProducts();

  if (!location.pathname.startsWith("/Admin")) {
    wishlistFn();
  }
},);


  return (
    <>
      <MyData.Provider
        value={{
          item,
          setItem,
          user,
          setUser,
          lstatus,
          setLstatus,
          logname,
          setLogname,
          close,
          setClose,
          cart,
          setCart,
          removeItem,
          displayname,
          setDisplayname,
          token,
          userId,
          wishlist,
          products,
          setProducts,
          setWishlist,
          addToWishlist,
          removeToWishlist,
          handlePrice
        }}
      >
        { !HeadFoot && <Header />}
        <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/Registration" element={<Register />} />
  <Route path="/sofa" element={<Sofa />} />
  <Route path="/Bowl" element={<Bowl />} />
  <Route path="/Mattress" element={<Mattresses />} />
  <Route path="/Lamps" element={<Lamps />} />
  <Route path="/Appliances" element={<Appliances />} />
  <Route path="/Plant" element={<Plants />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/Product/:id" element={<ProductPage />} />
  <Route path="/Wishlist" element={<Wishlist />} />
  


  <Route path="/Admin" element={<AdminHome />}>
      <Route path="/Admin/Auser" element={<Auser/>} />
      <Route path="/Admin/Products" element={<AallProduct/>} />
      <Route path="/Admin/Revenue"element={<AdminRevenue/>} />
      <Route path="/Admin/Products/Sofa" element={<Asofa/>} />
      <Route path="/Admin/Products/Bowl" element={<ABowls/>} />
      <Route path="/Admin/Products/Plant" element={<Aplants/>} />
      <Route path="/Admin/Products/Lamp" element={<ALamps/>} />
      <Route path="/Admin/Products/Mattress" element={<Amattress/>} />
      <Route path="/Admin/Products/Appliances" element={<Aappliances/>} />
      <Route path="/Admin/Productedit" element={<ProductEditPage/>} />
      <Route path="/Admin/ProductAddPage" element={<ProductAddPage/>} />
      <Route path="/Admin/ProductEdit/:id" element={<ProductEditPage/>} />
      <Route path="/Admin/OrderDetails/:id" element={<OrderDetails/>} />
      <Route path="/Admin/Orders" element={<AdminOrders/>} />
      {/* routennte ullil wrap cheyyaane so parent-pathname + child path name */}
    
    </Route>
 





    
</Routes>
        { !HeadFoot && <Footer />}
      </MyData.Provider>
    </>
  );
}

export default App;
