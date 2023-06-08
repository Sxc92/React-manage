import React, { lazy } from 'react'
import Home from "@/views/Home"
// import About from "@/views/About"
const About = lazy(() => import("../views/About"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
// const Home = lazy(() => import("../views/Home"))
// 重定向组件
import { Navigate } from 'react-router-dom'

// <React.Suspense fallback={<div>loading...</div>} > 懒加载 loading组件

// 抽取成组件
const loadingCompenent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>} >
       {comp}
    </React.Suspense>
)

const routes = [
    // 嵌套路由
    {
        path: '/',
        element: <Navigate to="/page1" />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: loadingCompenent(<Page1/>)
            },
            {
                path: '/page2',
                element: loadingCompenent(<Page2/>)
            }
        ]
    },
    // 通用匹配默认跳转， 后期可以改成404页面
    {
        path: '*',
        element: <Navigate to="/page1" />
    }
]

export default routes