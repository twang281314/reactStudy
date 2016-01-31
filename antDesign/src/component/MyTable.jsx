'use strict'
import React,{Component} from 'react';
import ReactDOM from  'react-dom';
import { Table } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name'
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

class MyTable extends Component{
    
    getInitialState(){
        return {
           columns: columns,
           data:data
        };
    }
    handleChange(value){
        this.setState({
            columns: columns,
            data:data
        });
    }
    render(){
       return <div>
                <h4>中号表格（紧凑型）</h4>
                <Table columns={columns} dataSource={data} size="middle" />
                <h4>小号表格</h4>
                <Table columns={columns} dataSource={data} size="small" />
              </div>
    }
}
export default MyTable;
