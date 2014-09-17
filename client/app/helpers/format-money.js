import Ember from 'ember';

function formatMoney(value) {
	return (value % 100 === 0 ?
	        value / 100 + '.00' :
	        parseInt(value / 100, 10) + '.' + value % 100);
}

export { formatMoney };

export default Ember.Handlebars.makeBoundHelper(formatMoney);
