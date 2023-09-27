// import React from 'react'

import React, { useState } from 'react';

const BackTop = () => {
 const [visible, setVisible] = useState(false);

 const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
 };

 const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 window.addEventListener('scroll', handleScroll);

 return (
    <button
      onClick={handleClick}
      style={{ display: visible ? 'block' : 'none' }}
    >
      Back to top
    </button>
 );
};

export default BackTop;