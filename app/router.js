import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('press', { path: '/join'});
  this.route('distraction', { path: '/workshop' });
});

export default Router;
