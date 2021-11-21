import React from "react";

class User extends React.Component {

    static login = () => fetch('login').then(response => {
        return response.text();
    })

    static register = () => fetch('register').then(response => {
        return response.text();
    })
}

export default User;