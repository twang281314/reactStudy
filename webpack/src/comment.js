import React from 'react';
import ReactDom from 'react-dom';
import marked from 'marked';
import $ from 'jquery';

class CommentBox extends React.Component {
    constructor(props){
        super(props)
        //state 初始化直接在构造函数完成
        this.state = {data:[]}
    }
    //函数的书写方式也发生了变化
    loadCommentsFromServer(){
        //还不太明白，总之this到了ajax中指向的对象就发生了变化
        var url = this.props.url
        $.ajax({
            url:url,
            dataType:"json",
            cache:false,
            //利用箭头函数传参，可以少去了bind this
            success:(data) => {
                this.setState({data: data})
            },
            error:(xhr,status,err) => {
                console.log(url,status,err.toString())
            }
        })
    }
    handleSubmitComment(data){
        var url = this.props.url
        $.ajax({
            url:url,
            type:"POST",
            data:data,
            dataType:"json",
            cache:false,
            success:(data) => {
                this.setState({data:this.state.data.concat(data)});
            },
            error:(xhr,status,err) => {
                console.log(this.props.url,status,err.toString())
            }
        })
    }
    componentDidMount(){
        this.loadCommentsFromServer()
        //setTimeout(this.loadCommentsFromServer,2000)
    }

    render() {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onSubmitComment={this.handleSubmitComment.bind(this)} />
            </div>
        )
    }
}


class CommentList extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className='commentList'>
                {commentNodes}
            </div>
        )
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    rawMarkup(){
        var rawMarkup = marked(this.props.children.toString(),{sanitize:true})
        return {__html:rawMarkup}
    }
    render(){
        return (
            <div className='comment'>
                <h2 className='commentAuthor'>
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>

        )
    }
}

class CommentForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {author:"",text:""}
    }
    handleAuthorChange(event){
        this.setState({author:event.target.value})
    }
    handleTextChange(event){
        this.setState({text:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        var author = this.state.author.trim()
        var text = this.state.text.trim()
        if(!text||!author) {
            return;
        }
        this.props.onSubmitComment({author:author,text:text});
        this.setState({author:"",text:""})
        return false;
    }

    render(){
        return (
            <form className='commentForm' onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' onChange={this.handleAuthorChange.bind(this)}
                       placeholder='怎么称呼您呢？爷' value={this.state.author} />
                <input type='text' onChange={this.handleTextChange.bind(this)}
                       placeholder='爷有什么赐教？' value={this.state.text} />
                <input type='submit' value='提交' />
            </form>
        )
    }
}


ReactDom.render(
    <CommentBox url="http://localhost:8080/api/comment" />,document.getElementById('content')
)