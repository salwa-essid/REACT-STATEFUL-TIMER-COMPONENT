import React, {Component} from 'react'
import Timer from './Timer'

class Timing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeMs: 0
        }
        this.start = this.start.bind(this)
        this.pause = this.pause.bind(this)
    }
    start () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            () => {
               this.setState({
                   timeMs: this.state.timeMs + 1000
               }) 
            },
            1000
        )
        this.setState({
            interval: interval
        })
    }
    pause () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    render() {
        return <div>
            <Timer ms={this.state.timeMs} />
            <div classname="organisation">
            <input
                type="button" className=" btn button2"
                value="Start"
                onClick={this.start} />
            <input
                type="button" className=" btn button3"
                value="Pause"
                onClick={this.pause} />
                </div>
        </div>
    }
}

export default Timing