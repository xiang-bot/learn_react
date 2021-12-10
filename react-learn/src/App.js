import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
    return (
        <div>
            <ThreeLayout left={
                <h2>222222222222</h2>
            }>
             <p>lajsjfgawiwiau</p>
             <h1 className='left'>11111111111111</h1>
             {/* 组件中间的就是你的children 而你的属性就是你自己在组件里面设置的值 比如left
             则 直接调用props.left
             */}
            </ThreeLayout>
        </div>
    )
}
