import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('press', { path: '/press'});
  this.route('distraction', { path: '/distraction' });
});

export default Router;
