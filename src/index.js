// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import DataDisplay from './DataDisplay';
import Menu from './menu';


const course = [
  {
    title: "I'AM ĐINH BẢO NGỌC",
    main: " Hello there, appealing and interactive user experiences on the web.I thrive on turning design concepts into functional and responsive websites.",
    img: "../images/ĐINH-NGỌC-(3).gif",
  },

];

const App = () => {
  return (
    <div>
      {course.map((courseItem) => (
        <DataDisplay
          key={courseItem.title}
          title={courseItem.title}
          main={courseItem.main}
          image={courseItem.img}
        />
      ))}
    </div>
  );
};

const root = document.getElementById('root');
const render = ReactDOM.createRoot(root);
render.render(<App />);
const root1 = document.querySelector('.menu');
const render1 = ReactDOM.createRoot(root1);
render1.render(<Menu/>);
