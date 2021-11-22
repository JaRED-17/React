import React from "react";

class User extends React.Component {

    static login = () => fetch('login').then(response => response.text())

    static register = () => fetch('register').then(response => response.text())
}

export default User;