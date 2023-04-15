import React from 'react';
import { FaYoutube, FaFacebook } from "react-icons/fa";

function Icon() {
  return (
      <div>
          <span className='fontIcon'>
            <FaYoutube className='icon'/>
              <FaFacebook className='icon'/>
            Icon
          </span>
        </div>
  )
}

export default Icon