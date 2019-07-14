import { connect } from "react-redux";
import todoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const getVisableTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => t.completed);
    case "active":
      return todos.filter(t => !t.completed);
    default:
      return new Error("Unknow filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisableTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
