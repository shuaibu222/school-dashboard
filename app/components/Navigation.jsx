'use client';

import { useContext } from 'react';
import { MyContext } from '../hooks/MyContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiMessageDetail } from 'react-icons/bi';

export default function Navigation() {
  const { showMenu, setShowMenu } = useContext(MyContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav-first-row">
          <div className="nav-icons" onClick={toggleMenu}>
            <RxHamburgerMenu className="hamburger icons" />
          </div>
          <form>
            <input
              type="text"
              name="search"
              id="search"
              aria-label="search"
              className="nav-search"
              placeholder="Search..."
            />
            <div className="nav-icons search">
              <BiSearch className="icons" />
            </div>
          </form>
        </div>
        <div className="nav-second-row">
          <div className="nav-icons">
            <IoIosNotificationsOutline className="notification icons" />
          </div>
          <div className="nav-icons">
            <BiMessageDetail className="message icons" />
          </div>
        </div>
      </nav>
    </header>
  );
}
