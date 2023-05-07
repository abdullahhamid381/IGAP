import React, { Fragment } from 'react'
import './Footer.scss'
import {FaFacebook,FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col" style={{marginTop:"20px"}}>
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div>
            <div className="footer-col" style={{marginTop:'-75px'}}>
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><FaFacebook/></a>
                <a href="#"><BsInstagram/></a>
                <a href="#"><FaLinkedinIn/></a>
                <a href="#"><AiOutlineTwitter/></a>
              </div>
            </div>
          </div>
        </div>
     
      </footer>
      <div>
          <center><h4 style={{color:'white',background:'#535357',padding:'10px  0 10px 0',margin:'0',fontWeight:'lighter'}}>Copyright All Rights Reserved Ase Shopping</h4></center>
        </div>
    </Fragment>
  )
}

export default Footer