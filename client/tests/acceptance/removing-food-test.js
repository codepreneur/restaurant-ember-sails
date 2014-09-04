import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Removing food', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('removing food', function() {
  visit('/tables/1');
  click('a:contains("Pizza")');
  click('button:contains("Remove Pizza")');
  andThen(function() {
    equal(find('#customer-tab:contains("Pizza")').length, 0,
      'expected not to find pizza in customer tab');
  });
});
