import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'

const Footer = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* --------- Left Section -------- */}
        <div className=''>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a comprehensive doctor appointment booking platform developed to streamline healthcare access for patients and practitioners. By combining technology with medical expertise, Prescripto delivers a reliable and user-friendly experience for scheduling consultations and managing care.</p>
        </div>

        {/* -------- Center Section -------- */}
        <div className=''>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                <li onClick={() =>{ navigate('/'); scrollTo(0,0)}}>Home</li>
                <li onClick={() =>{ navigate('/about'); scrollTo(0,0)}}>About us</li>
                <li onClick={() =>{ navigate('/contact'); scrollTo(0,0)}}>Contact us</li>
                <li> <a href="https://www.google.com/privacypolicy">Privacy policy</a></li>
            </ul>
        </div>

        {/* -------- Right Section ---------- */}
        <div className=''>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li >+91-1800-1260-666</li>
                <li >mediline.prescripto@gmail.com</li>
            </ul>
        </div>
      </div>
        {/* ---------- Copyright text ----------- */}

      <div className=''>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
