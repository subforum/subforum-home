import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('press', { path: '/press'});
  this.route('distraction', { path: '/distraction' });
  this.route('emily-test', { path: '/emily-test'});
});

export default Router;
