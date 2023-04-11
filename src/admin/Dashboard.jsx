import styled from "styled-components";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import "./Dashboard.css"
import { toast } from "react-toastify";

const Dashboard = () => {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const logOut=()=>{
  //   dispatch(logout())
  //   toast.success("You are not logged out")
  //   navigate("/adminlogin")
  //   window.location.reload();

  // }
  return (
    <div className="Dashboard">
      <div className="sideNav">
        <h3>Quick Links</h3>
       
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/product"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/neworders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/allproducts"
        >
          All Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/newusers"
        >
          Users
        </NavLink>
       
         <button  className="adminlogout">LogOut</button> 
        
      </div>
      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
