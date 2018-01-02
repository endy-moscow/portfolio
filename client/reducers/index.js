import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import Project from './project'

const reducers = combineReducers ({
  cars: CarsReducers,
  active: ActiveCar,
  projects: Project
});

export default reducers;
