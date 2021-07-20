import React from "react";

class User extends React.Component {
    static login = function () {
        return fetch('login').then((response) => {
            return response.text();
        })
    }
    static register = function () {
        return fetch('register').then((response) => {
            return response.text();
        })
    }
}

export default User;