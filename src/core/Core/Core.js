import News from '../News';
import User from '../User';

class Core {
    /* News */
    static News = (date) => News.news(date);
    static allNews = () => News.allNews();
    static newsStatus = () => News.getStatus();

    /* User */
    static Login = () => User.login();
    static Registration = () => User.registration();
    static userStatus = () => User.getStatus();
}

export default Core;