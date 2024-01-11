import React from 'react';
import './navBar.scss';
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
    <div
      className={`listElement ${isSelected ? 'listElement-selected' : ''} flex opacity-50`}
      onClick={onClick}
    >
      <div
        className={`elementsBorder mr-4 w-[20px] self-center border-b-2  border-white ${
          isSelected ? 'w-[300px]' : ''
        }`}
      ></div>{' '}
      <div className="text-[16px] uppercase">{name}</div>
    </div>
  );
};
export default NavBar;
