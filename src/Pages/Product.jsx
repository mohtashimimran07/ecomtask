import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
// import RealatedProducts from '../Components/RelatedProducts/RealatedProducts';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product=all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      {/* <RealatedProducts/> */}
    </div>
  )
}

export default Product
