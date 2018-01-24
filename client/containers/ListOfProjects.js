import React from 'react'
import { connect } from 'react-redux'

import store from '../store/index'
import reducer from '../reducers/index'




function List(props) {
    return (
        <ul>
            {props.projects.map(project =>
                <li key={project.id}>{project.name}</li>
            )}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        projects: state.projects,

    };
}

const ListOfProjects = connect(mapStateToProps)(List);
export default ListOfProjects;
