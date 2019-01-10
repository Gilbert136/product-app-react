import React, { Fragment }from 'react';
import Login from './Login';
import Register from './Register';



export default ({ url, onSubmit }) => 
    <Fragment>
        { url === '/Login' || url === '/' ? <Login onSubmit={onSubmit}/> : (url === '/Register' ? <Register /> : <div>Not Found</div>) }
    </Fragment>

