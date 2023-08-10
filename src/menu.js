// Menu.js
import React, { useState } from 'react';

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('thông tin cá nhân');

  const handleItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <ul className="menu-container">
      <li style={{ '--i': 1 }}>
        <a href="###" onClick={() => handleItemClick('skill')}>
          <span className={`menu ${selectedMenuItem === 'skill' ? 'active' : ''}`}>skill</span>
          <span className={`menu_icon ${selectedMenuItem === 'skill' ? 'active' : ''}`}><ion-icon name="body-outline"></ion-icon></span>
        </a>
      </li>
      <li style={{ '--i': 2 }}>
        <a href="###" onClick={() => handleItemClick('trình độ')}>
          <span className={`menu ${selectedMenuItem === 'trình độ' ? 'active' : ''}`}>trình độ</span>
          <span className={`menu_icon ${selectedMenuItem === 'trình độ' ? 'active' : ''}`}><ion-icon name="library-outline"></ion-icon></span>
        </a>
      </li>
      <li style={{ '--i': 3 }}>
        <a href="###" onClick={() => handleItemClick('thông tin cá nhân')}>
          <span className={`menu ${selectedMenuItem === 'thông tin cá nhân' ? 'active' : ''}`}>thông tin cá nhân</span>
          <span className={`menu_icon ${selectedMenuItem === 'thông tin cá nhân' ? 'active' : ''}`}><ion-icon name="id-card-outline"></ion-icon></span>
        </a>
      </li>
      <li style={{ '--i': 4 }}>
        <a href="###" onClick={() => handleItemClick('sở thích')}>
          <span className={`menu ${selectedMenuItem === 'sở thích' ? 'active' : ''}`}>sở thích</span>
          <span className={`menu_icon ${selectedMenuItem === 'sở thích' ? 'active' : ''}`}><ion-icon name="heart-circle-outline"></ion-icon></span>
        </a>
      </li>
    </ul>
  );
};

export default Menu;
