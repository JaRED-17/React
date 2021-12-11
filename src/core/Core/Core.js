import News from '../News';
import User from '../User';

class Core {
    constructor () {
        this.news = new News();
        this.user = new User();
    }
}

export default new Core();