export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
  isEdit: false,

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
    },

    editTodo: function(){
      this.set('isEdit', true);
    },

    acceptEdit: function(){
      var _this = this;
      var onValidateSuccess = function(){
        console.log('Validate Success');
        _this.set('isEdit', false);
        var model = _this.get('model');
        model.save();
      };
      var onValidateFailure = function(){
        console.log('Validation failure');
      };
      this.validate().then(onValidateSuccess, onValidateFailure);
    }

  },

  validations: {
    task:{
      length: { minimum: 5, maximum: 255, messages: { tooShort: 'Task should be longer than 4 characters.', tooLong: 'Task should be less than 256 characters' } }
    }
  }

});
