// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
        secondsLeft: props.initialCount
    }
    }

    decrease = () => {
        const newTime = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newTime
        })
    }

    render() {        
        return (
            <div onClick={this.decrease}>
                <h1>
                {this.state.secondsLeft > 0 ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!'}
                </h1>
            </div>
            
        )
}
}


export default Bomb