import React from 'react'
import { client, urlFor } from '../../lib/Client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'

const productDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} height="500px" width="500px"/>
                </div>
                <div className='small-images-container'>
                  { /*image?.map((item, ) => (
                    <img src={urlFor(item)} className='' onMouseEnter='' />
                  )) */}
                </div>
            </div>
            <div className='product-detail-desc'>
              <h1>{name}</h1>
              <div className='reviews'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
              <h4>Details:</h4>
              <p>{details}</p>
              <p className='price'>Ksh{price}</p>
              <div className='quantity'>
                <h3>Quantity</h3>
                <p className='quantity-desc'>
                  <span className='minus' onClick={decQty}><AiOutlineMinus /></span>
                  <span className='num' onClick=''>{qty}</span>
                  <span className='plus' onClick={incQty}><AiOutlinePlus /></span>
                </p>
              </div>
              <div className='buttons'>
                <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
                <button type='button' className='buy-now' onClick={handleBuyNow}>Buy Now</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }`

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
      params: {
        slug: product.slug.current
      }
    }))

    return {
      paths,
      fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery)
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, product }
    }
  }

export default productDetails