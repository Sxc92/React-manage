import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import  { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '/page1', <PieChartOutlined />),
//     getItem('Option 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const items : MenuItem[] = [
    {
        label: 'Option 1',
        key: '/page1',
        icon: <PieChartOutlined />,
        // children: []
    },
    {
        label: 'Option 2',
        key: '/page2',
        icon: <DesktopOutlined />,
        // children: []
    },
    {
        label: 'User',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Tom',
                key: '3',
                // icon: <DesktopOutlined />,
                // children: []
            },
            {
                label: 'Bill',
                key: '4',
                // icon: <DesktopOutlined />,
                // children: []
            },
            {
                label: 'Alex',
                key: '5',
                // icon: <DesktopOutlined />,
                // children: []
            },
        ]
    },
    {
        label: 'Team',
        key: '/page4',
        icon:  <TeamOutlined />,
        children: [
            {
                label: 'Team 1',
                key: '6',
                // icon: <DesktopOutlined />,
                // children: []
            },
            {
                label: 'Team 2',
                key: '8',
                // icon: <DesktopOutlined />,
                // children: []
            }
        ]
    },
    {
        label: 'Files',
        key: '9',
        icon: <FileOutlined />,
        children: []
    },
]

const MainMenu = () => {
    const navigateTo = useNavigate()

    // 获取当前路径
    const currentRoute = useLocation()

    const menuClick = (e: { key: string }) => {
        console.log("点击了菜单", e.key);
        // 1.触发路由跳转 编程式导航跳转，
        navigateTo(e.key)
    }

    // 该方法和变量可以保证 菜单只有一项打开
    const [openKeys, setOpenKeys] = useState([''])
    const handleOpenChange = (keys: string[]) => {
        // keys是一个数组 记录当前哪一项是展开的
        console.log(keys);
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <div>

            <Menu theme="dark"
                // 表示当前选中项的样式
                defaultSelectedKeys={[currentRoute.key]} 
                mode="inline" items={items}
                onClick={menuClick}
                onOpenChange={handleOpenChange}
                // 当前菜单展开项的keys数组
                openKeys={openKeys}
            />
        </div>
    )
}

export default MainMenu