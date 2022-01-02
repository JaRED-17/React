import News from '../News'
import User from '../User'
import Comments from '../Comments'
import EventEmitter from '../EventEmitter'

class Core {
    constructor () {
        this.news = new News()
        this.user = new User()
        this.comments = new Comments()
        this.events = new EventEmitter()
    }
}

const core = new Core()

window.core = core

export default core