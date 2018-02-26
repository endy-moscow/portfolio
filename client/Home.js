import React from 'react'

import ListOfProjects from './containers/ListOfProjects'
import ListOfFilters from './containers/ListOfFilters'

const Home = () => (
    <div>
        <ListOfFilters />
        <ListOfProjects />
    </div>
)

export default Home;
