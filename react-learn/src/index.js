import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import img1 from './assets/yx1.png'
import img2 from './assets/yx2.png'
import img3 from './assets/yx3.png'

const src = [img1, img2, img3];

let index = 1;
let timer;
const container = document.getElementById('root')

function render() {
  ReactDOM.render( <
    img src = {
      src[index]
    }
    alt = "这个是图片" / > , container
  );
}

function start() {
  clearInterval(timer)
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render() // 每一次渲染都是要调用这个
  }, 2000)
}

function stop() {
  clearInterval(timer)
}
container.onmouseenter = function () {
  stop()
}

container.onmouseleave = function () {
  start()
}

render()

start()