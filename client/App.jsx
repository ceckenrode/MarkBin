import React from 'react';
import Header from './components/Header';
import BinsList from './components/bins/BinsList';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
