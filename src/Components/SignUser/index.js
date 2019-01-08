import React, { Fragment }from 'react';
import Login from './Login';
import Register from './Register';



export default ({ url }) => 
    <Fragment>
        { url === '/Login' || url === '/' ? <Login /> : (url === '/Register' ? <Register /> : <div>Not Found</div>) }
    </Fragment>

