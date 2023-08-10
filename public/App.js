// App.js
import React from 'react';
import Menu from 'menu';
import DataDisplay from 'DataDisplay';

const course = [
  {
    title: " I'AM ĐINH BẢO NGỌC ",
    main: " Hello there, appealing and interactive user experiences on the web.I thrive on turning design concepts into functional and responsive websites.",
    img: "../images/ĐINH NGỌC (1).gif",
  },
];

const App = () => {
  return (
    <div>
      <Menu />
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

export default App;
