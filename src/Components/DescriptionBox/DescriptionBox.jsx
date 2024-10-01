import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of goods 
            and services over the internet. It serves as a virtual marketplace, enabling businesses to showcase 
            their products or services to a global audience. These platforms often provide a seamless and secure 
            shopping experience, allowing users to browse, select items, and make purchases with ease. 
            E-commerce websites incorporate various features such as product catalogs, search functionality, 
            secure payment gateways, and order tracking systems. They have become integral to modern commerce,
             offering convenience and accessibility to consumers while providing businesses with an expanded reach 
             beyond traditional brick-and-mortar establishments. E-commerce platforms continue to evolve, incorporating innovative technologies and 
             personalized experiences to enhance customer satisfaction and streamline online transactions.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
