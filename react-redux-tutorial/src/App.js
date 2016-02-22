import React, { findDOMNode, Component} from  'react'
import ReactDOM from 'react-dom'
import { connect} from 'react-redux'
import * as action from './actions'

class App extends Component{
   changeHandle(){
     const node=ReactDOM.findDOMNode(this.refs.input);
     const value=node.value.trim();
     this.props.change(value);
   }
   render(){
       return (
          <div>
            <input type='text' value={this.props.propValue}
               onChange={this.changeHandle.bind(this)}
               ref="input"
            />
            {this.props.propsValue}
          </div>
       );
   }
}

function mapStateToProps(state){
    return {
     propsValue: state.value 
    }
}

//將state的指定值映射在props上 將action所有方法映射在props上
export default connect(mapStateToProps,action)(App);