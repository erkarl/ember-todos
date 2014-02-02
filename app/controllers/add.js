export default Ember.Controller.extend({
  actions: {
    someAction: function(){
      console.log('hi');
      var hash = this.getProperties('task', 'is_done');
      var onCreateTodoSuccess = function(){
        console.log('Successfully added todo');
      };
      var onCreateTodoFailure = function(){
        console.log('Failed adding todo');
      };
      this.store.createRecord('todo', hash).save().then(onCreateTodoSuccess, onCreateTodoFailure);
    }
  }

           /*
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
  */
});
