import React from 'react'
import { connect } from 'react-redux'
import Tile from '../tile/tile.jsx'

function ProjectsList(props) {
    var list = props.projects
    if (props.activeFilter !== 'ALL') {
        list = list.filter((i) => i.tags.indexOf(props.activeFilter) !== -1);
        console.log(list);
    }
    return (
        <div className='gallery'>
            {list.map(project =>
              <Tile
                key={project.id}
                link={project.link}
                title={project.name}
                gif={project.cover}
                color={project.color} />
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

const Gallery = connect(mapStateToProps)(ProjectsList);
export default Gallery;
