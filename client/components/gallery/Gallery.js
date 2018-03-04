import React from 'react'
import { connect } from 'react-redux'
import store from '../../store/index'
import Tile from '../tile/tile.jsx'

function List (props) {
    var list = props.projects
    if (props.activeFilter !== 'ALL') {
        list = list.filter((i) => i.tags.indexOf(props.activeFilter) !== -1);
    }
    return (
        <div className='gallery'>
            {list.map(project =>
                <Tile
                  key={project.id}
                  title={project.title}
                  keyword={project.keyword}
                  date={project.date}
                  color={project.color_one}
                />
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        activeFilter: state.activeFilter
    };
}
const Gallery = connect(mapStateToProps)(List);
export default Gallery;
