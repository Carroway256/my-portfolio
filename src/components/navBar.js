import React from 'react';
import './navBar.scss';
import { Link } from 'gatsby';
const NavBar = ({ tab, setTab }) => {
  return (
    <div>
      <NavBarItem name={'about'} onClick={() => setTab('about')} isSelected={tab === 'about'} />
      <NavBarItem
        name={'experience'}
        onClick={() => setTab('experience')}
        isSelected={tab === 'experience'}
      />
      <NavBarItem
        name={'portfolio'}
        onClick={() => setTab('portfolio')}
        isSelected={tab === 'portfolio'}
      />
    </div>
  );
};
const NavBarItem = ({ name, onClick, isSelected }) => {
  return (
    <Link to={`#${name}`} smooth>
      <div
        className={`listElement ${isSelected ? 'listElement-selected' : ''} flex `}
        onClick={onClick}
      >
        <div
          className={`elementsBorder mr-4 w-[20px] self-center border-b-2  border-white ${
            isSelected ? 'w-[300px]' : ''
          }`}
        ></div>{' '}
        <div className={`text-[16px] uppercase ${isSelected ? 'text-yellow-500' : ''}`}>{name}</div>
      </div>
    </Link>
  );
};
export default NavBar;
