import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <Counter text="Mi Contador" />
  </React.StrictMode>,
  document.getElementById('root')
);


