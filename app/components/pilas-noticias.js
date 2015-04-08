import Ember from 'ember';

export default Ember.Component.extend({
  logs: [],
  didInsertElement: function() {
    this.set('logs', window.pilas_log.posts);
  },

});
