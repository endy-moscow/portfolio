import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import projectsData from '../store/projects-data'
import filtersData from '../store/filters-data'
import activeFilter from './activeFilter'

const reducer = combineReducers ({
  projects: projectsData,
  filters: filtersData,
  activeFilter,
  router
})

export default reducer;
