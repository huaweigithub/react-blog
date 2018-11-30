console.log('My Minimal React Webpack Babel Setup');

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup!!!!';

ReactDOM.render(
  <h3>{title}</h3>,
  document.getElementById('app')
);

module.hot.accept();