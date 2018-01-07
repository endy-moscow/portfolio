import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import Projects from './project'
import Tags from './tag'
import ActiveProject from './project-active'

export default combineReducers ({
  router: routerReducer,
  projects: Projects,
  tags: Tags,
  active: ActiveProject
})
