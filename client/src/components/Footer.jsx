import React from 'react'
import Logo from '../img/logo.png';
const Footer = () => {
  return (
    <footer className='container d-flex justify-content-between  py-2  align-items-center bg-primary text-light' style={{borderRadius:"5px"}}>
      <img src={Logo} width={100} alt="" className="img-fluid bg-light" style={{borderRadius:"5px",padding:"5px 10px"}} />
      <p className='pt-3'>Barcha huquqlar himoyalagan</p>
    </footer>
  )
}

export default Footer