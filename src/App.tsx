import { useState } from 'react'
import C1 from './components/c1'
import { Button } from 'antd'
import {FastBackwardOutlined} from "@ant-design/icons"
// import 'antd/dist/antd.css';
import router from './router'
import { useRoutes, Link } from 'react-router-dom'
const App = ()=> {
  const [count, setCount] = useState(0)
  // 
  const outlet = useRoutes(router)
  return (
    <>
      <div className='App'>
        {/* 顶级组件
        <C1></C1>
        <Button type='primary'></Button>
        <FastBackwardOutlined style={{fontSize: '40px', color: '#08c'}}></FastBackwardOutlined>
        
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> */}
        {outlet}
      </div>
    </>
  )
}

export default App
