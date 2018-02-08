import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Delete_Todos, Remove_Todo, Add_Todo } from '../actions/action';


class Todos extends Component {
  constructor(props) {
    super(props);
    this.state={
      input: ""
    }
  };

  onNewTodo(e) {
    this.props.Add_Todo(this.refs.newTodo.value);
    this.setState({input: ""});
  }

  onChange(e) {
    this.setState({input: e.target.value});
  }

  delete(e) {
    this.props.Delete_Todos();
  }

  removeOne(todo) {
    this.props.Remove_Todo(todo);
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {
          this.props.todos.map((todo,i) => <div><em>{todo}</em>
            <button onClick={e => this.delete(i)}>delete</button>
          </div>)
        }

        <br /><input ref='newTodo' placeHolder='type new todo' type="text" />
        <button onClick={this.onNewTodo.bind(this)}>enter new todo</button>
        <button onClick={this.delete.bind(this)}>delete todos</button>
      </div>
    );
  }
}

function mapStateToProps ({todos}){
  return {todos};
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({Add_Todo, Remove_Todo, Delete_Todos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
