import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import BredCrums from '../components/Bredcrums/BredCrums.jsx';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import Description from '../components/Description/Description.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <div>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product