import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'client', // TODO: loaded via config
  Resolver: Resolver
});

Ember.Handlebars.registerBoundHelper('money', function(value){
	return (value % 100 === 0 ?
          value / 100 + '.00' :
          parseInt(value / 100, 10) + '.' + value % 100);
});

loadInitializers(App, 'client');

export default App;
