import Ember from 'ember';

var FoodController = Ember.ArrayController.extend({
	needs: ['table'],
	actions: {
		addFood: function(food){
	    var table = this.get('controllers.table.model'),
	        tabItems = table.get('tab.tabItems');
	    tabItems.createRecord({
	      food: food,
	      cents: food.get('cents')
	    });
	  }
	}
});

export default FoodController;

