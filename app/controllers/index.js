export default Ember.ArrayController.extend({

  totalUnfinished: function() {
    return this.filterBy('is_done', false).get('length');
  }.property('@each.is_done'),

  todoInflection: function(){
    var totalUnfinished = this.get('totalUnfinished');
    if(totalUnfinished === 1){
      return 'item'
    } else {
      return 'items'
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
      this.store.createRecord('todo', hash).save().then(onCreateTodoSuccess, onCreateTodoFailure);
    },
    markAllTodosComplete: function(){
      console.log('mark everything complete');
      this.setEach('is_done', true);
    }
  }
});
