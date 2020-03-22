import React from 'react';
import { withRouter } from 'react-router-dom';
import Banner from '../components/UI/Banner/Banner';
import Items from '../containers/Items/Items';

const HomePage = props => {
    return (
        <React.Fragment>
            <Banner />
            <Items {...props} />
        </React.Fragment>
    )
}

export default withRouter(HomePage);