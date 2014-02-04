export default Ember.ArrayController.extend(Ember.Validations.Mixin, {

  totalUnfinished: function() {
    return this.filterBy('is_done', false).get('length');
  }.property('@each.is_done'),

  todoInflection: function(){
    var totalUnfinished = this.get('totalUnfinished');
    if(totalUnfinished === 1){
      return 'item';
    } else {
      return 'items';
    }
  }.property('totalUnfinished'),



  actions: {
    createTodo: function(){
      var hash = this.getProperties('task');
      var _this = this;
      var onCreateTodoSuccess = function(){
        _this.setProperties({ task: '' });
        console.log('Successfully added todo.');
      };
      var onCreateTodoFailure = function(){
        alert('Failed adding todo!');
      };
      var onValidateSuccess = function(){
        console.log('Validation success.');
        _this.store.createRecord('todo', hash).save().then(onCreateTodoSuccess, onCreateTodoFailure);
      };
      var onValidateFailure = function(){
        console.log('Validation failure.');
      };
      this.validate().then(onValidateSuccess, onValidateFailure);
    },

    markAllTodosComplete: function(){
      console.log('mark everything complete');
      this.setEach('is_done', true);
      this.content.invoke('save');
    }

  },

  validations: {
    task:{
      length: { minimum: 5, maximum: 255, messages: { tooShort: 'Task should be longer than 4 characters.', tooLong: 'Task should be less than 256 characters' } }
    }
  }

});
