import * as React from 'react';
import Account from './Account';
import Login from './Login';
import Calendar from './Calendar';

const Body = (props) => {


    if (props.display === "register") {
        return (
            <Account />
        )
    }

    if (props.display === "login") {
        return (
            <Login setDisplay={props.setDisplay} />
        )
    }

    return (
        <Calendar />
    );
}

export default Body