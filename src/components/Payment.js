import React, { useState } from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Input from "./Input";
import Navbar from "./Navbar";
import { PaystackButton } from 'react-paystack';
import  {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { selectItems, selectTot, clearBasket } from "../slice/basketSlice";
import { addOrder } from "../slice/orderSlice";
import { addPay } from "../slice/paySlice";
import useAxiosPrivate from "../hooks/useAxios";
import "./Payment.css";
function Payment() {
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectItems);
   const total = useSelector(selectTot);
  // const total = useSelector(selectTotal)
  const [fullname, SetFullname] = useState("");
  const [address1, SetAddress1] = useState("");
  const [address2, SetAddress2] = useState("");
  const [state, SetState] = useState("");
  const [city, SetCity] = useState("");
  const [phone, SetPhone] = useState("");
  const [email, SetEmail] = useState("");

  // pk_live_5e1f2acad42dd3d6f2dd66bd7da82bc76370ef19
  // const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964"; // Replace with your public key
  const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964";
  const address = {
    fullname,
    address1,
    address2,
    state,
    city,
    phone,
    email,
  };
  // To PAYSTACK
  const config = {
    reference: new Date().getTime().toString(),
    email: address.email,
    amount: total * 100,
    publicKey: publicKey,
  };
  // TO ORDER DB
  const addressdata = {
    fullname,
    address1,
    address2,
    state,
    city,
    phone,
    email,
  };
  //
  // const products = {}
  const orderdata = {
    userId: auth?.id,
    products: items,
    total: total,
    address: addressdata,
    status: config.reference.status,
  };
  // TO PAYMENT DB
  const paydata = {
    fullname,
    email,
    amount: total,
    reference: config.reference,
  };
  const PostPay = async()=>{
    try {
       const response = await axiosPrivate.post("/payments", paydata);
       const result = response.data
       result && dispatch(addPay(paydata))
      
    } catch (error) {
      console.log(error)
    }
   
  }

  const PostOrder = async () => {
    try {
      const response = await axiosPrivate.post("/orders", orderdata);
      const result = response.data;
      result && dispatch(addOrder(orderdata));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaystackSuccessAction = (reference) => {
    PostPay()
    PostOrder()
    dispatch(clearBasket())
    navigate("/success");
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Proceed to Pay",
    onSuccess: (reference) => {
      handlePaystackSuccessAction(reference);
    },
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="payment">
      <Announcement />
      <Navbar />
      <div className="payment__container">
        <div className="billing__formWrapper">
          <div className="billing__title">Delivery Address</div>
          <form>
            <Input
              placeholder="Fullname"
              type="text"
              value={fullname}
              onChange={(e) => SetFullname(e.target.value)}
            />
            <Input
              placeholder="Residential Address"
              type="text"
              value={address1}
              onChange={(e) => SetAddress1(e.target.value)}
            />
            <Input
              placeholder="Address 2"
              type="text"
              value={address2}
              onChange={(e) => SetAddress2(e.target.value)}
            />
            <Input
              placeholder="City"
              type="text"
              value={state}
              onChange={(e) => SetState(e.target.value)}
            />
            <Input
              placeholder="State"
              type="text"
              value={city}
              onChange={(e) => SetCity(e.target.value)}
            />
            <Input
              placeholder="Phone number"
              type="text"
              value={phone}
              onChange={(e) => SetPhone(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </form>
          <div className="pay__container">
            <div className="pay__image">
              <img src="/images/visa-mastercard.png" alt="cardimg" />
            </div>
            <PaystackButton className="pay__title" {...componentProps} />
            {/* <button className='pay__title'>Proceed to Pay</button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
