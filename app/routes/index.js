import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {

    // you probably don't need the application class
    // to be added to the body
    Ember.$('body').addClass(this.routeName);


    


  },
  deactivate: function() {
    Ember.$('body').removeClass(this.routeName);
  },
});
