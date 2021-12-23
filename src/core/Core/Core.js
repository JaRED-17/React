import News from '../News'
import User from '../User'
import EventEmitter from '../EventEmitter'

class Core {
    constructor () {
        this.news = new News()
        this.user = new User()
        this.events = new EventEmitter()
    }
}

export default new Core()