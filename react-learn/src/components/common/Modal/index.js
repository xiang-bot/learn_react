import React, { Component } from 'react'
import './index.css'

export default function Modal(props) {
    var defaultProps = {
        bg: "rgba(0,0,0, .5)"
    };
    var datas = Object.assign({}, defaultProps, props)
    console.log(datas)
    return (
            <div className='modal' style={{
                background:datas.bg
            }}>
                <div className='modal-center'>
                {datas.children}
                </div>
            </div>
    )
}
