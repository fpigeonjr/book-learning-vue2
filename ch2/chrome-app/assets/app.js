const POMODORO_STATES = {
    WORK: 'work',
    REST: 'rest'
}

const STATES = {
    STARTED: 'started',
    STOPPED: 'stopped',
    PAUSED: 'paused'
}

const WORKING_TIME_LENGTHS_IN_MINUTES = 25;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;

new Vue({
    el: '#app',

    data: {
        state: STATES.STOPPED,
        minute: WORKING_TIME_LENGTHS_IN_MINUTES,
        second: 0,
        pomodoroState: POMODORO_STATES.WORK,
        timestamp: 0
    },

    computed: {
        title() {
            return this.pomodoroState === POMODORO_STATES.WORK ?
                'Work!' : 'Rest!'
        },
        min() {
            if (this.minute < 10) {
                return '0' + this.minute
            }

            return this.minute
        },
        sec() {
            if (this.second < 10) {
                return '0' + this.second
            }

            return this.second
        }
    },

    methods: {
        start() {
            this.state = STATES.STARTED
            this._tick()
            this.interval = setInterval(this._tick, 1000)
        },

        pause() {
            this.state = STATES.PAUSED
            clearInterval(this.interval)
        },

        stop() {
            this.state = STATES.STOPPED
            clearInterval(this.interval)
            this.pomodoroState = POMODORO_STATES.WORK
            this.minute = WORKING_TIME_LENGTHS_IN_MINUTES
            this.second = 0
        },

        _tick() {

            if (this.second !== 0) {
                this.second--

                    return
            }

            if (this.minute !== 0) {
                this.minute--
                    this.second = 59

                return
            }
            // toggle working /resting intervals
            this.pomodoroState = this.pomodoroState ===
                POMODORO_STATES.WORK ? POMODORO_STATES.REST :
                POMODORO_STATES.WORK

            if (this.pomodoroState === POMODORO_STATES.WORK) {
                this.minute = WORKING_TIME_LENGTHS_IN_MINUTES
            } else {
                this.minute = RESTING_TIME_LENGTH_IN_MINUTES
            }
        }
    }

})