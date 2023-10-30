import React from 'react'
import License from './License'
import './Footer.css';
import Terms from './Terms';
import Cards from './Cards';
import CompanyDetails from './CompanyDetails';
import SocialMedia from './SocialMedia';
export default function Footer() {
  return (
    <>
    <div className='footer-all'>
    <CompanyDetails/>
    <SocialMedia/>
    <Cards/>
    <Terms/>
    <License/>
    </div>
    </>
  )
}
