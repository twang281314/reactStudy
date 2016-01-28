import React from 'react';
import {DatePicker,message} from 'antd';

const App=React.createClass({
    getInitialState(){
        retturn {
           date: '' 
        };
    },
    handleChange(value){
        this.setState({
            date: value
        });
    },
    render(){
       return <div>
       <DatePicker onchange={this.handleChange} />
       </div>
       <div style={{marginTop: 20}}>当前日期:{this.state.date.toString()}</div>
    }
});

export default App;
