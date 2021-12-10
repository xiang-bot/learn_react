import React, { Component } from 'react'
import Modal from './Modal'

export default class Test extends Component {
    state = {
        showModal:false
    }
    render() {
        return (
            <div>
                <img src='https://img2.baidu.com/it/u=2104714570,664182233&fm=26&fmt=auto' alt='111'/>
             {
                 this.state.showModal ?
                <Modal bg="rgba(0,234,234,.5)">
                <div onClick={()=>{
                    this.setState({
                        showModal:false
                    })
                }}>蒙层组件</div>
            </Modal> : ''
                }
                <button onClick={()=>{
                    this.setState({
                        showModal:true
                    })
                }}>显示蒙层</button>
            </div>
        )
    }
}
