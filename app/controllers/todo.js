export default Ember.ObjectController.extend({

  is_done: function(key, value){
    console.log('is done changed!');
    console.log('value changed: ' + value);
    var model = this.get('model');

    if(value === undefined){
      return model.get('is_done');
    } else {
      model.set('is_done', value);
      var onIsDoneUpdateSuccess = function(){
        console.log('Successfully updated is_done value.');
      };
      var onIsDoneUpdateFailure = function(){
        console.log('Failed to update is_done value.');
      };
      console.log('saving new values');
      model.save(onIsDoneUpdateSuccess, onIsDoneUpdateFailure);
      return value;
    }
  }.property('model.is_done'),

  updateTodo: function(){
    console.log('update record');
  },

  actions: {
    deleteTodo: function(todo){
      console.log('Delete TODO');
      var onTodoDeleteSuccess = function(){
        console.log('Successfully deleted TODO');
      };
      var onTodoDeleteFailure = function(){
        console.log('Failed deleting TODO');
      };
      // TODO: Figure out why destroyRecord isn't returning a promise
      todo.destroyRecord(onTodoDeleteSuccess, onTodoDeleteFailure);
    }
  }
});
