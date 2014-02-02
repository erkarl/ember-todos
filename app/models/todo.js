var Todo = DS.Model.extend({
  task: DS.attr('string'),
  is_done: DS.attr('boolean')
});

export default Todo;
