import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ClientENV.locationType
});

Router.map(function() {
  this.resource('tables', function(){
		this.resource('table', {path: ':table_id'});
	});
  this.route('application');
});

export default Router;
