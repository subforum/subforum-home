import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('join', { path: '/join'});
  // this.route('workshop', { path: '/workshop' });
});

export default Router;
