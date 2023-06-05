import React from 'react';
import Link from 'next/link';

import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 XYZ Electronics All rights reserverd</p>
      <p className="icons">
      <Link href='/' target='_blank'>  
         <AiFillInstagram />
      </Link>
      <Link href='/'>  
        <AiOutlineTwitter />
        </Link>
        <Link href='/'>  
         <AiFillInstagram />
      </Link>
      <Link href='/'>  
        <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  )
}

export default Footer