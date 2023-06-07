import React from 'react'
import ReactDOM from 'react-dom/client'
// npm i reset-css 干净利落去除默认样式， 更适合在企业的场景
// 下面进行引用
import 'reset-css'

// UI框架样式

// 全局样式
import '@/assets/styles/global.scss'
// 组件样式
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
