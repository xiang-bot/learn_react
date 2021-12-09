import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {
    state = {
        number : 3,
        show: true
    }
    render() { 
        const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null;
        return (
            <div>
                {comp}
                <button onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>n加1</button>
                <button onClick={()=>{
                    this.setState({
                        show: !this.state.show
                    })
                }}>显示与隐藏</button>
            </div>
        )
    }
}
