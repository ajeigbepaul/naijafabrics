import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
// import FilterColor from "../components/FilterColor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Productss.css";
import QuantityContainer from "../components/QuantityContainer";
import { useLocation } from 'react-router-dom'
import { publicRequest } from "../requestMethods";
import {useDispatch} from "react-redux"
import { addToBasket } from "../slice/basketSlice";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
// moment(new Date(row.time)).format("YYYY-MM-DD")}
function Productss() {
  const {qty} = useAuth() 
  const dispatch = useDispatch();
  const location  = useLocation()
  const id = location.pathname.split("/")[2]

  const [product, setProduct] = useState({})
  const [otherimages, setOtherimages] = useState([])
  const [images, setImages] = useState([])


 

  // HANDLES ADD TO CART BASKET.
  const handleAddToCart = (e) => {
  const refreshToastnotify = toast.loading("Loading...");
  e.preventDefault();
  dispatch(addToBasket({...product,qty}));
  toast.success("added to cart!!", { id: refreshToastnotify });
};
  useEffect(()=>{
   const getProduct = async()=>{
    try {
      const res = await publicRequest.get(`/products/${id}`)
      setProduct(res.data)
      
    } catch (error) {
      
    }
   }
   getProduct()
  },[id])
  useEffect(()=>{
    const getOtherimages = async()=>{
     try {
       const res = await publicRequest.get(`/images`)
       setOtherimages(res.data)
       
     } catch (error) {
       
     }
    }
    getOtherimages()
   },[id])

   // FILTER OTHERIMAGES
  useEffect(() => {
      setImages(
        otherimages.filter((image) => id === image?.productid)
      );
  }, [id,otherimages]);
  console.log(images)
  return (
    <div className="productss__container">
      <Announcement />
      <Navbar />
      <div className="productss__wrapper">
        <div className="productss__prodimg">
          <img src={product?.image?.url} alt="prod" />
          {images?.map((image) => (
            <div className="productss__otherimages">
              {/* {console.log(image.images)} */}
              <h2>Other product images</h2>
              {image?.images?.map((item) => (
                <img key={item._id} src={item?.url} alt="otherimages" />
              ))}
            </div>
          ))}
        </div>
        <div className="productss__infocontainer">
          <div className="productss__title">
            {product.instock === "yes" ? (
              <span>instock</span>
            ) : (
              <span>sold out</span>
            )}
          </div>
          <h2>{product.title}</h2>
          <div className="productss__desc">
            <p>{product.description}</p>
          </div>
          <div className="productss__desc">
            <p>(Minimum Order Quantity:{product.moq})</p>
          </div>
          <div className="productss__price">
            <span>
              ₦ {product.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </div>
          <div className="productfilter__container">
            <div className="productfilter">
              <span>Colors : </span>{" "}
              <div className="filter__color">
                {/* <FilterColor color={product.colors} /> */}
                {product.colors}
              </div>
            </div>
            <div className="productfilter">
              <span>Size</span>
              <div className="selectprodsize">{product.size}</div>
            </div>
          </div>
          <div className="productaddContainer">
            <QuantityContainer />
            <div className="addToCart" onClick={handleAddToCart}>
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Productss;
