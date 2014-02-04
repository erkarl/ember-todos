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
      };
      var onCreateTodoFailure = function(){
        alert('Failed adding todo!');
      };
      var onValidateSuccess = function(){
        _this.store.createRecord('todo', hash).save().then(onCreateTodoSuccess, onCreateTodoFailure);
      };
      var onValidateFailure = function(){
        console.log('Validation failure.');
      };
      this.validate().then(onValidateSuccess, onValidateFailure);
    },

    markAllTodosComplete: function(){
      var _this = this;
      this.setEach('is_done', true);
      var onMarkAllDoneSuccess = function(){
        // console.log('Successfully marked all complete.');
      };
      var onMarkAllDoneFailure = function(){
        alert('Failed marking everything complete.');
      };
      Ember.RSVP.all(this.content.invoke('save')).then(onMarkAllDoneSuccess, onMarkAllDoneFailure);
    }

  },

  validations: {
    task:{
      length: { minimum: 5, maximum: 255, messages: { tooShort: 'Task should be longer than 4 characters.', tooLong: 'Task should be less than 256 characters' } }
    }
  }

});
