import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import reducers from '../reducers/index'
import {filter} from '../actions/index'

class ProjectsList extends Component {
  showFilter () {
    return this.props.tags.map ((tag) => {
      return (
        <div onClick={() => this.props.filter(tag)}
          key={tag.id}> {tag.name}
        </div>
      )
    })
  }
  showList () {
    return this.props.projects.map ((project) => {
      var i = project.id-1
      return (
        <div key={project.id}>
          {project.name}
        </div>
      )
    })
  }
  render () {
    return (
      <div>
        <h4>FILTERS</h4>
        {this.showFilter()}
        <hr />
        <h4>LIST</h4>
        {this.showList()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects,
    tags: state.tags
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({filter: filter}, dispatch)
}

export default connect (mapStateToProps,mapDispatchToProps)(ProjectsList);
