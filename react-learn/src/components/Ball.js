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
            xSpeed:props.xSpeed,
            ySpeed:props.ySpeed
        };
        const duration = 16;
        setInterval(()=>{
            // 根据速度来改变left和top值
            const xDis = this.props.xSpeed * duration / 1000;
            const yDis = this.props.ySpeed * duration /1000;

            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + xDis;

            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
        },duration)
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
