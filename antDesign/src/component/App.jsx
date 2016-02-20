'use strict'
import React from 'react';
import {DatePicker,message} from 'antd';
import 'antd/lib/index.css';

const App=React.createClass({
    getInitialState(){
        return {
           date: '' 
        };
    },
    handleChange(value){
        this.setState({
            date: value
        });
    },
    render(){
       return <div><div>
       <DatePicker onchange={this.handleChange} />
       </div>
       <div style={{marginTop: 20}}>当前日期:anytao</div>
       </div>
    }
});

export default App;
