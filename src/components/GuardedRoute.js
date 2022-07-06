import React, { Fragment } from 'react';
import Restricted from './Restricted';

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
    return(
        <Fragment>
            {auth && <Component {...rest} />}
            {!auth && <Restricted />}
        </Fragment>
    )
}

export default GuardedRoute;