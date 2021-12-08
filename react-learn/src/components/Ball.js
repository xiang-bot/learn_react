import React, { Component } from 'react'
import './ball.css'

export default class Ball extends Component {
    constructor(props) {
        super(props);
        // 属性中要传递横轴坐标的速度
        // 需要传递背景颜色
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed
        };
        const duration = 16;
        setInterval(()=>{
            // 根据速度来改变left和top值
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;

            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;

            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }else if(newLeft >= document.documentElement.clientWidth - 100){
                newLeft =  document.documentElement.clientWidth - 100
                this.setState({
                    xSpeed: -this.state.xSpeed // 横坐标反向
                })
            }

            if(newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }else if(newTop >= document.documentElement.clientHeight - 100){
                newTop =  document.documentElement.clientHeight - 100
                this.setState({
                    ySpeed: -this.state.ySpeed // 横坐标反向
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            })
        },duration);
    }
    render() {
        return (
            <div className="ball" style={{
                left : this.state.left,
                top : this.state.top,
                background:this.props.bg || "yellow"
            }}>
            </div>
        )
    }
}
