import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

    showHide: function() {
    	this.$('.overlay').slideToggle('slow');
    },
  }
});
