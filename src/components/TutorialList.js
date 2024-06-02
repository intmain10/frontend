import React from 'react';
import Tutorial from './Tutorial';
import './TutorialList.css'

const tutorials = [
  {
    id: 1,
    title: 'HTML Basics',
    description: 'Learn the basics of HTML, the essential language for creating web pages.',
    link: 'https://www.geeksforgeeks.org/javascript/?ref=home-articlecards',
    image: 'https://th.bing.com/th/id/OIP.wtbphh9buB7NAjHoCtv74wAAAA?rs=1&pid=ImgDetMain'
  },
  {
    id: 2,
    title: 'CSS Fundamentals',
    description: 'Master the basics of CSS and learn how to style your web pages.',
    link: 'https://www.geeksforgeeks.org/css-tutorial/',
    image: 'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png'
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    description: 'Get started with JavaScript, the programming language of the web.',
    link: 'https://www.geeksforgeeks.org/javascript/?ref=home-articlecards',
    image: 'https://logodix.com/logo/615103.png'
  },
  {
    id: 4,
    title: 'C',
    description: 'Get started with C, the programming language of the Computer Science.',
    link: 'https://www.geeksforgeeks.org/c-programming-language/',
    image: 'https://th.bing.com/th/id/OIP.NMmF2qfNniqFGQZSSiEaOQHaHa?rs=1&pid=ImgDetMain'
  },
  {
    id: 5,
    title: 'C++',
    description: 'Get started with C++, the programming language of the Computer Science.',
    link: 'https://www.geeksforgeeks.org/c-plus-plus/',
    image: 'https://logospng.org/wp-content/uploads/c-plus-plus.png'
  },
  {
    id: 6,
    title: 'JAVA',
    description: 'Get started with JAVA, the programming language of the Backend.',
    link: '/tutorials/javascript',
    image: 'assets/images/javascript.jpeg'
  },
  {
    id: 7,
    title: 'Python',
    description: 'Get started with Python, the programming language of the web.',
    link: '/tutorials/javascript',
    image: 'assets/images/javascript.jpeg'
  },
  {
    id: 8,
    title: 'DSA',
    description: 'Get started with DSA.',
    link: '/tutorials/javascript',
    image: 'assets/images/javascript.jpeg'
  }, {
    id: 9,
    title: 'Database Management ',
    description: 'Get started with Database Management, the programming language of the Database',
    link: '/tutorials/javascript',
    image: 'assets/images/javascript.jpeg'
  }
];

function TutorialList() {
  return (
    <div className="container">
      <h2 className="text-center">Popular Tutorials</h2>
      <div className="row">
        {tutorials.map(tutorial => (
          <div key={tutorial.id} className="col-md-4">
            <Tutorial tutorial={tutorial} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialList;
