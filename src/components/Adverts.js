import React from 'react'
import "./Adverts.css"
import Iframe from "react-iframe";

function Adverts({url,title,link}) {
  return (
    <div className="advert__container">
      {/* A short video clips  */}
      <Iframe
        url={url}
        position="relative"
        width="95%"
        id="myId"
        className="myClassname"
        height="100%"
        styles={{ height: "150px" }}
      />
      <div className="adstitle">{title}</div>
      <span className="adslink">
        <a href={link}>{link}</a>
      </span>
    </div>
  );
}

export default Adverts