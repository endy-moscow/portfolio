import React from 'react'
import { connect } from 'react-redux'

import store from '../../store/index'
import reducer from '../../reducers/index'
import { setFilter } from '../../actions/filter'

function TagsList(props) {
    return (
        <div className='filter'>
            {props.filters.map(filter =>
                <a key={filter.id} onClick={() => {props.onSetFilter(filter.name)}}>
                    {filter.name}
                </a>
            )}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filters: state.filters,
        activeFilter: state.activeFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => {
          let action = setFilter(filter)
          dispatch(action);
        }
    };
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(TagsList);
export default Filter;
