import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {linka,linkb} from "../utils/footerlinks"
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          <Link to="/">
            <h2>NaijaFabrics</h2>
          </Link>
          <div className="footer__desc">
            <p>
              NaijaFabrics is your Nos 1 stop shop for your ready made bespoke
              African Prints products. We also customise to your taste and
              design.
            </p>
          </div>
          <div className="footer__social">
            <div className="icon">
              <FacebookIcon />
            </div>
            <div className="icon2">
              <InstagramIcon />
            </div>
            <div className="icon3">
              <TelegramIcon />
            </div>
          </div>
        </div>
        <div className="footer__center">
          <h2>Links</h2>
          <div className="footer__links">
            <div className="footer__linksa">
              {linka.map((link) => (
                <a href={link.links} key={link.id}>
                  <div className="footer__linkitems" key={link.id}>
                    {link.heading}
                  </div>
                </a>
              ))}
            </div>
            <div className="footer__linksb">
              {linkb.map((link) => (
                <a href={link.links} key={link.id}>
                  <div className="footer__linkitems" key={link.id}>
                    {link.heading}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__right">
          <h2>Contact</h2>
          <span>
            <HomeIcon />
            Address: Plot 188 Iganmode Road Tollgate Ota
          </span>
          <span>
            <PhoneIcon />
            tel: 08028580080, 08164941121
          </span>
          <span>
            <MailIcon />
            Email: email@yahoo.com
          </span>
          <div className="footer__img">
            <div className="footer__imgcont">
              <img src="/images/visa-mastercard.png" alt="cardimg" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        {/* <button className="footerbtn"><Link to="/adminlogin">admin</Link></button> */}
        <span>
          @copyright 2023{" "}
          <Link to="/admindashboard" className="admin">
            NaijaFabrics
          </Link>{" "}
        </span>
        <span>Made By Diaryofatechnovies</span>
      </div>
    </>
  );
}

export default Footer