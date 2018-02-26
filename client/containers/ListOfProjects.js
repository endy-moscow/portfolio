import React from 'react'
import { connect } from 'react-redux'

import store from '../store/index'

function List(props) {
    var list = props.projects
    if (props.activeFilter !== 'ALL') {
        list = list.filter((i) => i.tags.indexOf(props.activeFilter) !== -1);
        console.log(list);
    } 
    return (
        <ul>
            {list.map(project =>
                <li key={project.id}>{project.name}</li>
            )}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        activeFilter: state.activeFilter
    };
}

const ListOfProjects = connect(mapStateToProps)(List);
export default ListOfProjects;
