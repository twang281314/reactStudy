import { Menu, Breadcrumb, Icon } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import './css/main.css';
import 'antd/lib/index.css';
//import { Table,Button } from 'antd';
import Table from './src/component/MyTable.jsx';

ReactDOM.render(<Table />,  document.getElementById('mountNode'));

