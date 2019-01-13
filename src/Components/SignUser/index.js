import React, { Fragment }from 'react';
import Login from './Login';
import Register from './Register';



export default ({ match: {url}, loginSubmit, history, registerSubmit, auth, user }) => 
    <Fragment>
        { url === '/Login' || url === '/' ? <Login loginSubmit={loginSubmit} auth={auth} history={history} userValid = {user}/> : (url === '/Register' ? <Register registerSubmit={registerSubmit}/> : <div>Not Found</div>) }
    </Fragment>

