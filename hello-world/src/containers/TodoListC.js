import { connect } from "react-redux";
import todoList from "../components/TodoList";
import { toggleTodo, fetchTodos } from "../actions";
import { getVisableTodos } from "../selectors";

const mapStateToProps = state => ({
  todos: getVisableTodos(state).toJS()
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
