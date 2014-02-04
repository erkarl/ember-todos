export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
  isEdit: false,

  is_done: function(key, value){
    var model = this.get('model');

    if(value === undefined){
      return model.get('is_done');
    } else {
      model.set('is_done', value);
      var onIsDoneUpdateSuccess = function(){
        // console.log('Successfully updated is_done value.');
      };
      var onIsDoneUpdateFailure = function(){
        alert('Failed to update is_done value.');
      };
      model.save(onIsDoneUpdateSuccess, onIsDoneUpdateFailure);
      return value;
    }
  }.property('model.is_done'),

  actions: {
    deleteTodo: function(todo){
      console.log('Delete TODO');
      var onTodoDeleteSuccess = function(){
        // console.log('Successfully deleted TODO');
      };
      var onTodoDeleteFailure = function(){
        alert('Failed deleting TODO');
      };
      todo.destroyRecord().then(onTodoDeleteSuccess, onTodoDeleteFailure);
    },

    editTodo: function(){
      this.set('isEdit', true);
    },

    acceptEdit: function(){
      var _this = this;
      var onValidateSuccess = function(){
        // console.log('Validate Success');
        _this.set('isEdit', false);
        var model = _this.get('model');
        var onAcceptEditSuccess = function(){
          // console.log('Successfully edited todo.');
        };
        var onAcceptEditFailure = function(){
          alert('Failed editing todo');
        };
        model.save().then(onAcceptEditSuccess, onAcceptEditFailure);
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
