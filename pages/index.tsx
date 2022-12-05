import React from 'react'
import { client } from '../lib/Client'

import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, bannerData}) => {
  return (
    <>
      < HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      {console.log(bannerData)}
      <div className='products-heading'>
        <h2>Best Selling Groceries</h2>
        <p>Fruits of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => {
          return <Product key={product._id} product={product}/>;
        })}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home
