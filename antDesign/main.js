import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import ReactDOM from 'react-dom';
import React from 'react';
import './css/main.css';
import 'antd/lib/index.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

function onClick(item,keyValue){
  console.log(item);
  console.log(keyValue);
}
//import { Table,Button } from 'antd';
//import Table from './src/component/MyTable.jsx';

//ReactDOM.render(<Table />,  document.getElementById('mountNode'));
ReactDOM.render(
    <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"></div>
        <Menu mode="inline" theme="dark" onClick={onClick}
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1" href="index.html">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
      <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
         <Tabs onChange={callback} type="card">
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{ height: 590 }}>
              内容区域
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
  </div>
,document.getElementById('mountNode'));
