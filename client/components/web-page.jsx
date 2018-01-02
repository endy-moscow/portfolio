import React from 'react';
import CarsList from '../containers/cars-list.js';
import Details from '../containers/details.js';
// import '../../css/style';

const WebPage = () => (
  <div>
    <h2>Cars:</h2>
    <CarsList />
    <hr />
    <h3>Details:</h3>
    <Details />
  </div>
);

export default WebPage;
