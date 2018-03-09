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
                  cover={project.cover[0]}
                  color={project.color[0]}
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
