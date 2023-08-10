// DataDisplay.js
import React from 'react';

const DataDisplay = ({ title, main, image }) => {
  const downloadURL = 'https://drive.google.com/file/d/1icxJ7a2w7JXrKKf1gXLq0e8bkpIySWyb/view?usp=sharing';
  return (
    <div id="container">
      <div className="container_content">
        <span className="container_title">{title}</span>
        <br />
        <div className="container_main">{main}</div>
      </div>
      <div className="container_icon">
        <a className='facebook' href='https://www.facebook.com/Ngoc52hz'><ion-icon  title='facebook'  name="logo-facebook"></ion-icon></a>
        <a href="mailto:animationmusic300@gmail.com"><svg xmlns="http://www.w3.org/2000/svg"  className='gmail' aria-label="Gmail" role="img" viewBox="0 0 512 512"><rect width="100px"  rx="15%" fill="#fff"/><path fill="#f2f2f2" d="M120 392V151.075h272V392"/><path fill-opacity=".05" d="M256 285L120 392l-4-212"/><path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z"/><path fill-opacity=".08" d="M317 392h77V159H82"/><path fill="#f2f2f2" d="M97 121h318L256 234"/><path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z"/><path fill="none" stroke="#de5145" stroke-linecap="round" stroke-width="44" d="M97 143l159 115 159-115"/></svg></a>
        <a href='https://www.tiktok.com/@dinhngoc52hz'><i title='tiktok' className="fa-brands fa-tiktok"></i></a>
        <a href='https://github.com/adminmember'><i title='my github'  className="fa-brands fa-github"></i></a>
      </div>
      <div className="container_button">
      <a href={downloadURL} download>
        <button>Download CV</button>
      </a>
      </div>
      <img className="container_images" src={image} alt="" />
    </div>
  );
};

export default DataDisplay;
