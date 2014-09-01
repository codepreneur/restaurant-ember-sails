import Ember from 'ember';

var TablesRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('table');
	}
});

export default TablesRoute;
