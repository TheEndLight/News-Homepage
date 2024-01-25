import { useState } from 'react';

import burgerMenu from '../assets/images/icon-menu.svg';
import closeMenu from '../assets/images/icon-menu-close.svg';

export const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <>
      <ul
        className={`${
          menuClicked ? 'hidden' : ''
        } absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] lg:flex lg:items-center lg:w-[438px] lg:place-content-around lg:p-0 lg:h-auto lg:relative lg:text-[16px]`}
      >
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer lg:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeMenu} onClick={handleClick} alt='' />
        </li>
        <li className='mb-8 lg:mb-0'>
          <a className='hover:text-SoftRed sm:text-4' href='#'>
            Home
          </a>
        </li>
        <li className='mb-8 lg:mb-0'>
          <a className='hover:text-SoftRed' href='#'>
            New
          </a>
        </li>
        <li className='mb-8 lg:mb-0'>
          <a className='hover:text-SoftRed' href='#'>
            Popular
          </a>
        </li>
        <li className='mb-8 lg:mb-0'>
          <a className='hover:text-SoftRed' href='#'>
            Trending
          </a>
        </li>
        <li className='mb-8 lg:mb-0'>
          <a className='hover:text-SoftRed' href='#'>
            Categories
          </a>
        </li>
      </ul>
      <img
        className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer lg:hidden`}
        src={burgerMenu}
        onClick={handleClick}
        alt='Burger menu'
      />
    </>
  );
};
