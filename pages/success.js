import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runFireWorks } from '../lib/utils'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, [])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'><BsBagCheckFill /></p>
            <h2>Karibu Tena</h2>
            <p className='email-msg'>Check your email inbox for the receipt</p>
            <p className='dscription'>
                If you have any questions or comments, please email <a className='email' href='mailto: maureen@gmail.com'>maureen@gmail.com</a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success