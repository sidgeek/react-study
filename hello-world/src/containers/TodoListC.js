import { connect } from "react-redux";
import todoList from "../components/TodoList";
import { toggleTodo, fetchTodos } from "../actions";

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
  todos: getVisableTodos(state.todos.data, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
