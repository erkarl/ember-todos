// export default DS.FixtureAdapter.extend();
/*
export default DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:5000/api'
});
*/

// Production
export default DS.RESTAdapter.extend({
  host: 'http://flask-restful-todo.herokuapp.com/api'
});
