class EventEmitter {
    constructor () {
        this.events = {}
    }

    emit (eventName, data) {
        const fn = this.events[eventName]

        if (fn) {
            return fn.call(null, data)
        }
    }

    subscribe (eventName, fn) {
        this.events[eventName] = fn
    }
}

export default EventEmitter