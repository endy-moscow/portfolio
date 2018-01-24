import React from 'react'
import { connect } from 'react-redux'

import store from '../store/index'
import reducer from '../reducers/index'
import { setFilter } from '../actions/filter'

function List(props) {
    let time = Date.now().toString()
    return (
        <section>
            {props.filters.map(filter =>
                <button
                  onClick={() => {props.onSetFilter(filter.name)}}
                  key={filter.id}>
                    {filter.name}
                </button>
            )}
            <div>{props.activeFilter}</div>
        </section>
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

const ListOfFilters = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListOfFilters;
