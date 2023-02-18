import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Electrical Appliances">Electrical Applicances</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Electronic accessories">Electronic accessories</option>
              <option value="Sports"> Sports </option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Electrical Appliances")}>Electrical Applicances</option>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
