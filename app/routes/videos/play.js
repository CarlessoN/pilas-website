import Ember from 'ember';

export default Ember.Route.extend({
  needs: ['video'],
  model: function(params) {
    return this.get('videosService').getVideobyIndex(params.video_id);
  }
});
