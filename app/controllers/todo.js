export default Ember.Controller.extend({
  actions: {
    createTodo: function(){
      var hash = this.getProperties('task', 'is_done');
      var onCreateTodoSuccess = function(){
        console.log('Successfully added todo');
      };
      var onCreateTodoFailure = function(){
        console.log('Failed adding todo');
      };
      this.createRecord('todo', hash).then(onCreateTodoSuccess, onCreateTodoFailure);
    }
  }
});
