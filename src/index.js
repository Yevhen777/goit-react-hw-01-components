import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('div', { a: 5 }, 'Текст');
ReactDOM.render(element, document.getElementById('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('#root')
// );

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('#root'));
