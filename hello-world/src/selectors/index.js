export const getText = state => state.text;
export const getFilter = state => state.filter;

export const getVisableTodos = state => {
  const {
    todos: { data },
    filter
  } = state;
  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter(t => t.completed);
    case "active":
      return data.filter(t => !t.completed);
    default:
      return new Error("Unknow filter: " + filter);
  }
};
