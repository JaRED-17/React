import API from '../API'

class User extends API {

    static login = () => this.callAPI('/api/user/login');

    static registration = () => this.callAPI('/api/user/registration');
}

export default User;