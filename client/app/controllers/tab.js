import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		removeTabItem: function(tabItem) {
			this.get('tabItems').removeObject(tabItem);
		}
	}
});
