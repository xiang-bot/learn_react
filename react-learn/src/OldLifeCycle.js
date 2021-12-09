import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            n : 0
        }
        console.log('constructor','第一个生命周期函数诞生了')
        // 这里不能调用setState 为了避免问题 严谨使用构造函数
    }
    componentWillMount() {
        console.log('componentWillMount组件即将被挂载','和构造函数一样，只会运行一次')
        // this.setState({
        //     n:1
        // })
    }
    componentDidMount(){
        console.log('componentDidMount',"挂载完成");
    }

    componentWillReceiveProps(next){
        console.log('componentWillReceiveProps 属性改变时接收到新的属性对象',next)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate','是否重新渲染',this.props,nextProps,this.state,nextState)
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate','组件即将被渲染')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate','组件以完成重新渲染',prevProps,prevState);
    } 
    componentWillUnmount(){
        console.log('componentWillUnmount','组件被销毁')
    }
    render() {
        console.log('render 虚拟dom树  返回的react元素挂载到虚拟dom树中')
        return (
            <div>
                <h1>旧版生命周期</h1>
                <h2>属性n:{this.props.n}</h2>
                <h2>状态n:{this.state.n}</h2> 
                <button onClick={()=>{
                    this.setState({
                        n:this.state.n+1
                    })
                }}>状态加1</button>
            </div>
        )
    }
}
